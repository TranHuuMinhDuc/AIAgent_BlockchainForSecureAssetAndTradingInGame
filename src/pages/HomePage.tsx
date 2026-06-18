import React from 'react';
import { NavPage } from '../types';
import { Logo } from '../components/Logo';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onQuickAction: (prompt: string) => void;
}

const features = [
  {
    icon: '🔗',
    title: 'Blockchain Fundamentals',
    desc: 'Deep knowledge of DLT, consensus mechanisms, smart contracts, and blockchain evolution from Bitcoin to Web3 gaming.',
  },
  {
    icon: '🖼️',
    title: 'NFT Standards',
    desc: 'Expert guidance on ERC-721, ERC-1155, metadata design, royalty mechanisms, and trading systems.',
  },
  {
    icon: '🔐',
    title: 'Security Analysis',
    desc: 'Identify and solve threats: account hacking, item duplication, wash trading, smart contract vulnerabilities.',
  },
  {
    icon: '💻',
    title: 'Smart Contract Generation',
    desc: 'Generate production-ready Solidity code with OpenZeppelin security, reentrancy guards, and access control.',
  },
  {
    icon: '📐',
    title: 'System Architecture',
    desc: 'Design complete blockchain gaming systems with Layer 1/2 strategies, IPFS storage, and Web3 integration.',
  },
  {
    icon: '📚',
    title: 'Case Studies',
    desc: 'Analyze Axie Infinity, CryptoKitties, Gods Unchained, Decentraland, and The Sandbox in depth.',
  },
];

const quickActions = [
  { label: 'Explain Blockchain', prompt: 'Explain blockchain technology and how it works', icon: '🔗' },
  { label: 'Security Threats', prompt: 'What are the security issues in online gaming?', icon: '🔐' },
  { label: 'NFT Standards', prompt: 'Explain ERC-721 and ERC-1155 NFT standards for gaming', icon: '🖼️' },
  { label: 'Smart Contract', prompt: 'Generate a complete ERC-721 smart contract for game items with security features', icon: '💻' },
  { label: 'System Design', prompt: 'Design a blockchain-based NFT gaming asset management system architecture', icon: '📐' },
  { label: 'Case Studies', prompt: 'Tell me about real blockchain gaming case studies like Axie Infinity and Gods Unchained', icon: '📚' },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onQuickAction }) => {
  const handleAction = (prompt: string) => {
    onQuickAction(prompt);
    onNavigate('chat');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-black">
      {/* Hero */}
      <section className="relative border-b border-[#1a1a1a] overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-8 py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#0a0a0a] border border-[#222] rounded-2xl flex items-center justify-center">
              <Logo size={52} />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-4 py-1.5 text-xs text-gray-400 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            AI Agent Active · Blockchain Expert
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk'] leading-tight tracking-tight">
            BlockGuard <span className="text-gray-500">AI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-3 font-light">
            Blockchain-Powered Gaming Asset Security & NFT Trading Intelligence
          </p>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            An advanced AI agent with deep expertise in blockchain fundamentals, NFT standards, 
            smart contract development, and security analysis for online gaming systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('chat')}
              className="px-6 py-3 bg-white text-black font-semibold rounded-xl text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 3h12v8H9l-3 2V11H2V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              Start Chatting
            </button>
            <button
              onClick={() => handleAction('What are the security issues in online gaming and how does blockchain solve them?')}
              className="px-6 py-3 bg-transparent text-white border border-[#333] font-medium rounded-xl text-sm hover:border-[#555] transition-colors"
            >
              Explore Security Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickActions.map(({ label, prompt, icon }) => (
            <button
              key={label}
              onClick={() => handleAction(prompt)}
              className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl text-left hover:border-[#333] hover:bg-[#111] transition-all group"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-8 pb-12">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#2a2a2a] transition-all"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="text-sm font-semibold text-white mb-2 font-['Space_Grotesk']">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech badges */}
      <section className="border-t border-[#1a1a1a] py-8">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-xs text-gray-600 text-center mb-4">Covers all major blockchain gaming technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Ethereum', 'Polygon', 'Solana', 'Solidity', 'ERC-721', 'ERC-1155', 'IPFS', 'Hardhat', 'MetaMask', 'Web3.js', 'Ethers.js', 'OpenZeppelin', 'Immutable X', 'Hyperledger', 'Unity Web3', 'Truffle'].map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-xs text-gray-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-6">
        <div className="max-w-4xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Logo size={18} />
            <span className="text-xs text-gray-600">BlockGuard AI — Powered by Blockchain Research</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Research Paper</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
