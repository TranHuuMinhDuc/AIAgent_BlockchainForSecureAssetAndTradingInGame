import React from 'react';
import { ChatSession, Category } from '../types';
import { Logo } from './Logo';

interface SidebarProps {
  sessions: ChatSession[];
  activeSessionId: string | null;
  onSelectSession: (id: string) => void;
  onNewChat: () => void;
  onQuickAction: (prompt: string) => void;
}

const categories: { label: Category; icon: string }[] = [
  { label: 'Blockchain Basics', icon: '🔗' },
  { label: 'NFT Standards', icon: '🖼️' },
  { label: 'Security Analysis', icon: '🔐' },
  { label: 'Smart Contracts', icon: '💻' },
  { label: 'Case Studies', icon: '📚' },
  { label: 'System Design', icon: '📐' },
];

const quickActions = [
  { label: 'Explain Blockchain', prompt: 'Explain blockchain technology and how it works', icon: '🔗' },
  { label: 'Analyze Security', prompt: 'What are the security issues in online gaming?', icon: '🔐' },
  { label: 'Design NFT System', prompt: 'Design a blockchain-based NFT gaming asset management system architecture', icon: '📐' },
  { label: 'Generate Smart Contract', prompt: 'Generate a complete ERC-721 smart contract for game items with security features', icon: '💻' },
  { label: 'View Case Studies', prompt: 'Tell me about real blockchain gaming case studies like Axie Infinity and Gods Unchained', icon: '📚' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  sessions,
  activeSessionId,
  onSelectSession,
  onNewChat,
  onQuickAction,
}) => {
  return (
    <aside className="w-64 flex-shrink-0 bg-[#0a0a0a] border-r border-[#1a1a1a] flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-[#1a1a1a]">
        <button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          New Chat
        </button>
      </div>

      {/* Quick Actions */}
      <div className="px-3 py-3 border-b border-[#1a1a1a]">
        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-2 px-1">Quick Actions</p>
        <div className="space-y-1">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => onQuickAction(action.prompt)}
              className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left group"
            >
              <span className="text-base leading-none">{action.icon}</span>
              <span className="group-hover:text-white transition-colors">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-3 py-3 border-b border-[#1a1a1a]">
        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-2 px-1">Topics</p>
        <div className="space-y-1">
          {categories.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => onQuickAction(`Tell me about ${label}`)}
              className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all text-left"
            >
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-3 py-3 min-h-0">
        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-2 px-1">History</p>
        {sessions.length === 0 ? (
          <p className="text-xs text-gray-600 px-2">No chats yet</p>
        ) : (
          <div className="space-y-1">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => onSelectSession(session.id)}
                className={`w-full flex flex-col gap-0.5 px-2.5 py-2 rounded-lg text-left transition-all ${
                  activeSessionId === session.id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                <span className="text-xs truncate font-medium">{session.title}</span>
                <span className="text-[10px] text-gray-600">{session.category}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-[#1a1a1a]">
        <div className="flex items-center gap-2 px-1">
          <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
            <Logo size={14} />
          </div>
          <div>
            <p className="text-[10px] text-white font-semibold">BlockGuard AI</p>
            <p className="text-[9px] text-gray-600">v1.0 · Blockchain Expert</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
