// lib/groqClient.ts
export interface GroqMessage {
  role: "user" | "assistant";
  content: string;
}

export async function sendToGroq(messages: GroqMessage[]) {
  const API_KEY = process.env.GROQ_API_KEY;
  if (!API_KEY) throw new Error("GROQ_API_KEY not set");

  const res = await fetch("https://api.groq.com/v1/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Groq API error:", text);
    throw new Error("Groq API call failed");
  }

  const data = await res.json();

  // Adjust based on your Groq API structure
  return data.reply || "No reply from Groq";
}
