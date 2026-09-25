// ============================================================
// VERCEL SERVERLESS FUNCTION — /api/chat
// ============================================================
// Receives a user message, retrieves relevant knowledge base
// context, calls Groq API, returns AI response.
//
// 🔒 GROQ_API_KEY lives in Vercel env vars — never exposed.
// ============================================================

import { knowledgeBase } from "../src/data/knowledgeBase.js";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

// ------------------------------------------------------------
// SIMPLE KEYWORD RETRIEVAL
// ------------------------------------------------------------
// Replaces the old vector store. Fast, no dependencies.
function findRelevantContext(query, topK = 4) {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter((w) => w.length > 3);

  const scored = knowledgeBase.map((item) => {
    const content = item.content.toLowerCase();
    let score = 0;
    for (const word of words) {
      if (content.includes(word)) score += 1;
    }
    // Boost exact phrase matches
    if (content.includes(q)) score += 3;
    return { ...item, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).filter((s) => s.score > 0);
}

// ------------------------------------------------------------
// SYSTEM PROMPT
// ------------------------------------------------------------
function buildSystemPrompt(context) {
  return `You are the friendly, professional AI assistant for HG Consulting Services, founded by Henry A. Golatt in Columbus, Ohio.

YOUR ROLE:
- Help visitors learn about HG Consulting's services, projects, awards, and founder
- Be warm, concise, and professional
- Use ONLY the context below to answer factual questions

RULES:
1. If the context contains the answer, use it — rewrite it naturally
2. If the context does NOT contain the answer, say: "I don't have that specific information. Please reach out to Henry directly at golatth1@gmail.com or connect on LinkedIn."
3. Never make up facts
4. Keep answers under 120 words unless asked for details
5. Use bullet points when listing multiple items
6. Speak in a natural, human, friendly tone

CONTEXT FROM HG CONSULTING WEBSITE:
${context || "No specific context found. Please answer generally and direct to contact if unsure."}`;
}

// ------------------------------------------------------------
// HANDLER
// ------------------------------------------------------------
export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== "string" || message.length > 500) {
      return res.status(400).json({ error: "Invalid message" });
    }

    // Retrieve relevant context
    const relevant = findRelevantContext(message, 4);
    const context = relevant
      .map((r) => `[${r.category}] ${r.content}`)
      .join("\n\n");

    // Build chat messages for Groq
    const chatMessages = [
      { role: "system", content: buildSystemPrompt(context) },
      ...history.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    // Call Groq
    const groqRes = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: chatMessages,
        temperature: 0.3,
        max_tokens: 400,
        stream: false, // Simple non-streaming version
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errText);
      return res.status(502).json({
        error: "AI service temporarily unavailable. Please try again.",
      });
    }

    const groqData = await groqRes.json();
    const reply =
      groqData.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat handler error:", err);
    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}
