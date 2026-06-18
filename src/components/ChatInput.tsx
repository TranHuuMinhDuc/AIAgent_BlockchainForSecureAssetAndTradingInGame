import React, { useState, useRef, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const suggestions = [
  'Explain ERC-721 NFT standard',
  'Generate a smart contract',
  'Security threats in gaming',
  'Design NFT trading system',
  'Axie Infinity case study',
  'Best blockchain for gaming',
];

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 140) + 'px';
  };

  const handleSuggestion = (s: string) => {
    setValue(s);
    textareaRef.current?.focus();
  };

  return (
    <div className="border-t border-[#1a1a1a] bg-black px-4 pb-4 pt-3">
      {/* Suggestion chips */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => handleSuggestion(s)}
            disabled={disabled}
            className="px-2.5 py-1 text-[11px] text-gray-400 border border-[#222] rounded-full hover:border-[#444] hover:text-white transition-all disabled:opacity-40"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input row */}
      <div className="flex items-end gap-3 bg-[#111] border border-[#222] rounded-xl px-4 py-3 focus-within:border-[#444] transition-colors">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => { setValue(e.target.value); handleInput(); }}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Ask BlockGuard AI anything about blockchain gaming security..."
          rows={1}
          className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 resize-none outline-none font-['Inter'] leading-relaxed"
          style={{ minHeight: '22px', maxHeight: '140px' }}
        />
        <button
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-white text-black rounded-lg hover:bg-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 8l11-5-5 11-2-4.5L2 8z" fill="currentColor" />
          </svg>
        </button>
      </div>

      <p className="text-center text-[10px] text-gray-700 mt-2">
        BlockGuard AI · Blockchain Gaming Security Expert · Press Enter to send
      </p>
    </div>
  );
};
