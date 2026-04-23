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

  const { words } = req.body;

  if (!words || !Array.isArray(words) || words.length === 0) {
    return res.status(400).json({ error: "Invalid words array" });
  }

  if (words.length > 15) {
    return res.status(400).json({ error: "Too many words per request (max 15)" });
  }

  const prompt = `You create English fill-in-the-blank exercises.

For EACH word in the list below:
1. Write ONE sentence (8-15 words) using that word
2. Replace the word with ___
3. Provide 4 options: 1 correct + 3 wrong that clearly don't fit

RULES FOR SENTENCES:
- Use varied grammar: mix Past Simple, Present Perfect, Conditional, passive voice
- Use varied contexts: science, emotions, travel, history, business, relationships
- Make sentences specific and vivid, NOT generic (avoid: 'I always check the ___', 'every ___')
- Sentences should feel like real, natural English
- Only ONE word can correctly fill the blank
- Wrong options must clearly not fit the sentence meaning

WRONG OPTIONS:
- Must be same part of speech as the correct word
- Must make NO grammatical or semantic sense in context
- Do NOT use near-synonyms that could also work

Output ONLY a raw JSON array, no explanation, no markdown:
[
  {
    "word": "day",
    "sentence": "She spent the entire ___ reviewing contracts before the merger.",
    "correct": "day",
    "options": ["day", "roof", "debt", "silence"]
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
