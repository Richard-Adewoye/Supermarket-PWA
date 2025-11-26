// app/api/chat/route.ts - AI-POWERED INTENT DETECTION
import { NextResponse } from "next/server";
import { sendToGroq, GroqMessage } from "../../lib/groqClient";
import { mockProducts_2, Product_2 } from "../../lib/mockProducts";

// ============================================================================
// CART MANAGEMENT
// ============================================================================

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

let sessionCart: CartItem[] = [];

function addToSessionCart(product: { id: string; name: string }, quantity = 1) {
  console.log('🔧 addToSessionCart called with:', product, 'qty:', quantity);
  const existing = sessionCart.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    sessionCart.push({ ...product, quantity });
  }
  console.log('🔧 sessionCart after add:', sessionCart);
  return sessionCart;
}

function removeFromSessionCart(productId: string) {
  sessionCart = sessionCart.filter((p) => p.id !== productId);
  return sessionCart;
}

function getSessionCart() {
  console.log('🔧 getSessionCart returning:', sessionCart);
  return sessionCart;
}

// ============================================================================
// PRODUCT FINDER
// ============================================================================

function findProduct(query: string): Product_2 | undefined {
  if (!query) return;
  query = query.toLowerCase().trim();
  
  console.log('🔍 Searching for product:', query);
  
  // Try exact match first
  let product = mockProducts_2.find(p => p.name.toLowerCase() === query);
  if (product) {
    console.log('✅ Found exact match:', product.name);
    return product;
  }
  
  // Try partial match
  product = mockProducts_2.find(p => 
    p.name.toLowerCase().includes(query) ||
    query.includes(p.name.toLowerCase())
  );
  
  if (product) {
    console.log('✅ Found partial match:', product.name);
    return product;
  }
  
  // Try matching individual words
  const queryWords = query.split(' ');
  for (const word of queryWords) {
    if (word.length > 3) {
      product = mockProducts_2.find(p => 
        p.name.toLowerCase().includes(word)
      );
      if (product) {
        console.log('✅ Found word match:', product.name);
        return product;
      }
    }
  }
  
  console.log('❌ No product found for:', query);
  return undefined;
}

// ============================================================================
// AI-POWERED INTENT DETECTION
// ============================================================================

interface ShoppingIntent {
  action: 'add' | 'remove' | 'view' | 'none';
  products: string[];
  quantities: number[];
}

async function detectIntentWithAI(messages: GroqMessage[]): Promise<ShoppingIntent> {
  console.log('🤖 Asking AI to detect shopping intent...');
  
  // Get list of available products (show subset to save tokens)
  const productList = mockProducts_2.slice(0, 30).map(p => p.name).join(', ');
  
  // Create intent detection prompt
  const intentMessages: GroqMessage[] = [
    {
      role: 'system',
      content: `You are a shopping intent analyzer for an e-commerce chatbot. Analyze the conversation and determine the user's shopping intent.

Available products include: ${productList}, and many more groceries, household items, snacks, and beverages.

Your task:
1. Look at the ENTIRE conversation context to understand what products were recently discussed
2. Determine if the user wants to ADD products, REMOVE products, VIEW cart, or NONE
3. Extract product names and quantities from the conversation

CRITICAL: 
- If user says "yes", "sure", "okay", "that works", "sounds good", "I'll take it", "rice would be good", etc. after a product was mentioned → action is "add"
- If user says "just X" or "no, just X" → they want ONLY that product, action is "add"
- Extract the ACTUAL product name from context, not generic terms

Respond ONLY with valid JSON in this exact format:
{
  "action": "add",
  "products": ["Indomie Instant Noodles (5 Pack)"],
  "quantities": [1]
}

Or if no shopping action:
{
  "action": "none",
  "products": [],
  "quantities": []
}

Action types: "add", "remove", "view", "none"
Product names must match actual product names from our catalog.`
    },
    ...messages.slice(-6) // Only send last 6 messages for context
  ];

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: intentMessages,
        temperature: 0.1, // Low temperature for consistent JSON
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || '';
    
    console.log('🤖 AI raw response:', aiResponse);
    
    // Extract JSON from response
    const jsonMatch = aiResponse.match(/\{[\s\S]*?\}/);
    if (jsonMatch) {
      const intent = JSON.parse(jsonMatch[0]);
      console.log('🤖 Parsed intent:', intent);
      return intent;
    }
  } catch (error) {
    console.error('❌ AI intent detection failed:', error);
  }

  // Fallback: no intent detected
  return { action: 'none', products: [], quantities: [] };
}

