// lib/groqClient.ts
export interface GroqMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function sendToGroq(messages: GroqMessage[], availableProducts: any[]) {
  const API_KEY = process.env.GROQ_API_KEY;
  if (!API_KEY) throw new Error("GROQ_API_KEY not set");

  // Group products by category for better organization
  const productsByCategory = availableProducts.reduce((acc: any, product: any) => {
    const category = product.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  const productList = Object.entries(productsByCategory)
    .map(([category, products]: [string, any]) => {
      const items = products.map((p: any) => `${p.name} (${p.price})`).join(', ');
      return `${category}: ${items}`;
    })
    .join('\n');

  const systemMessage: GroqMessage = {
    role: "system",
    content: `You are a friendly and helpful shopping assistant for an outdoor/lifestyle store. Chat naturally with customers like a real store employee would.

IMPORTANT RULES:
- Be conversational and friendly, not robotic
- DON'T list all products unless specifically asked "what do you have" or "show me everything"
- When customers ask general questions like "what do you have", respond naturally like: "We've got bags, footwear, gear, apparel, and accessories! What are you looking for today?"
- Only mention specific products when relevant to what the customer is asking for
- Keep responses concise and natural (2-3 sentences max usually)
- Use casual language like "We've got", "Sure thing!", "Happy to help!"
- When suggesting products, mention 2-3 options max, not everything

Our store carries:
${productList}

When customers want to:
- Browse: Suggest relevant categories or ask what they're shopping for
- Find something specific: Tell them if we have it and the price
- Add to cart: Confirm naturally like "Added the JaQ Bag to your cart!"

Examples of good responses:
- "What do you have?" → "We carry outdoor gear, bags, apparel, footwear and accessories! What brings you in today?"
- "Do you have bags?" → "Yes! We have the JaQ Bag for $139. It's perfect for travel. Want to add it to your cart?"
- "Show me jackets" → "We have the Trail Jacket for $159 - great for hiking and outdoor activities!"
- "I need something for hiking" → "For hiking, I'd recommend checking out our Trail Jacket ($159) or Peak Shorts ($69). What are you most interested in?"

Be helpful, natural, and conversational! Don't overwhelm customers with too much info at once.`
  };

  const fullMessages = [systemMessage, ...messages];

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: fullMessages,
      temperature: 0.8,
      max_tokens: 400, // Reduced to encourage shorter responses
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Groq API error:", text);
    throw new Error(`Groq API call failed: ${res.status}`);
  }

  const data = await res.json();
  return data.choices[0]?.message?.content || "No reply from Groq";
}