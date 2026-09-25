// ============================================================
// FRONTEND HELPER — calls /api/chat
// ============================================================

export async function sendChatMessage(message, history = []) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Failed to get response");
  }

  const data = await res.json();
  return data.reply;
}
