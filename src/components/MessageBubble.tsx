import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Message } from '../types';
import { Logo } from './Logo';

interface MessageBubbleProps {
  message: Message;
}

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded transition-colors flex items-center gap-1"
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3 3 7-7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <rect x="5" y="5" width="9" height="9" rx="1" stroke="white" strokeWidth="1.5" />
            <path d="M2 11V3a1 1 0 011-1h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
};

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const timeStr = message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (isUser) {
    return (
      <div className="flex justify-end gap-3 group">
        <div className="flex flex-col items-end gap-1 max-w-[80%]">
          <div className="bg-[#222] border border-[#333] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed">
            {message.content}
          </div>
          <span className="text-[10px] text-gray-600 px-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {timeStr}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#222] border border-[#333] flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 group">
      <div className="w-8 h-8 rounded-full bg-black border border-[#333] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Logo size={20} />
      </div>
      <div className="flex flex-col gap-1 max-w-[88%] min-w-0">
        <div className="bg-[#111] border border-[#222] text-white rounded-2xl rounded-tl-sm px-5 py-4 text-sm leading-relaxed prose prose-invert prose-sm max-w-none">
          <ReactMarkdown
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const codeText = String(children).replace(/\n$/, '');
                const isBlock = match || codeText.includes('\n');

                if (isBlock) {
                  return (
                    <div className="relative my-3 rounded-lg overflow-hidden border border-[#333]">
                      <div className="flex items-center justify-between bg-[#1a1a1a] px-3 py-1.5 border-b border-[#333]">
                        <span className="text-xs text-gray-400 font-['Fira_Code']">
                          {match ? match[1].toUpperCase() : 'CODE'}
                        </span>
                        <CopyButton text={codeText} />
                      </div>
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match ? match[1] : 'text'}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          background: '#0d0d0d',
                          padding: '1rem',
                          fontSize: '0.78rem',
                          lineHeight: '1.6',
                          fontFamily: "'Fira Code', 'Courier New', monospace",
                        }}
                      >
                        {codeText}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                return (
                  <code
                    className="bg-[#222] text-green-400 px-1.5 py-0.5 rounded text-xs font-['Fira_Code']"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              table({ children }) {
                return (
                  <div className="overflow-x-auto my-3">
                    <table className="w-full text-xs border-collapse">
                      {children}
                    </table>
                  </div>
                );
              },
              thead({ children }) {
                return <thead className="bg-[#1a1a1a]">{children}</thead>;
              },
              th({ children }) {
                return (
                  <th className="border border-[#333] px-3 py-2 text-left text-gray-300 font-semibold">
                    {children}
                  </th>
                );
              },
              td({ children }) {
                return (
                  <td className="border border-[#333] px-3 py-2 text-gray-300">
                    {children}
                  </td>
                );
              },
              h2({ children }) {
                return <h2 className="text-base font-bold text-white mt-3 mb-2 font-['Space_Grotesk']">{children}</h2>;
              },
              h3({ children }) {
                return <h3 className="text-sm font-semibold text-gray-200 mt-3 mb-1.5 font-['Space_Grotesk']">{children}</h3>;
              },
              strong({ children }) {
                return <strong className="text-white font-semibold">{children}</strong>;
              },
              hr() {
                return <hr className="border-[#333] my-3" />;
              },
              ul({ children }) {
                return <ul className="list-none space-y-1 my-2">{children}</ul>;
              },
              li({ children }) {
                return (
                  <li className="flex gap-2 text-gray-300">
                    <span className="text-gray-500 mt-0.5 flex-shrink-0">›</span>
                    <span>{children}</span>
                  </li>
                );
              },
              blockquote({ children }) {
                return (
                  <blockquote className="border-l-2 border-white/30 pl-3 my-2 text-gray-400 italic">
                    {children}
                  </blockquote>
                );
              },
              p({ children }) {
                return <p className="my-1.5 text-gray-200 leading-relaxed">{children}</p>;
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
        <span className="text-[10px] text-gray-600 px-1 opacity-0 group-hover:opacity-100 transition-opacity">
          BlockGuard AI · {timeStr}
        </span>
      </div>
    </div>
  );
};
