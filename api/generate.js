export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Basic origin check — replace with your actual Vercel domain
  const origin = req.headers.origin || "";
  const allowedOrigins = [
    "https://yourpath10k.vercel.app", // 🔴 замени на свой домен
  ];

  // Allow localhost for local dev
  const isLocalhost = origin.startsWith("http://127.0.0.1") || origin.startsWith("http://localhost");

  if (!isLocalhost && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const { words, difficulty = "medium", type = "ai", _prompt } = req.body;

  if (!words || !Array.isArray(words) || words.length === 0) {
    return res.status(400).json({ error: "Invalid words array" });
  }

  // Special: exam review uses a custom prompt passed directly
  if (type === "exam_review") {
    if (!_prompt) return res.status(400).json({ error: "Missing _prompt for exam_review" });
    try {
      const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [{ role: "user", content: _prompt }],
          temperature: 0.2,
          max_tokens: 1000,
        }),
      });
      if (!openaiRes.ok) {
        const err = await openaiRes.text();
        return res.status(502).json({ error: "OpenAI error: " + err });
      }
      const data = await openaiRes.json();
      const text = data.choices[0].message.content;
      const start = text.indexOf("[");
      const end = text.lastIndexOf("]");
      if (start === -1 || end === -1) return res.status(502).json({ error: "Invalid AI response" });
      const parsed = JSON.parse(text.slice(start, end + 1));
      res.setHeader("Cache-Control", "no-store");
      return res.status(200).json(parsed);
    } catch (e) {
      return res.status(500).json({ error: "exam_review failed: " + e.message });
    }
  }

  if (words.length > 15) {
    return res.status(400).json({ error: "Too many words per request (max 15)" });
  }

  // ===== SPELLING TYPE =====
  if (type === "spelling") {
    const spellingPrompt = `You are an English spelling expert creating spelling recognition exercises.

TASK:
For each word, create a spelling challenge where the student must identify the correctly spelled version.

FOR EACH word:
1. The correct spelling is the word itself
2. Create exactly 3 misspelled variants that look very similar to the correct word
3. All 4 options should look plausible at a glance

MISSPELLING RULES:
- Misspellings must be SUBTLE — change 1-3 letters max
- Common mistake types:
  • Double/single letter confusion: "necessary" → "neccessary", "accomodate"
  • Silent letters: "knowledge" → "knowlege"
  • ie/ei confusion: "believe" → "beleive"
  • Vowel swap: "separate" → "seperate"
  • Consonant swap: "privilege" → "priviledge"
- The word must still be RECOGNIZABLE as an attempt at the same word
- Do NOT create completely different words

CRITICAL: The word must be clearly recognizable despite misspelling.
BAD: "cat" → "kgt" (unrecognizable)
GOOD: "beautiful" → "beautifull", "beutiful", "beautyful"

OUTPUT FORMAT:
Return ONLY valid JSON array:
[
  {
    "word": "necessary",
    "correct": "necessary",
    "options": ["necessary", "neccessary", "necesary", "neccesary"]
  }
]

IMPORTANT:
- Shuffle options so correct answer is NOT always first
- Return ONLY the JSON array, no extra text

WORDS: ${JSON.stringify(words)}`;

    try {
      const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: spellingPrompt }],
          temperature: 0.7,
          max_tokens: 1500,
        }),
      });
      if (!openaiRes.ok) {
        const err = await openaiRes.text();
        return res.status(502).json({ error: "OpenAI error: " + err });
      }
      const data = await openaiRes.json();
      const text = data.choices[0].message.content;
      const start = text.indexOf("[");
      const end = text.lastIndexOf("]");
      if (start === -1 || end === -1) return res.status(502).json({ error: "Invalid AI response" });
      const parsed = JSON.parse(text.slice(start, end + 1));
      res.setHeader("Cache-Control", "no-store");
      return res.status(200).json(parsed);
    } catch (e) {
      return res.status(500).json({ error: "spelling failed: " + e.message });
    }
  }

  const prompt = type === "contextmemory" ?
`You are an expert English teacher creating memory-based exercises.

TASK:
You will receive EXACTLY 4 English words. Create ONE natural sentence that uses ALL 4 words.
Then provide 3 distractor options for each word (wrong answers for fill-in-the-blank).

SENTENCE RULES:
- The sentence MUST contain all 4 words naturally
- Length: 12–22 words
- Use ${difficulty === "easy" ? "simple everyday grammar (Present/Past Simple)" : difficulty === "hard" ? "advanced grammar (conditionals, passive, perfect tenses)" : "natural mixed grammar"}
- The sentence must sound like real English, not forced

DISTRACTORS RULES:
- 3 REAL wrong options per word (use actual English words, NOT "wrong1", "wrong2", "wrong3")
- Same part of speech as the correct word
- Grammatically plausible in the sentence BUT semantically wrong
- Not synonyms of the correct word
- Use common English words that fit the context

OUTPUT FORMAT — return ONLY valid JSON, no markdown:
{
  "sentence": "The sentence with [1] [2] [3] [4] as placeholders",
  "words": [
    {"slot": 1, "correct": "word1", "options": ["word1","distractor1","distractor2","distractor3"]},
    {"slot": 2, "correct": "word2", "options": ["word2","distractor1","distractor2","distractor3"]},
    {"slot": 3, "correct": "word3", "options": ["word3","distractor1","distractor2","distractor3"]},
    {"slot": 4, "correct": "word4", "options": ["word4","distractor1","distractor2","distractor3"]}
  ]
}

IMPORTANT:
- Replace each target word in the sentence with [1], [2], [3], [4] in order of appearance
- Shuffle the options array so correct answer is not always first
- Return ONLY the JSON object, no extra text

WORDS: ${JSON.stringify(words)}`

  : type === "memory" ? 
