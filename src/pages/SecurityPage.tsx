import React from 'react';
import { NavPage } from '../types';

interface SecurityPageProps {
  onNavigate: (page: NavPage) => void;
  onQuickAction: (prompt: string) => void;
}

const threats = [
  {
    level: 'Critical',
    color: 'text-red-400',
    borderColor: 'border-red-900/40',
    title: 'Account Hacking',
    desc: 'Credential theft via phishing, brute force, or data breaches allows attackers to steal player assets.',
    solution: 'Blockchain-based decentralized identity + Web3 wallet authentication',
    icon: '🔓',
    prompt: 'Explain account hacking in gaming and how blockchain solves it with decentralized identity.',
  },
  {
    level: 'Critical',
    color: 'text-red-400',
    borderColor: 'border-red-900/40',
    title: 'Item Duplication Exploits',
    desc: 'Server-side bugs allow players to duplicate rare items, destroying virtual economies.',
    solution: 'NFT uniqueness on blockchain — each ERC-721 token ID is mathematically unique',
    icon: '📋',
    prompt: 'How does blockchain prevent item duplication in gaming using NFT token uniqueness?',
  },
  {
    level: 'High',
    color: 'text-orange-400',
    borderColor: 'border-orange-900/40',
    title: 'Smart Contract Vulnerabilities',
    desc: 'Reentrancy attacks, integer overflow, access control bugs, and oracle manipulation.',
    solution: 'OpenZeppelin audited libraries, ReentrancyGuard, formal verification',
    icon: '⚠️',
    prompt: 'Explain smart contract vulnerabilities in blockchain gaming and how to prevent them.',
  },
  {
    level: 'High',
    color: 'text-orange-400',
    borderColor: 'border-orange-900/40',
    title: 'Wash Trading',
    desc: 'Fake trades between owned wallets to artificially inflate NFT prices, misleading real buyers.',
    solution: 'On-chain behavioral analysis, circular trading detection, price velocity monitoring',
    icon: '🔄',
    prompt: 'How can wash trading in NFT games be detected and prevented using on-chain analysis?',
  },
  {
    level: 'High',
    color: 'text-orange-400',
    borderColor: 'border-orange-900/40',
    title: 'Centralized Data Breaches',
    desc: 'Game companies store all player data on central servers — major hack targets (Sony, EA, Zynga).',
    solution: 'IPFS decentralized storage, self-sovereign identity, zero-knowledge proofs',
    icon: '🗄️',
    prompt: 'How does decentralized storage via IPFS prevent gaming data breaches?',
  },
  {
    level: 'Medium',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-900/40',
    title: 'Fraud & Scam Trading',
    desc: 'Fake trading platforms, phishing NFT sites, and dishonest peer-to-peer exchanges.',
    solution: 'Smart contract escrow — trustless trading without intermediaries',
    icon: '🎭',
    prompt: 'How do smart contract escrow systems prevent fraud in NFT game trading?',
  },
];

const securityLayers = [
  { layer: 'Layer 1', title: 'Authentication', desc: 'Web3 wallet-based login (no passwords)', icon: '🔑' },
  { layer: 'Layer 2', title: 'Asset Protection', desc: 'NFT ownership on immutable ledger', icon: '🛡️' },
  { layer: 'Layer 3', title: 'Trade Security', desc: 'Smart contract escrow enforcement', icon: '💱' },
  { layer: 'Layer 4', title: 'Storage Security', desc: 'IPFS decentralized asset storage', icon: '🗃️' },
  { layer: 'Layer 5', title: 'Fraud Detection', desc: 'On-chain analytics & blacklisting', icon: '🔍' },
  { layer: 'Layer 6', title: 'Audit Trail', desc: 'Immutable transaction history', icon: '📋' },
];

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate, onQuickAction }) => {
  const handleExplore = (prompt: string) => {
    onQuickAction(prompt);
    onNavigate('chat');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-black">
      {/* Header */}
      <div className="border-b border-[#1a1a1a] px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Security Center</span>
          <h1 className="text-3xl font-bold text-white mt-2 mb-2 font-['Space_Grotesk']">
            Gaming Security Analysis
          </h1>
          <p className="text-gray-500 text-sm">
            Comprehensive threat analysis and blockchain-based security solutions for online gaming systems.
          </p>
        </div>
      </div>

      {/* Threat Matrix */}
      <div className="px-8 py-8 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Threat Matrix</h2>
          <div className="space-y-3">
            {threats.map(({ level, color, borderColor, title, desc, solution, icon, prompt }) => (
              <div key={title} className={`bg-[#0a0a0a] border ${borderColor} rounded-xl p-5 hover:bg-[#0d0d0d] transition-all`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-base">{icon}</span>
                      <span className={`text-[10px] font-bold ${color} uppercase tracking-widest`}>{level}</span>
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 leading-relaxed">{desc}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 text-xs mt-0.5">✅</span>
                      <p className="text-xs text-green-400/80 leading-relaxed">{solution}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleExplore(prompt)}
                    className="flex-shrink-0 px-3 py-1.5 border border-[#333] text-gray-400 text-xs rounded-lg hover:border-white hover:text-white transition-all"
                  >
                    Analyze →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Layers */}
      <div className="px-8 py-8 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Defense Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {securityLayers.map(({ layer, title, desc, icon }) => (
              <div key={layer} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 hover:border-[#333] transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{icon}</span>
                  <span className="text-[10px] text-gray-600 font-['Fira_Code']">{layer}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Major Incidents */}
      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Historical Incidents</h2>
          <div className="space-y-3">
            {[
              { year: '2011', name: 'Sony PSN Hack', impact: '77 million accounts breached, $171M loss', lesson: 'Centralized data is vulnerable' },
              { year: '2019', name: 'Zynga Data Breach', impact: '218 million accounts compromised', lesson: 'Game companies are prime targets' },
              { year: '2022', name: 'Ronin Bridge Hack', impact: '$625M stolen via compromised validator keys', lesson: 'Decentralize validator sets; use HSMs' },
              { year: '2021', name: 'EA Data Theft', impact: 'Source code and game data stolen', lesson: 'Code security is as critical as player data' },
            ].map(({ year, name, impact, lesson }) => (
              <div key={name} className="flex gap-4 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4">
                <div className="flex-shrink-0 w-12 text-center">
                  <span className="text-xs text-gray-600 font-['Fira_Code']">{year}</span>
                </div>
                <div className="flex-1 border-l border-[#222] pl-4">
                  <h3 className="text-sm font-semibold text-white mb-1">{name}</h3>
                  <p className="text-xs text-red-400/70 mb-1">{impact}</p>
                  <p className="text-xs text-gray-500">
                    <span className="text-gray-400">Lesson:</span> {lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => handleExplore('Provide a complete security threat analysis and blockchain-based solutions for online gaming')}
              className="px-6 py-3 bg-white text-black font-semibold rounded-xl text-sm hover:bg-gray-200 transition-colors"
            >
              Get Full Security Analysis →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
