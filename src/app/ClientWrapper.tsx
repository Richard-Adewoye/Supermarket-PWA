'use client';

import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import ChatInterface from './components/ChatInterface';
import UserProfileAvatar from './components/UserProfileAvatar';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showChat, setShowChat] = useState(false);

  const handleAvatarClick = () => {
    setShowChat(!showChat);
  };

  return (
    <CartProvider>
      <Navbar />
      <main>{children}</main>
      <AppFooter />

      {/* Floating Avatar & Chat Interface */}
      <div className="fixed bottom-0 right-6 z-50 flex flex-col items-end space-y-3 pb-2">
        {showChat && (
          <div className="mb-3">
            <ChatInterface>
              <></>
            </ChatInterface>
          </div>
        )}

        <div className="flex flex-col items-center gap-2">
          <div 
            onClick={handleAvatarClick} 
            role="button" 
            tabIndex={0} 
            onKeyDown={(e) => e.key === 'Enter' && handleAvatarClick()}
            className="relative cursor-pointer group"
          >
            {/* Pulsing Wave Rings */}
            <div className="absolute inset-0 -m-2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 animate-pulse"></div>
            </div>
            
            {/* Avatar Container with Gradient Border */}
            <div className="relative w-16 h-16 rounded-full p-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <UserProfileAvatar
                name="Guest"
                avatarUrl="/images/avatar-1.webp"
                size="medium"
              />
            </div>

            {/* Online Status Indicator */}
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-md">
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
            </div>
          </div>

          {/* Name Label */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
            <p className="text-white font-semibold text-sm whitespace-nowrap">Eric AI</p>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}