// ============================================================================
// MAIN API ROUTE
// ============================================================================

export async function POST(req: Request) {
  try {
    const { messages }: { messages?: GroqMessage[] } = await req.json();
    if (!messages) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1]?.content || "";
    const lastMessageLower = lastMessage.toLowerCase();
    let directReply = "";

    console.log('🔍 Processing message:', lastMessage);

    // ========================================================================
    // FAST PATH: Handle explicit commands directly (skip AI call)
    // ========================================================================
    
    const explicitAddPattern = /add\s+(.+?)\s+to\s+cart/i;
    const explicitAddMatch = lastMessage.match(explicitAddPattern);
    
    if (explicitAddMatch) {
      console.log('⚡ Fast path: explicit add command');
      const productQuery = explicitAddMatch[1].trim();
      const product = findProduct(productQuery);
      
      if (product) {
        addToSessionCart({ id: product.id.toString(), name: product.name }, 1);
        const totalItems = sessionCart.reduce((s, i) => s + i.quantity, 0);
        directReply = `✅ Added ${product.name} to your cart!\n\n🛒 You now have ${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart. Anything else?`;
      } else {
        directReply = `❌ I couldn't find "${productQuery}". Try being more specific!`;
      }
    }
    
    // View cart command
    else if (lastMessageLower.includes('cart') && 
             (lastMessageLower.includes('what') || lastMessageLower.includes('show') || lastMessageLower.includes('view'))) {
      console.log('⚡ Fast path: view cart');
      const cart = getSessionCart();
      if (cart.length === 0) {
        directReply = "🛒 Your cart is empty.";
      } else {
        const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
        directReply = "🛒 Your cart:\n" + 
          cart.map(item => `• ${item.name} x${item.quantity}`).join("\n") +
          `\n\nTotal: ${totalItems} item${totalItems !== 1 ? 's' : ''}`;
      }
    }
    
    // ========================================================================
    // AI PATH: Let AI understand natural language and context
    // ========================================================================
    else {
      console.log('🤖 AI path: detecting intent with AI...');
      const intent = await detectIntentWithAI(messages);
      
      if (intent.action === 'add' && intent.products.length > 0) {
        console.log('✅ AI detected ADD intent');
        let addedItems: string[] = [];
        let failedItems: string[] = [];
        
        for (let i = 0; i < intent.products.length; i++) {
          const productQuery = intent.products[i];
          const quantity = intent.quantities[i] || 1;
          
          const product = findProduct(productQuery);
          if (product) {
            addToSessionCart(
              { id: product.id.toString(), name: product.name },
              quantity
            );
            addedItems.push(
              quantity > 1 ? `${quantity}x ${product.name}` : product.name
            );
          } else {
            failedItems.push(productQuery);
          }
        }
        
        if (addedItems.length > 0) {
          const totalItems = sessionCart.reduce((s, i) => s + i.quantity, 0);
          directReply = `✅ Added to cart: ${addedItems.join(', ')}\n\n🛒 You now have ${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart. Anything else?`;
          
          if (failedItems.length > 0) {
            directReply += `\n\n⚠️ Couldn't find: ${failedItems.join(', ')}`;
          }
        }
      }
      
      else if (intent.action === 'remove' && intent.products.length > 0) {
        console.log('✅ AI detected REMOVE intent');
        const productQuery = intent.products[0];
        const product = findProduct(productQuery);
        
        if (product) {
          removeFromSessionCart(product.id.toString());
          directReply = `✅ Removed ${product.name} from your cart.`;
        } else {
          directReply = `❌ I couldn't find "${productQuery}" in your cart.`;
        }
      }
      
      else if (intent.action === 'view') {
        console.log('✅ AI detected VIEW intent');
        const cart = getSessionCart();
        if (cart.length === 0) {
          directReply = "🛒 Your cart is empty.";
        } else {
          const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
          directReply = "🛒 Your cart:\n" + 
            cart.map(item => `• ${item.name} x${item.quantity}`).join("\n") +
            `\n\nTotal: ${totalItems} item${totalItems !== 1 ? 's' : ''}`;
        }
      }
    }

    // ========================================================================
    // FALLBACK: Use Groq for conversational response
    // ========================================================================
    
    if (!directReply) {
      console.log('💬 No direct action, using conversational AI');
      directReply = await sendToGroq(messages, mockProducts_2);
    }

    const finalCart = getSessionCart();
    console.log('📤 Returning cart:', finalCart);

    return NextResponse.json({
      reply: directReply,
      cart: finalCart,
    });
  } catch (error) {
    console.error("💥 API route error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}