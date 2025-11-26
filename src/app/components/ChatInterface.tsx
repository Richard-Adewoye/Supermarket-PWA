'use client';

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { X, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ChatInterfaceProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// Move initial message outside component so it persists
const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: 'Hello! How can I help you today?',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

// Store messages outside component to persist across mounts
let persistedMessages: Message[] = initialMessages;

export default function ChatInterface({ children, onClose }: ChatInterfaceProps) {
  const { updateCartFromAPI } = useCart();
  const [messages, setMessages] = useState<Message[]>(persistedMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update persisted messages whenever messages change
  useEffect(() => {
    persistedMessages = messages;
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  async function sendMessage(e?: React.MouseEvent) {
    // Prevent event bubbling
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      console.log('📤 Sending message to API:', input);
      
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Strip timestamp before sending to API - Groq only accepts role and content
        body: JSON.stringify({ 
          messages: updatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });
      

      if (!res.ok) {
        console.error('❌ API returned error status:', res.status);
        throw new Error(`API returned ${res.status}`);
      }

      const data: { reply?: string; cart?: any } = await res.json();

      console.log('📥 API Response received:', data);
      console.log('🛒 Cart from API:', data.cart);

      if (data.cart) {
        console.log('🔄 Calling updateCartFromAPI with:', data.cart);
        console.log('📊 Cart has', data.cart.length, 'items');
        updateCartFromAPI(data.cart);
        console.log('✅ updateCartFromAPI completed');
      } else {
        console.warn('⚠️ No cart data in API response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply || "Sorry — failed to fetch reply.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...updatedMessages, assistantMessage]);
    } catch (err) {
      console.error("💥 Error in sendMessage:", err);
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry — failed to fetch reply.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  } 

  return (
    <>
      {children}
      <div className="w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-180px)] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Header */}
        <header className="flex items-center justify-between bg-gradient-to-r from-emerald-400 via-green-500 to-green-600 text-white px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/avatar-1.webp"
              alt="Support"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <div>
              <h2 className="font-semibold text-sm">AI Support</h2>
              <p className="text-xs text-white/80">Online • Easily browse products and prices</p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50">
          <div className="flex justify-center">
            <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
              TODAY
            </span>
          </div>

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-emerald-400 to-green-600 text-white rounded-br-none'
                  : 'bg-white text-gray-900 rounded-bl-none border border-gray-200'
              }`}>
                <p className="text-sm whitespace-pre-wrap break-words">{msg.content}</p>
                <p className={`text-[10px] mt-1 text-right ${msg.role === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-900 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 bg-white p-3 border-t border-gray-200">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-900 bg-gray-50 placeholder:text-gray-500"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="p-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-500 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
            aria-label="Send message"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}