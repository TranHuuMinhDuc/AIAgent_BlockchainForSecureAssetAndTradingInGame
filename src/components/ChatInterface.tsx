import React, { useEffect, useRef, useState } from 'react';
import { Message, ChatSession } from '../types';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { ChatInput } from './ChatInput';
import { generateResponse } from '../aiEngine';
import { Logo } from './Logo';

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `## Welcome to BlockGuard AI 🛡️

Your intelligent assistant for **Blockchain-Powered Gaming Asset Security** and **NFT Trading Systems**.

I can help you with:

| Capability | Topics |
|---|---|
| ✅ **Blockchain Fundamentals** | History, DLT, Consensus Mechanisms |
| ✅ **NFT Asset Design & Trading** | ERC-721, ERC-1155, Metadata |
| ✅ **Smart Contract Development** | Solidity, OpenZeppelin, Hardhat |
| ✅ **Security Analysis** | Threats, Vulnerabilities, Solutions |
| ✅ **System Architecture Design** | Blueprints, Tech Stack Recommendations |
| ✅ **Research Assistance** | Case Studies, Market Analysis |

---

Use the **Quick Action buttons** on the left sidebar to jump into a topic, or simply type your question below.

**How can I assist you today?**`,
  timestamp: new Date(),
};

interface ChatInterfaceProps {
  session: ChatSession | null;
  onUpdateSession: (session: ChatSession) => void;
  pendingPrompt: string | null;
  onClearPendingPrompt: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  session,
  onUpdateSession,
  pendingPrompt,
  onClearPendingPrompt,
}) => {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session) {
      setMessages(session.messages.length > 0 ? session.messages : [WELCOME_MESSAGE]);
    } else {
      setMessages([WELCOME_MESSAGE]);
    }
  }, [session?.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (pendingPrompt) {
      handleSend(pendingPrompt);
      onClearPendingPrompt();
    }
  }, [pendingPrompt]);

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsTyping(true);

    // Simulate AI thinking delay
    const thinkTime = 800 + Math.random() * 1200;

    setTimeout(() => {
      const { content, category } = generateResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content,
        timestamp: new Date(),
      };
      const finalMessages = [...newMessages, aiMsg];
      setMessages(finalMessages);
      setIsTyping(false);

      // Update session
      if (session) {
        onUpdateSession({
          ...session,
          messages: finalMessages,
          category,
          title: finalMessages[1]?.content.slice(0, 40).replace(/[#*]/g, '').trim() + '...' || 'Chat',
        });
      }
    }, thinkTime);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-black">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-[#1a1a1a] bg-[#050505]">
        <div className="w-8 h-8 rounded-full bg-black border border-[#333] flex items-center justify-center">
          <Logo size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white font-['Space_Grotesk']">BlockGuard AI</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <p className="text-[10px] text-gray-500">Blockchain Gaming Security Expert · Always Online</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[10px] text-gray-600 bg-[#111] border border-[#222] px-2 py-0.5 rounded-full">
            🔐 Secure Session
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5 min-h-0">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-black border border-[#333] flex items-center justify-center flex-shrink-0">
              <Logo size={20} />
            </div>
            <div className="bg-[#111] border border-[#222] rounded-2xl rounded-tl-sm">
              <TypingIndicator />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
};
