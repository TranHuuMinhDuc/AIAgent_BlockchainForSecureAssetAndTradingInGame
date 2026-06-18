import React from 'react';
import { NavPage } from '../types';
import { Logo } from '../components/Logo';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
}

const capabilities = [
  { icon: '💬', title: 'Explain', desc: 'Blockchain concepts, NFT standards, smart contracts, security threats — explained clearly for any level.' },
  { icon: '🔍', title: 'Analyze', desc: 'Security weaknesses, centralized vs decentralized architectures, NFT trading mechanics, case studies.' },
  { icon: '📐', title: 'Design', desc: 'Complete blockchain asset management systems, NFT trading architectures, security mechanisms.' },
  { icon: '💻', title: 'Generate', desc: 'Solidity smart contracts, NFT metadata structures, system architecture diagrams, threat reports.' },
  { icon: '📖', title: 'Research', desc: 'Answer complex research questions with evidence-backed, academic-quality responses.' },
];

const knowledgeDomains = [
  {
    category: 'Blockchain Platforms',
    items: ['Ethereum (Mainnet + Testnets)', 'Polygon (PoS + zkEVM)', 'Solana (PoH)', 'Hyperledger Fabric', 'Avalanche', 'Immutable X'],
  },
  {
    category: 'Development Tools',
    items: ['Solidity 0.8.x', 'Hardhat & Truffle', 'MetaMask SDK', 'IPFS & Filecoin', 'OpenZeppelin 5.0', 'Ethers.js & Web3.js'],
  },
  {
    category: 'NFT Standards',
    items: ['ERC-721 (Unique NFTs)', 'ERC-1155 (Multi-token)', 'ERC-2981 (Royalties)', 'ERC-4907 (Rental NFTs)', 'Metadata standards', 'IPFS URI schemes'],
  },
  {
    category: 'Gaming Integration',
    items: ['Unity + Web3 SDK', 'Unreal Engine + Blockchain', 'In-game wallet UX', 'Asset tokenization flows', 'P2E economic design', 'Cross-game interoperability'],
  },
];

const rules = [
  { allowed: true, text: 'Provide accurate, research-backed blockchain gaming answers' },
  { allowed: true, text: 'Generate smart contract code with security best practices' },
  { allowed: true, text: 'Design complete system architectures and blueprints' },
  { allowed: true, text: 'Explain complex concepts clearly for all skill levels' },
  { allowed: true, text: 'Always suggest next steps and related topics' },
  { allowed: false, text: 'Provide financial investment advice on cryptocurrencies' },
  { allowed: false, text: 'Promote specific tokens as investment opportunities' },
  { allowed: false, text: 'Engage in topics outside blockchain gaming research' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-black">
      {/* Hero */}
      <div className="border-b border-[#1a1a1a] px-8 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 bg-[#0a0a0a] border border-[#222] rounded-2xl flex items-center justify-center">
              <Logo size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 font-['Space_Grotesk']">BlockGuard AI</h1>
          <p className="text-gray-400 text-sm mb-1">Advanced Blockchain Gaming Security Intelligence Agent</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="px-2.5 py-1 bg-[#0a0a0a] border border-[#222] rounded-full text-[10px] text-gray-400">v1.0</span>
            <span className="px-2.5 py-1 bg-[#0a0a0a] border border-[#222] rounded-full text-[10px] text-gray-400">Blockchain Expert</span>
            <span className="px-2.5 py-1 bg-[#0a0a0a] border border-[#222] rounded-full text-[10px] text-green-400 border-green-900/40">Always Online</span>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="px-8 py-8 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#2a2a2a] transition-all">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2 font-['Space_Grotesk']">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Knowledge Domains */}
      <div className="px-8 py-8 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Knowledge Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {knowledgeDomains.map(({ category, items }) => (
              <div key={category} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-3 font-['Space_Grotesk']">{category}</h3>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="px-8 py-8 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Agent Rules & Scope</h2>
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5">
            <div className="space-y-2">
              {rules.map(({ allowed, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className={`text-sm flex-shrink-0 mt-0.5 ${allowed ? 'text-green-400' : 'text-red-400'}`}>
                    {allowed ? '✅' : '❌'}
                  </span>
                  <p className={`text-xs leading-relaxed ${allowed ? 'text-gray-400' : 'text-gray-500'}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-8 py-10 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk']">Ready to Explore?</h2>
          <p className="text-gray-500 text-xs mb-6">Start a conversation and get expert blockchain gaming insights instantly.</p>
          <button
            onClick={() => onNavigate('chat')}
            className="px-6 py-3 bg-white text-black font-semibold rounded-xl text-sm hover:bg-gray-200 transition-colors"
          >
            Start Chatting with BlockGuard AI →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-6">
        <div className="max-w-4xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Logo size={16} />
            <span className="text-xs text-gray-600">BlockGuard AI — Powered by Blockchain Research</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">GitHub</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Research Paper</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