`You are an expert in cognitive psychology and memory training.

TASK:
Create HIGH-QUALITY, CREATIVE, and MEMORABLE association chains for vocabulary learning.

CORE IDEA:
Chains must be INTERESTING and UNEXPECTED — but still LOGICAL and CONNECTED.

--------------------------------
ASSOCIATION STYLE (VERY IMPORTANT):

Each chain must:
- Avoid obvious/basic associations
- Feel clever, surprising, or imaginative
- Still be understandable after a short thought

GOOD examples:
- dog -> loyalty -> knight -> armor
- time -> shadow -> sunset -> silence
- book -> portal -> magic -> dragon
- money -> power -> king -> throne

BAD examples (FORBIDDEN):
- dog -> bone -> food ❌ (too obvious)
- car -> wheel -> road ❌ (boring)
- book -> read -> study ❌ (predictable)

--------------------------------
CREATIVITY RULES:

- Use metaphor, imagery, or storytelling logic
- Prefer emotional, visual, or symbolic connections
- Each step should feel like a “mental leap”, but not random
- Avoid extremely obscure or rare associations

--------------------------------
CRITICAL RULES:

1. The chain MUST start with the original word
2. DO NOT repeat the word
3. Each word must clearly connect to the previous one
4. The chain must NOT feel random or broken

--------------------------------
QUALITY CHECK (STRICT):

Before output, verify:
- Is this chain non-obvious?
- Is it interesting or imaginative?
- Can it be visualized?
- Does each step connect logically?

If any answer is NO — regenerate the chain.

--------------------------------
OUTPUT FORMAT (STRICT):

Return ONLY valid JSON array:

[
  {"word":"dog","chain":"loyalty -> knight"},
  {"word":"time","chain":"shadow -> sunset"}
]

IMPORTANT:
- Do NOT include the original word inside "chain"
- "chain" must contain ONLY associations

--------------------------------
CHAIN LENGTH:
- Always use EXACTLY:
  ${difficulty === "hard" ? "3 associations" : "2 associations"}

--------------------------------
WORDS:
${JSON.stringify(words)}`

:

`You are an expert English teacher creating high-quality test questions.

TASK:
Create challenging and natural fill-in-the-blank exercises.

FOR EACH word:
1. Write ONE sentence (8–16 words)
2. Replace the target word with ___
3. Provide 4 options:
   - 1 correct answer
   - 3 clearly incorrect answers

SENTENCE RULES:
${difficulty === "easy" ? 
`- Use simple grammar (Present/Past Simple)
- Use everyday situations
- Avoid rare vocabulary
- Make sentences clear and direct` :

difficulty === "hard" ?
`- Use advanced grammar (conditionals, passive, perfect tenses)
- Use sophisticated contexts (business, science, abstract ideas)
- Make sentences nuanced and precise` :

`- Mix grammar naturally
- Use realistic contexts (work, travel, emotions, decisions)
- Avoid generic sentences like "I always ___ things"
- Make sentences feel like real-life English`
}

CRITICAL RULES FOR OPTIONS:
- All options MUST be the SAME part of speech
- Wrong answers MUST be:
   • grammatically possible
   • BUT logically incorrect
- Do NOT use synonyms or близкие слова
- There must be ONLY ONE correct answer

BAD EXAMPLE (forbidden):
"She ___ the door"
options: open, opened, opens, opening ❌

GOOD EXAMPLE:
"She carefully ___ the confidential document before signing it."
options: reviewed ✅, banana ❌, quickly ❌, mountain ❌

QUALITY CHECK:
Before output:
- Ensure ONLY ONE correct answer exists
- Ensure wrong answers cannot logically fit
- Ensure sentence sounds natural

OUTPUT FORMAT:
Return ONLY valid JSON:
[
  {
    "word": "example",
    "sentence": "She carefully ___ the confidential document before signing it.",
    "correct": "reviewed",
    "options": ["reviewed","banana","mountain","plastic"]
  }
]

Words:
${JSON.stringify(words)}`;

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 1.0,
        max_tokens: 1500,
      }),
    });

    if (!openaiRes.ok) {
      const err = await openaiRes.text();
      console.error("OpenAI error:", err);
      return res.status(502).json({ error: "OpenAI request failed" });
    }

    const data = await openaiRes.json();
    const text = data.choices[0].message.content;

    // contextmemory returns an object {}, others return an array []
    if (type === "contextmemory") {
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      if (start === -1 || end === -1) {
        console.error("No JSON object in response:", text);
        return res.status(502).json({ error: "Invalid AI response format" });
      }
      const parsed = JSON.parse(text.slice(start, end + 1));
      res.setHeader("Cache-Control", "no-store");
      return res.status(200).json(parsed);
    }

    const start = text.indexOf("[");
    const end = text.lastIndexOf("]");
    if (start === -1 || end === -1) {
      console.error("No JSON array in response:", text);
      return res.status(502).json({ error: "Invalid AI response format" });
    }

    const parsed = JSON.parse(text.slice(start, end + 1));

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json(parsed);

  } catch (e) {
    console.error("Handler error:", e);
    return res.status(500).json({ error: "Internal server error" });
  }
}
