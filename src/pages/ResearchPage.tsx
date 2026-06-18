import React from 'react';
import { NavPage } from '../types';

interface ResearchPageProps {
  onNavigate: (page: NavPage) => void;
  onQuickAction: (prompt: string) => void;
}

const researchTopics = [
  {
    id: '01',
    title: 'Blockchain Security in Gaming',
    desc: 'How blockchain technology solves fundamental security problems in traditional online gaming systems.',
    tags: ['Security', 'DLT', 'Gaming'],
    prompt: 'How can blockchain enhance asset security in online gaming? Provide a detailed research summary.',
  },
  {
    id: '02',
    title: 'NFT Ownership & Asset Management',
    desc: 'ERC-721 and ERC-1155 standards for representing game items as non-fungible tokens on public blockchains.',
    tags: ['NFT', 'ERC-721', 'ERC-1155'],
    prompt: 'Explain NFT standards ERC-721 and ERC-1155 for gaming asset ownership and management.',
  },
  {
    id: '03',
    title: 'Smart Contract Architecture',
    desc: 'Designing and implementing secure smart contracts for game asset minting, trading, and royalty distribution.',
    tags: ['Solidity', 'Smart Contracts', 'Security'],
    prompt: 'Generate a complete smart contract architecture for a blockchain gaming system.',
  },
  {
    id: '04',
    title: 'Play-to-Earn Economic Models',
    desc: 'Analysis of dual-token economies, scholarship systems, and sustainable P2E game design principles.',
    tags: ['P2E', 'Tokenomics', 'Economics'],
    prompt: 'Explain Play-to-Earn economics, tokenomics models, and the scholarship system in blockchain games.',
  },
  {
    id: '05',
    title: 'Layer 2 Scaling Solutions',
    desc: 'Polygon, Immutable X, and Arbitrum — making blockchain gaming fast, affordable, and accessible.',
    tags: ['Layer 2', 'Polygon', 'Scaling'],
    prompt: 'Explain Layer 2 scaling solutions for blockchain gaming including Polygon and Immutable X.',
  },
  {
    id: '06',
    title: 'Wash Trading Detection',
    desc: 'On-chain analytics methods to detect and prevent fake NFT trades that manipulate asset prices.',
    tags: ['Fraud', 'Analytics', 'Security'],
    prompt: 'How can wash trading in NFT games be detected and prevented using on-chain analysis?',
  },
];

const keyFindings = [
  { stat: '500M+', label: 'Gaming accounts breached (2011–2023)', icon: '🔓' },
  { stat: '$625M', label: 'Ronin bridge hack — largest DeFi exploit', icon: '⚠️' },
  { stat: '99.9%', label: 'Reduction in item duplication via NFTs', icon: '✅' },
  { stat: '$4.6B', label: 'NFT gaming market size (2023)', icon: '📈' },
  { stat: '65,000', label: 'Transactions per second on Solana', icon: '⚡' },
  { stat: '9,000+', label: 'Free NFT mints/sec on Immutable X', icon: '🆓' },
];

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate, onQuickAction }) => {
  const handleExplore = (prompt: string) => {
    onQuickAction(prompt);
    onNavigate('chat');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-black">
      {/* Header */}
      <div className="border-b border-[#1a1a1a] px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Research Hub</span>
          <h1 className="text-3xl font-bold text-white mt-2 mb-2 font-['Space_Grotesk']">
            Blockchain Gaming Research
          </h1>
          <p className="text-gray-500 text-sm">
            Evidence-based research on blockchain security, NFT standards, and gaming system architecture.
          </p>
        </div>
      </div>

      {/* Key Findings */}
      <div className="border-b border-[#1a1a1a] px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Key Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {keyFindings.map(({ stat, label, icon }) => (
              <div key={stat} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4">
                <div className="text-xl mb-1">{icon}</div>
                <div className="text-2xl font-bold text-white font-['Space_Grotesk']">{stat}</div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Topics */}
      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Research Topics</h2>
          <div className="space-y-3">
            {researchTopics.map(({ id, title, desc, tags, prompt }) => (
              <div
                key={id}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#2a2a2a] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] text-gray-600 font-['Fira_Code']">#{id}</span>
                      <h3 className="text-sm font-semibold text-white font-['Space_Grotesk']">{title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-[#111] border border-[#222] rounded text-[10px] text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleExplore(prompt)}
                    className="flex-shrink-0 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="border-t border-[#1a1a1a] px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Research Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Literature Review', items: ['Nakamoto (2008) Bitcoin Whitepaper', 'Wood (2015) Ethereum Yellow Paper', 'Entriken (2018) ERC-721 EIP', 'Radomski (2018) ERC-1155 EIP'] },
              { title: 'Comparative Analysis', items: ['Traditional vs Blockchain gaming', 'Security metric benchmarking', 'Performance evaluation', 'Cost-benefit analysis'] },
              { title: 'Case Study Analysis', items: ['Axie Infinity (Ronin Hack)', 'Gods Unchained (Immutable X)', 'Decentraland (DAO governance)', 'CryptoKitties (ERC-721 origin)'] },
              { title: 'System Design & Prototype', items: ['Smart contract architecture', 'Security mechanism testing', 'Gas optimization analysis', 'Deployment on testnet'] },
            ].map(({ title, items }) => (
              <div key={title} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-3">{title}</h3>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-gray-600">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
