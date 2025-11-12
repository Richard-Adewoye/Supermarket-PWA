'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeftIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';

// ---------- TYPES ----------
interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

interface Message {
  id: string;
  senderId: string;
  text?: string;
  timestamp: string;
  type: 'text' | 'audio';
  isSentByCurrentUser: boolean;
}

// ---------- MOCK DATA ----------
const currentUser: User = {
  id: '1',
  name: 'You',
  avatarUrl: '/images/profile-avatar.jfif',
};

const otherUser: User = {
  id: '2',
  name: 'Marc Stegen',
  avatarUrl: '/images/marc-avatar.webp',
};

const mockMessages: Message[] = [
  {
    id: 'm1',
    senderId: '2',
    text: 'Hey! How’s everything going?',
    timestamp: '10:30 AM',
    type: 'text',
    isSentByCurrentUser: false,
  },
  {
    id: 'm2',
    senderId: '1',
    text: 'All good, just finishing up some work.',
    timestamp: '10:32 AM',
    type: 'text',
    isSentByCurrentUser: true,
  },
  {
    id: 'm3',
    senderId: '2',
    text: '',
    timestamp: '10:35 AM',
    type: 'audio',
    isSentByCurrentUser: false,
  },
  {
    id: 'm4',
    senderId: '1',
    text: 'That audio sounds great! Will reply soon.',
    timestamp: '10:36 AM',
    type: 'text',
    isSentByCurrentUser: true,
  },
];

// ---------- COMPONENT ----------
export default function ChatConversationScreen() {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* HEADER */}
      <header className="flex items-center gap-3 bg-indigo-700 text-white px-4 py-3">
        <ArrowLeftIcon className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center gap-2">
          <Image
            src={otherUser.avatarUrl}
            alt={otherUser.name}
            width={36}
            height={36}
            className="rounded-full border-2 border-white"
          />
          <div>
            <h2 className="font-semibold">{otherUser.name}</h2>
            <p className="text-xs text-indigo-200">Online</p>
          </div>
        </div>
      </header>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {/* DATE SEPARATOR */}
        <div className="flex justify-center">
          <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
            TODAY
          </span>
        </div>

        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.isSentByCurrentUser ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 shadow-sm ${
                msg.isSentByCurrentUser
                  ? 'bg-emerald-500 text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-900 rounded-bl-none'
              }`}
            >
              {msg.type === 'text' ? (
                <p className="text-sm">{msg.text}</p>
              ) : (
                <div className="flex items-center justify-center bg-gray-300 rounded-lg p-2">
                  <div className="w-20 h-2 bg-gray-500 rounded-full animate-pulse" />
                </div>
              )}
              <p
                className={`text-[10px] mt-1 text-right ${
                  msg.isSentByCurrentUser ? 'text-emerald-100' : 'text-gray-500'
                }`}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT BAR */}
      <div className="flex items-center gap-2 bg-white p-3 border-t border-gray-200">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <PlusIcon className="w-5 h-5 text-gray-600" />
        </button>

        <input
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />

        <button className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-700">
          <PaperAirplaneIcon className="w-5 h-5 text-white rotate-45" />
        </button>
      </div>
    </div>
  );
}
