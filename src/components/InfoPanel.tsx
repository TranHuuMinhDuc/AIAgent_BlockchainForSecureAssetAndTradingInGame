import React from 'react';

const techStack = [
  { label: 'Ethereum', color: '#627EEA', icon: '⟠' },
  { label: 'Polygon', color: '#8247E5', icon: '⬡' },
  { label: 'Solana', color: '#9945FF', icon: '◎' },
  { label: 'IPFS', color: '#65C2CB', icon: '◈' },
];

const stats = [
  { label: 'NFT Standards', value: 'ERC-721 / 1155' },
  { label: 'Languages', value: 'Solidity 0.8.19' },
  { label: 'Frameworks', value: 'Hardhat / Truffle' },
  { label: 'Web3 Libs', value: 'Ethers.js / Web3.js' },
];

const topics = [
  '🔐 Account Security',
  '🖼️ NFT Ownership',
  '💱 Smart Escrow',
  '🗃️ Decentralized Storage',
  '🤖 Anti-Cheat Systems',
  '📊 Wash Trade Detection',
  '⛓️ Cross-Chain Assets',
  '🎮 P2E Economics',
];

export const InfoPanel: React.FC = () => {
  return (
    <aside className="w-56 flex-shrink-0 bg-[#0a0a0a] border-l border-[#1a1a1a] flex flex-col overflow-y-auto">
      {/* Agent Status */}
      <div className="p-4 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400 font-medium">Agent Active</span>
        </div>
        <div className="bg-[#111] border border-[#222] rounded-lg p-3">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Expertise Level</p>
          <p className="text-sm text-white font-semibold">Senior Expert</p>
          <div className="mt-2 h-1 bg-[#222] rounded-full">
            <div className="h-full w-[95%] bg-white rounded-full" />
          </div>
          <p className="text-[10px] text-gray-500 mt-1">95% Confidence</p>
        </div>
      </div>

      {/* Blockchain Platforms */}
      <div className="p-4 border-b border-[#1a1a1a]">
        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-3">Platforms</p>
        <div className="grid grid-cols-2 gap-2">
          {techStack.map(({ label, icon }) => (
            <div
              key={label}
              className="bg-[#111] border border-[#222] rounded-lg p-2 flex items-center gap-1.5 hover:border-[#444] transition-colors cursor-default"
            >
              <span className="text-sm">{icon}</span>
              <span className="text-[10px] text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stats */}
      <div className="p-4 border-b border-[#1a1a1a]">
        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-3">Tech Stack</p>
        <div className="space-y-2">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-[10px] text-gray-600">{label}</span>
              <span className="text-xs text-gray-300 font-medium font-['Fira_Code']">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div className="p-4 border-b border-[#1a1a1a]">
        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-3">I Cover</p>
        <div className="space-y-1.5">
          {topics.map((topic) => (
            <div key={topic} className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Research Stats */}
      <div className="p-4">
        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-3">Market Data</p>
        <div className="space-y-3">
          <div className="bg-[#111] border border-[#222] rounded-lg p-2.5">
            <p className="text-[10px] text-gray-500">NFT Gaming Market</p>
            <p className="text-sm text-white font-bold mt-0.5">$4.6B</p>
            <p className="text-[10px] text-green-400">2023 Value</p>
          </div>
          <div className="bg-[#111] border border-[#222] rounded-lg p-2.5">
            <p className="text-[10px] text-gray-500">Projected by 2028</p>
            <p className="text-sm text-white font-bold mt-0.5">$65B</p>
            <p className="text-[10px] text-green-400">↑ 14x Growth</p>
          </div>
          <div className="bg-[#111] border border-[#222] rounded-lg p-2.5">
            <p className="text-[10px] text-gray-500">Ronin Hack (2022)</p>
            <p className="text-sm text-white font-bold mt-0.5">$625M</p>
            <p className="text-[10px] text-red-400">Largest DeFi Hack</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
