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

  const { words, difficulty = "medium", type = "ai" } = req.body;

  if (!words || !Array.isArray(words) || words.length === 0) {
    return res.status(400).json({ error: "Invalid words array" });
  }

  if (words.length > 15) {
    return res.status(400).json({ error: "Too many words per request (max 15)" });
  }

  const prompt = type === "memory" ? 
`You are an expert in cognitive psychology and memory training.

TASK:
Create powerful and memorable association chains for vocabulary learning.

FOR EACH word:
1. Create EXACTLY ONE association chain of 3 words
2. Format: [word] -> [association1] -> [association2]
3. The associations MUST be:
   - vivid and specific
   - easy to imagine
   - logically connected in a chain
   - not generic or abstract

CHAIN EXAMPLES:
- dog -> bone -> hungry (dog chews bone, bone makes you hungry)
- time -> flies -> quickly (time flies, flies move quickly)
- book -> page -> story (book has pages, pages tell a story)

STRICT RULES:
- Avoid weak words like: "thing", "object", "concept"
- Each link must feel natural and memorable
- Prefer concrete, visual connections
- Chains should be unique and creative

QUALITY CHECK:
Before output:
- Ask: "Does this chain help remember the word through vivid associations?"
- If not — improve it

OUTPUT FORMAT:
Return ONLY a valid JSON array:
[{"word":"dog","chain":"bone -> hungry"}]

Words:
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
