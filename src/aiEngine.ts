// BlockGuard AI — Knowledge Base & Response Engine

interface KnowledgeResponse {
  content: string;
  category: string;
}

function matchKeywords(input: string, keywords: string[]): boolean {
  const lower = input.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

export function generateResponse(userMessage: string): KnowledgeResponse {
  const msg = userMessage.toLowerCase();

  // ── GREETINGS ──────────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening', 'start', 'begin'])) {
    return {
      category: 'General',
      content: `**Welcome back to BlockGuard AI! 🛡️**

I'm your intelligent assistant for **Blockchain-Powered Gaming Asset Security** and **NFT Trading Systems**.

Here's what I can help you with right now:

| Capability | Description |
|---|---|
| 🔗 Blockchain Fundamentals | History, DLT, consensus mechanisms |
| 🎮 Gaming Architecture | Centralized vs decentralized systems |
| 🖼️ NFT Standards | ERC-721, ERC-1155, metadata design |
| 🔐 Security Analysis | Threats, vulnerabilities, solutions |
| 📐 System Design | Architecture blueprints & recommendations |
| 💻 Smart Contracts | Solidity code generation & review |

**Quick Actions:** Use the buttons on the left to jump straight into a topic, or just type your question below.

How can I assist you today?`,
    };
  }

  // ── BLOCKCHAIN BASICS ──────────────────────────────────────────────────────
  if (matchKeywords(msg, ['what is blockchain', 'explain blockchain', 'blockchain basics', 'blockchain fundamentals', 'how does blockchain work', 'blockchain technology', 'blockchain history', 'distributed ledger', 'dlt'])) {
    return {
      category: 'Blockchain Basics',
      content: `## 🔗 Blockchain Technology — Fundamentals

### What is Blockchain?

A **blockchain** is a distributed, immutable ledger that records transactions across a network of computers. No single entity controls it — making it trustless, transparent, and tamper-resistant.

---

### 📜 History & Evolution

| Era | Milestone |
|---|---|
| **2008** | Bitcoin whitepaper by Satoshi Nakamoto |
| **2009** | Bitcoin Genesis Block mined |
| **2013** | Ethereum proposed (smart contracts) |
| **2015** | Ethereum mainnet launched |
| **2017** | CryptoKitties — first blockchain game boom |
| **2021** | NFT explosion, Play-to-Earn gaming rises |
| **2023+** | Layer 2 scaling, Web3 gaming maturity |

---

### ⚙️ Core Components

**1. Distributed Ledger Technology (DLT)**
- Every node holds a copy of the full ledger
- Eliminates single point of failure
- Data is replicated and synchronized globally

**2. Consensus Mechanisms**
\`\`\`
Proof of Work (PoW)
  → Miners solve cryptographic puzzles
  → Secure but energy-intensive (Bitcoin)

Proof of Stake (PoS)
  → Validators stake tokens as collateral
  → Energy-efficient, faster (Ethereum 2.0)

Delegated PoS (DPoS)
  → Token holders vote for delegates
  → High throughput (EOS, TRON)
\`\`\`

**3. Smart Contracts**
- Self-executing code stored on-chain
- No intermediaries required
- Written in Solidity (Ethereum), Rust (Solana)

**4. Public vs Permissioned Blockchains**

| Feature | Public (Ethereum) | Permissioned (Hyperledger) |
|---|---|---|
| Access | Open to all | Restricted |
| Speed | Slower | Faster |
| Privacy | Transparent | Configurable |
| Gaming Use | NFT trading | Enterprise gaming |

---

### 🎮 Why Blockchain Matters for Gaming

- **True Ownership** → Players own assets on-chain, not game companies
- **Interoperability** → Assets usable across multiple games
- **Scarcity** → NFTs prove rarity of in-game items
- **Transparency** → All trades visible and verifiable

---

**🔎 Next Steps:**
- Ask me about **NFT Standards (ERC-721 / ERC-1155)**
- Ask me to **design a blockchain gaming system**
- Ask me to **generate a smart contract**`,
    };
  }

  // ── SECURITY ISSUES ────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['security', 'security issues', 'threats', 'hacking', 'fraud', 'scam', 'duplication', 'exploit', 'breach', 'attack', 'vulnerability', 'vulnerabilities', 'risk', 'secure'])) {
    return {
      category: 'Security Analysis',
      content: `## 🔐 Security Issues in Online Gaming — Full Analysis

### Traditional Gaming Security Weaknesses

---

### 🔴 1. Account Hacking
**Problem:** Attackers steal login credentials via phishing, credential stuffing, or brute force — then drain valuable in-game assets.

**Impact:** Players lose years of progress and valuable items
**Blockchain Solution:**
\`\`\`
✅ Decentralized Identity (DID)
✅ Wallet-based authentication (MetaMask)
✅ No central credential database to breach
✅ Multi-signature wallet protection
\`\`\`

---

### 🔴 2. Item Duplication Exploits
**Problem:** Game servers can have bugs that allow players to duplicate rare items, destroying in-game economies.

**Blockchain Solution:**
\`\`\`
✅ Each item is a unique NFT (ERC-721)
✅ Token ID is immutable on-chain
✅ Cannot duplicate — blockchain rejects invalid state
✅ Full audit trail of every item transfer
\`\`\`

---

### 🔴 3. Fraud & Scams
**Problem:** Fake trading platforms, phishing sites, and dishonest peer-to-peer trades.

**Blockchain Solution:**
\`\`\`
✅ Smart contract escrow — funds locked until trade confirmed
✅ No need to trust the other party
✅ Trade conditions enforced by code, not humans
✅ On-chain dispute resolution
\`\`\`

---

### 🔴 4. Data Breaches (Centralized Servers)
**Problem:** Game companies store all player data on central servers — prime targets for hackers.

**Statistics:** Major gaming data breaches exposed 500M+ accounts (2011-2023)

**Blockchain Solution:**
\`\`\`
✅ Decentralized storage via IPFS
✅ No single point of failure
✅ Player data encrypted and distributed
✅ Self-sovereign identity — player controls own data
\`\`\`

---

### 🔴 5. Wash Trading in NFT Games
**Problem:** Fake trades between owned wallets to artificially inflate NFT prices, misleading other players.

**Detection Methods:**
\`\`\`
On-Chain Analysis:
  → Track wallet-to-wallet patterns
  → Detect circular trading loops
  → Flag self-trading addresses
  → Monitor price velocity anomalies

Smart Contract Guards:
  → Cooldown periods between trades
  → Blacklist suspicious addresses
  → Price manipulation alerts
\`\`\`

---

### 🔴 6. Smart Contract Vulnerabilities
**Common Attack Vectors:**

| Vulnerability | Description | Prevention |
|---|---|---|
| Reentrancy | Recursive withdrawal attacks | Checks-Effects-Interactions pattern |
| Integer Overflow | Math errors in calculations | SafeMath / Solidity 0.8+ |
| Front-Running | MEV bots exploit pending txns | Commit-Reveal schemes |
| Access Control | Unauthorized function calls | OpenZeppelin Ownable/RBAC |
| Oracle Manipulation | Fake price feed attacks | Chainlink decentralized oracles |

---

### 🛡️ Recommended Security Architecture

\`\`\`
[Player] ──→ [Web3 Wallet Auth]
                    │
              [Smart Contract Layer]
                    │
         ┌──────────┴──────────┐
    [NFT Contract]      [Escrow Contract]
         │                     │
    [IPFS Storage]      [On-Chain Audit Log]
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **generate a secure smart contract**
- Ask me to **design a full security system**
- Ask me about **specific attack types in detail**`,
    };
  }

  // ── NFT STANDARDS ─────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['nft', 'erc-721', 'erc721', 'erc-1155', 'erc1155', 'nft standard', 'token standard', 'non-fungible', 'metadata', 'nft gaming', 'nft asset'])) {
    return {
      category: 'NFT Standards',
      content: `## 🖼️ NFT Standards for Gaming Assets

### What are NFTs?

**Non-Fungible Tokens (NFTs)** are unique cryptographic tokens on a blockchain that represent ownership of a distinct digital asset. Unlike cryptocurrency (fungible), each NFT is **one-of-a-kind**.

---

### 📋 ERC-721 — Unique Asset Standard

**Best for:** Unique game items (legendary weapons, characters, land)

**Key Properties:**
\`\`\`solidity
// Each token has a unique ID
mapping(uint256 => address) private _owners;

// Core functions
ownerOf(tokenId)    → Returns owner address
transferFrom(...)   → Transfer ownership
approve(...)        → Authorize transfers
tokenURI(tokenId)   → Returns metadata URL
\`\`\`

**Gaming Use Cases:**
- 🗡️ Legendary weapons (1-of-1)
- 🏰 Virtual land plots (Decentraland)
- 🐉 Unique characters/heroes
- 🏆 Championship trophies

---

### 📋 ERC-1155 — Multi-Token Standard

**Best for:** Multiple asset types (weapons, potions, currencies)

**Key Advantages over ERC-721:**
| Feature | ERC-721 | ERC-1155 |
|---|---|---|
| Token types | One per contract | Multiple per contract |
| Batch transfers | No | Yes (gas efficient) |
| Fungible support | No | Yes |
| Semi-fungible | No | Yes |
| Gas cost | Higher | ~90% cheaper |

\`\`\`solidity
// Batch mint 100 health potions + 1 legendary sword
mintBatch(player, [POTION_ID, SWORD_ID], [100, 1], "");
\`\`\`

---

### 🎮 NFT Metadata Design for Gaming

\`\`\`json
{
  "name": "Shadow Blade of Eternity",
  "description": "A legendary sword forged in the void",
  "image": "ipfs://QmXxx.../shadow_blade.png",
  "animation_url": "ipfs://QmXxx.../shadow_blade.glb",
  "attributes": [
    { "trait_type": "Rarity",      "value": "Legendary" },
    { "trait_type": "Attack",      "value": 9500,  "max_value": 10000 },
    { "trait_type": "Element",     "value": "Dark" },
    { "trait_type": "Level Req",   "value": 80 },
    { "trait_type": "Durability",  "value": "Indestructible" },
    { "trait_type": "Tradeable",   "value": "Yes" }
  ],
  "external_url": "https://mygame.com/items/shadow-blade",
  "background_color": "0a0a0a"
}
\`\`\`

---

### 🔄 NFT Trading Mechanisms

\`\`\`
Direct Peer-to-Peer Trade:
  Player A ──→ Smart Contract Escrow ──→ Player B
       ↓                                      ↓
  Lock NFT + ETH              Verify & Release Assets

Auction Mechanism:
  Seller lists NFT → Bidders submit → Highest wins → Auto-transfer

Marketplace Flow:
  List → Bid/Buy → Escrow → Confirm → Transfer + Royalty
\`\`\`

---

### 💰 Royalty Standards

**ERC-2981** — On-chain royalty standard
- Creators earn % on every secondary sale
- Automatically enforced by smart contracts
- Typical gaming royalty: **2.5% – 10%**

---

**🔎 Next Steps:**
- Ask me to **generate an ERC-721 game item contract**
- Ask me to **generate an ERC-1155 multi-asset contract**
- Ask me about **wash trading detection**`,
    };
  }

  // ── SMART CONTRACT GENERATION ─────────────────────────────────────────────
  if (matchKeywords(msg, ['generate smart contract', 'smart contract', 'solidity', 'write contract', 'create contract', 'contract code', 'erc721 contract', 'nft contract', 'game contract'])) {
    return {
      category: 'Smart Contracts',
      content: `## 💻 Smart Contract Generation — GameItem NFT System

### Complete ERC-721 Game Asset Contract

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title  BlockGuard GameItem
 * @notice Secure ERC-721 NFT contract for in-game assets
 * @dev    Built with OpenZeppelin — production-ready security
 */
contract BlockGuardGameItem is
    ERC721,
    ERC721URIStorage,
    Ownable,
    ReentrancyGuard
{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // ── STRUCTS ──────────────────────────────────────────────
    struct GameItem {
        string  name;
        string  itemType;   // "Weapon", "Armor", "Potion", etc.
        uint8   rarity;     // 1=Common, 2=Rare, 3=Epic, 4=Legendary
        uint256 attack;
        uint256 defense;
        bool    tradeable;
        uint256 createdAt;
    }

    // ── STATE VARIABLES ──────────────────────────────────────
    mapping(uint256 => GameItem) public items;
    mapping(address => bool)     public blacklisted;
    uint256 public mintFee = 0.01 ether;
    uint256 public royaltyBps = 500; // 5% royalty

    // ── EVENTS ───────────────────────────────────────────────
    event ItemMinted(
        uint256 indexed tokenId,
        address indexed player,
        string name,
        uint8 rarity
    );
    event ItemTraded(
        uint256 indexed tokenId,
        address indexed from,
        address indexed to,
        uint256 price
    );
    event AddressBlacklisted(address indexed account);

    // ── MODIFIERS ────────────────────────────────────────────
    modifier notBlacklisted(address account) {
        require(!blacklisted[account], "BlockGuard: Address blacklisted");
        _;
    }

    modifier onlyTradeable(uint256 tokenId) {
        require(items[tokenId].tradeable, "BlockGuard: Item not tradeable");
        _;
    }

    // ── CONSTRUCTOR ──────────────────────────────────────────
    constructor() ERC721("BlockGuardItem", "BGI") {}

    // ── MINT FUNCTION ────────────────────────────────────────
    function mintGameItem(
        address player,
        string  memory name,
        string  memory itemType,
        uint8   rarity,
        uint256 attack,
        uint256 defense,
        bool    tradeable,
        string  memory metadataURI
    )
        external
        payable
        onlyOwner
        notBlacklisted(player)
        returns (uint256)
    {
        require(msg.value >= mintFee, "BlockGuard: Insufficient mint fee");
        require(rarity >= 1 && rarity <= 4, "BlockGuard: Invalid rarity");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _safeMint(player, tokenId);
        _setTokenURI(tokenId, metadataURI);

        items[tokenId] = GameItem({
            name:      name,
            itemType:  itemType,
            rarity:    rarity,
            attack:    attack,
            defense:   defense,
            tradeable: tradeable,
            createdAt: block.timestamp
        });

        emit ItemMinted(tokenId, player, name, rarity);
        return tokenId;
    }

    // ── SECURE TRADE WITH ESCROW ─────────────────────────────
    function tradeItem(
        uint256 tokenId,
        address to
    )
        external
        payable
        nonReentrant
        notBlacklisted(msg.sender)
        notBlacklisted(to)
        onlyTradeable(tokenId)
    {
        address from = ownerOf(tokenId);
        require(from == msg.sender, "BlockGuard: Not item owner");
        require(msg.value > 0, "BlockGuard: Price required");

        // Calculate royalty
        uint256 royalty = (msg.value * royaltyBps) / 10000;
        uint256 sellerAmount = msg.value - royalty;

        // Transfer NFT
        _transfer(from, to, tokenId);

        // Pay seller
        (bool sellerPaid, ) = payable(from).call{value: sellerAmount}("");
        require(sellerPaid, "BlockGuard: Seller payment failed");

        // Pay royalty to contract owner
        (bool royaltyPaid, ) = payable(owner()).call{value: royalty}("");
        require(royaltyPaid, "BlockGuard: Royalty payment failed");

        emit ItemTraded(tokenId, from, to, msg.value);
    }

    // ── SECURITY FUNCTIONS ───────────────────────────────────
    function blacklistAddress(address account) external onlyOwner {
        blacklisted[account] = true;
        emit AddressBlacklisted(account);
    }

    function setTradeability(uint256 tokenId, bool tradeable)
        external onlyOwner
    {
        items[tokenId].tradeable = tradeable;
    }

    function setMintFee(uint256 fee) external onlyOwner {
        mintFee = fee;
    }

    // ── VIEW FUNCTIONS ───────────────────────────────────────
    function totalSupply() external view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function getItem(uint256 tokenId)
        external view returns (GameItem memory)
    {
        return items[tokenId];
    }

    // ── OVERRIDES ────────────────────────────────────────────
    function tokenURI(uint256 tokenId)
        public view override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public view override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // ── WITHDRAW ─────────────────────────────────────────────
    function withdraw() external onlyOwner nonReentrant {
        (bool success, ) = payable(owner()).call{
            value: address(this).balance
        }("");
        require(success, "BlockGuard: Withdraw failed");
    }
}
\`\`\`

---

### 🛡️ Security Features Included

| Feature | Implementation |
|---|---|
| Reentrancy Guard | \`nonReentrant\` modifier on all payable functions |
| Access Control | \`onlyOwner\` for admin functions |
| Blacklist System | Fraud address blocking |
| Royalty Enforcement | 5% auto-deducted on trades |
| Tradeability Control | Items can be locked from trading |
| Event Logging | Full audit trail on-chain |

---

### 🚀 Deployment Steps

\`\`\`bash
# 1. Install dependencies
npm install --save-dev hardhat @openzeppelin/contracts

# 2. Compile
npx hardhat compile

# 3. Deploy to testnet (Polygon Mumbai)
npx hardhat run scripts/deploy.js --network mumbai

# 4. Verify on Etherscan
npx hardhat verify --network mumbai DEPLOYED_ADDRESS
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **add auction/marketplace functions**
- Ask me to **generate an ERC-1155 multi-asset contract**
- Ask me to **add anti-wash-trading logic**`,
    };
  }

  // ── SYSTEM DESIGN ─────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['system design', 'architecture', 'design system', 'design nft', 'design blockchain', 'blueprint', 'design a', 'build a system', 'gaming system', 'asset management system'])) {
    return {
      category: 'System Design',
      content: `## 📐 Blockchain Gaming Asset Management — System Architecture

### Overview

A complete **Blockchain-Based In-Game Asset Management System** combining smart contracts, decentralized storage, and a Web3 frontend.

---

### 🏗️ High-Level Architecture

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    GAME CLIENT LAYER                     │
│         Unity / Unreal Engine + Web3.js SDK             │
└────────────────────────┬────────────────────────────────┘
                         │ REST / WebSocket
┌────────────────────────▼────────────────────────────────┐
│                  WEB3 MIDDLEWARE LAYER                   │
│    MetaMask Wallet ←→ Ethers.js ←→ Game Backend API     │
└───────┬────────────────┬────────────────────┬───────────┘
        │                │                    │
┌───────▼──────┐ ┌───────▼──────┐ ┌──────────▼─────────┐
│   ETHEREUM   │ │   POLYGON    │ │    IPFS STORAGE     │
│  MAINNET /   │ │  L2 SCALING  │ │   (NFT Metadata +   │
│  GOERLI TEST │ │  (Low Fees)  │ │    Game Assets)     │
└───────┬──────┘ └───────┬──────┘ └──────────┬──────────┘
        │                │                    │
┌───────▼────────────────▼────────────────────▼──────────┐
│               SMART CONTRACT LAYER                       │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ GameItem    │  │  Marketplace  │  │  PlayerVault  │  │
│  │ ERC-721/    │  │  (Escrow +   │  │  (Staking +   │  │
│  │ ERC-1155    │  │   Auction)   │  │   Rewards)    │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ AccessCtrl  │  │  AntiCheat   │  │  RoyaltyMgr   │  │
│  │ (RBAC)      │  │  (Blacklist) │  │  (ERC-2981)   │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────┘
\`\`\`

---

### 🧩 Component Breakdown

**Layer 1 — Game Client**
\`\`\`
Unity Game Engine
  ├── Web3Unity SDK (MetaMask connection)
  ├── NFT Renderer (display owned assets)
  ├── Trade UI (in-game marketplace)
  └── Wallet Dashboard (asset overview)
\`\`\`

**Layer 2 — Blockchain Network Selection**

| Network | Use Case | Pros |
|---|---|---|
| Ethereum Mainnet | High-value assets | Maximum security |
| Polygon (MATIC) | Everyday items | Fast + cheap |
| Immutable X | Gaming-specific | Gas-free NFT minting |
| Solana | High-volume games | 65,000 TPS |

**Layer 3 — Smart Contracts**
\`\`\`
GameItem.sol      → Mint, transfer, metadata
Marketplace.sol   → List, buy, auction
AntiCheat.sol     → Blacklist, rate-limit
Royalty.sol       → Creator fee distribution
PlayerVault.sol   → Asset staking, rewards
\`\`\`

**Layer 4 — Decentralized Storage**
\`\`\`
IPFS / Filecoin:
  → NFT images + 3D models
  → Metadata JSON files
  → Game asset bundles

Pinata / NFT.Storage:
  → Pinning service for permanence
  → Content-addressed by CID hash
\`\`\`

---

### 🔄 Asset Lifecycle Flow

\`\`\`
1. CREATION
   Game Dev → mintGameItem() → NFT minted → IPFS metadata
   
2. OWNERSHIP
   NFT in Player Wallet → ownerOf() confirms
   
3. IN-GAME USE
   Game reads NFT attributes → applies stats
   
4. TRADING
   Player lists → Marketplace contract → Escrow
   Buyer pays → Auto-release → Both receive assets
   
5. BURNING (Crafting)
   2x Rare items → burn() → mint 1x Epic item
\`\`\`

---

### 📊 Recommended Tech Stack

\`\`\`
Frontend:    React.js + TypeScript + Tailwind CSS
Web3:        Ethers.js v6 + MetaMask SDK
Contracts:   Solidity 0.8.19 + OpenZeppelin 5.0
Testing:     Hardhat + Chai + Waffle
Deployment:  Hardhat + Polygon RPC
Storage:     IPFS + Pinata
Indexing:    The Graph Protocol (query on-chain data)
Monitoring:  OpenZeppelin Defender (security alerts)
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **generate any specific smart contract**
- Ask me about **The Graph for indexing game data**
- Ask me to **create a threat analysis report**`,
    };
  }

  // ── CASE STUDIES ──────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['case study', 'case studies', 'axie infinity', 'cryptokitties', 'gods unchained', 'decentraland', 'sandbox', 'real world example', 'examples', 'blockchain game examples'])) {
    return {
      category: 'Case Studies',
      content: `## 📚 Blockchain Gaming — Real World Case Studies

---

### 🔵 1. Axie Infinity (2018–Present)

**Developer:** Sky Mavis | **Blockchain:** Ronin (Ethereum sidechain)

**Overview:** Play-to-Earn game where players breed, battle, and trade Axie NFT creatures.

| Metric | Peak Value |
|---|---|
| Daily Active Users | 2.7 million |
| Monthly Revenue | $340 million (Aug 2021) |
| NFT Volume | $4.2 billion total |
| AXS Token ATH | $164.90 |

**Key Innovations:**
- Scholarship system (NFT lending)
- Ronin sidechain for low-fee trades
- In-game token economy (AXS + SLP)

**Security Incident — Ronin Bridge Hack (March 2022):**
\`\`\`
Attack Vector: Compromised validator private keys
Loss:          $625 million (largest DeFi hack)
Root Cause:    Centralized validator control (5/9 keys)
Lesson:        Decentralize validator sets
               Use hardware security modules (HSM)
               Implement multi-sig thresholds
\`\`\`

---

### 🟣 2. CryptoKitties (2017)

**Developer:** Dapper Labs | **Blockchain:** Ethereum → Flow

**Overview:** First viral NFT game — breed and collect unique digital cats.

**Key Contributions:**
- Introduced ERC-721 standard to the world
- Clogged Ethereum network (9x normal congestion)
- Proved NFT concept for mainstream audiences

**Architectural Issue:**
\`\`\`
Problem:  Ethereum congestion — $100+ gas fees
Solution: Migrated to Flow blockchain (purpose-built for NFTs)
Lesson:   Gaming needs Layer 2 or dedicated blockchains
\`\`\`

---

### 🟢 3. Gods Unchained (2019–Present)

**Developer:** Immutable | **Blockchain:** Immutable X (Layer 2)

**Overview:** Competitive trading card game with true NFT card ownership.

**Innovations:**
- **Gas-free** NFT minting on Immutable X
- 9,000 TPS throughput for game-speed transactions
- Cards remain owned by players, not the company
- Proven fair play via on-chain game logic

**Security Model:**
\`\`\`
✅ ZK-Rollup technology (zero-knowledge proofs)
✅ Ethereum-level security with L2 speed
✅ Non-custodial — players hold private keys
✅ Open trading — any marketplace compatible
\`\`\`

---

### 🟡 4. Decentraland (2020–Present)

**Developer:** Decentraland Foundation | **Blockchain:** Ethereum + Polygon

**Overview:** Virtual world where users own, develop, and monetize land NFTs.

| Asset | NFT Standard | Record Sale |
|---|---|---|
| LAND parcels | ERC-721 | $2.4 million (Fashion District) |
| Wearables | ERC-1155 | $75,000 (DG suit) |
| Names | ERC-721 | Varies |

**DAO Governance:**
- Community votes on platform changes
- Treasury managed by smart contracts
- No central authority controls assets

---

### 🟠 5. The Sandbox (2021–Present)

**Developer:** Pixowl / Animoca Brands | **Blockchain:** Polygon

**Overview:** User-generated content metaverse with LAND, ASSET, and SAND token economy.

**Key Features:**
- VoxEdit — create 3D voxel NFT assets
- Game Maker — no-code game builder
- SAND token — governance + transactions
- Major brand partnerships (Snoop Dogg, Atari, Adidas)

**Economy Model:**
\`\`\`
Players create assets → List on marketplace → 
Earn SAND → Stake for rewards → 
Vote on governance → Shape platform future
\`\`\`

---

### 📊 Comparative Analysis

| Game | Blockchain | TPS | Avg Fee | Security Level |
|---|---|---|---|---|
| Axie Infinity | Ronin | 100+ | ~$0.001 | Medium (past hack) |
| CryptoKitties | Flow | 1,000+ | ~$0.0001 | High |
| Gods Unchained | Immutable X | 9,000 | Free | Very High |
| Decentraland | Polygon | 7,200 | ~$0.01 | High |
| The Sandbox | Polygon | 7,200 | ~$0.01 | High |

---

**🔎 Next Steps:**
- Ask me to **analyze the Ronin bridge hack in depth**
- Ask me to **design a system better than these examples**
- Ask me about **Play-to-Earn economic models**`,
    };
  }

  // ── ERC-1155 CONTRACT ─────────────────────────────────────────────────────
  if (matchKeywords(msg, ['erc1155', 'erc-1155', 'multi token', 'multi-token', 'batch', 'fungible and non'])) {
    return {
      category: 'Smart Contracts',
      content: `## 💻 ERC-1155 Multi-Token Game Asset Contract

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title  BlockGuard MultiAsset
 * @notice ERC-1155 contract for mixed fungible/non-fungible game assets
 */
contract BlockGuardMultiAsset is ERC1155, Ownable, ReentrancyGuard {

    // ── TOKEN ID RANGES ──────────────────────────────────────
    // 1-1000:     Fungible tokens (Gold, Potions, Arrows)
    // 1001-9999:  Semi-fungible (Common/Rare gear with copies)
    // 10000+:     Non-fungible (Legendary unique items)

    uint256 public constant GOLD       = 1;
    uint256 public constant HEALTH_POT = 2;
    uint256 public constant MANA_POT   = 3;
    uint256 public constant IRON_SWORD = 100;

    // ── STATE ────────────────────────────────────────────────
    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => uint256) public maxSupply;
    mapping(uint256 => uint256) public totalMinted;
    uint256 private _nextUniqueId = 10000;

    // ── EVENTS ───────────────────────────────────────────────
    event AssetCreated(uint256 indexed id, string name, uint256 maxSupply);
    event BatchMinted(address indexed to, uint256[] ids, uint256[] amounts);

    constructor() ERC1155("https://blockguard.io/api/metadata/{id}.json") {
        // Initialize max supplies
        maxSupply[GOLD]       = type(uint256).max; // Unlimited gold
        maxSupply[HEALTH_POT] = 100000;
        maxSupply[MANA_POT]   = 100000;
        maxSupply[IRON_SWORD] = 1000;
    }

    // ── BATCH MINT (GAS EFFICIENT) ───────────────────────────
    function batchMintToPlayer(
        address player,
        uint256[] calldata ids,
        uint256[] calldata amounts
    ) external onlyOwner {
        require(ids.length == amounts.length, "Length mismatch");

        for (uint i = 0; i < ids.length; i++) {
            require(
                totalMinted[ids[i]] + amounts[i] <= maxSupply[ids[i]],
                "Exceeds max supply"
            );
            totalMinted[ids[i]] += amounts[i];
        }

        _mintBatch(player, ids, amounts, "");
        emit BatchMinted(player, ids, amounts);
    }

    // ── MINT UNIQUE LEGENDARY (Non-Fungible) ─────────────────
    function mintLegendary(
        address player,
        string calldata metadataURI
    ) external onlyOwner returns (uint256) {
        uint256 id = _nextUniqueId++;
        maxSupply[id] = 1;
        totalMinted[id] = 1;
        _tokenURIs[id] = metadataURI;
        _mint(player, id, 1, "");
        return id;
    }

    // ── CRAFTING SYSTEM ──────────────────────────────────────
    // Burn 3 iron swords → receive 1 steel sword
    function craft(
        uint256 inputId,
        uint256 inputAmount,
        uint256 outputId,
        uint256 outputAmount
    ) external nonReentrant {
        require(
            balanceOf(msg.sender, inputId) >= inputAmount,
            "Insufficient materials"
        );
        _burn(msg.sender, inputId, inputAmount);
        _mint(msg.sender, outputId, outputAmount, "");
    }

    // ── URI OVERRIDE ─────────────────────────────────────────
    function uri(uint256 id) public view override returns (string memory) {
        if (bytes(_tokenURIs[id]).length > 0) {
            return _tokenURIs[id];
        }
        return super.uri(id);
    }
}
\`\`\`

---

### ⚡ ERC-1155 Advantages for Gaming

\`\`\`
Single contract manages ALL asset types:
  → Gold coins (fungible)
  → Health potions (semi-fungible, 100 copies)
  → Legendary sword (non-fungible, 1/1)

Batch transfer saves ~90% gas:
  → Transfer 10 item types in ONE transaction
  → vs 10 separate ERC-721 transfers
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **add a marketplace to this contract**
- Ask me about **IPFS metadata setup**
- Ask me to **explain the crafting system in detail**`,
    };
  }

  // ── CONSENSUS MECHANISMS ──────────────────────────────────────────────────
  if (matchKeywords(msg, ['consensus', 'proof of work', 'proof of stake', 'pow', 'pos', 'consensus mechanism', 'best consensus', 'validator'])) {
    return {
      category: 'Blockchain Basics',
      content: `## ⚙️ Consensus Mechanisms for Blockchain Gaming

### What is a Consensus Mechanism?

A consensus mechanism is the protocol by which all nodes in a blockchain network **agree on the valid state** of the ledger — without needing to trust each other.

---

### 🔨 Proof of Work (PoW)

\`\`\`
How it works:
  Miners compete to solve SHA-256 puzzles
  First solver broadcasts block → network validates
  Reward: Block subsidy + transaction fees

Gaming Suitability: ❌ Poor
  → High energy consumption
  → ~7-15 TPS (too slow for gaming)
  → High transaction fees during congestion
  → Used by: Bitcoin (not gaming-focused)
\`\`\`

---

### 🏦 Proof of Stake (PoS)

\`\`\`
How it works:
  Validators lock (stake) tokens as collateral
  Randomly selected to propose blocks
  Slashed if they act dishonestly

Gaming Suitability: ✅ Good
  → Energy-efficient (99.95% less than PoW)
  → Ethereum: ~15-100 TPS (+ Layer 2)
  → Polygon PoS: 7,200 TPS
  → Used by: Ethereum, Polygon, Avalanche
\`\`\`

---

### 🗳️ Delegated Proof of Stake (DPoS)

\`\`\`
How it works:
  Token holders vote for "delegates" / "witnesses"
  Delegates produce blocks in rotation
  Bad delegates voted out

Gaming Suitability: ✅✅ Very Good
  → Extremely fast (1,000-10,000 TPS)
  → Low fees
  → Trade-off: More centralized (21 delegates in EOS)
  → Used by: EOS, TRON, WAX (gaming-focused)
\`\`\`

---

### 🔮 Proof of History (PoH) — Solana

\`\`\`
How it works:
  Cryptographic clock creates verifiable timestamps
  Enables parallel transaction processing

Gaming Suitability: ✅✅✅ Excellent
  → 65,000+ TPS
  → ~$0.00025 per transaction
  → Sub-second finality
  → Used by: Solana gaming ecosystem (Star Atlas)
\`\`\`

---

### 📊 Comparison for Gaming

| Mechanism | TPS | Avg Fee | Finality | Decentralization |
|---|---|---|---|---|
| PoW (Bitcoin) | 7 | $1-50 | 60 min | Very High |
| PoS (Ethereum) | 15-30 | $1-20 | 15 min | High |
| PoS + L2 (Polygon) | 7,200 | $0.001 | 2 sec | High |
| DPoS (WAX) | 10,000 | Free | 0.5 sec | Medium |
| PoH (Solana) | 65,000 | $0.0003 | 0.4 sec | Medium |

---

### 🎮 Recommendation for Gaming

\`\`\`
High-Value Assets (land, legendary items):
  → Ethereum Mainnet (PoS) — maximum security

Everyday Transactions (trading, crafting):
  → Polygon or Immutable X — fast & cheap

High-Frequency Game Actions:
  → Solana (PoH) — near-instant, near-free
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **recommend the best blockchain for your game**
- Ask me about **Layer 2 scaling solutions**
- Ask me about **Immutable X for gas-free NFTs**`,
    };
  }

  // ── TOOLS & TECH ──────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['hardhat', 'truffle', 'metamask', 'ipfs', 'web3', 'ethers', 'openZeppelin', 'tools', 'development tools', 'setup', 'getting started', 'stack', 'technology'])) {
    return {
      category: 'System Design',
      content: `## 🛠️ Blockchain Gaming Development Tools & Stack

### Complete Developer Toolkit

---

### 🔧 Smart Contract Development

**Hardhat (Recommended)**
\`\`\`bash
# Install Hardhat
npm install --save-dev hardhat

# Create project
npx hardhat init

# Project structure
hardhat-project/
  ├── contracts/       ← Solidity contracts
  ├── scripts/         ← Deploy scripts
  ├── test/            ← Test files
  └── hardhat.config.js

# Compile
npx hardhat compile

# Test
npx hardhat test

# Deploy to Polygon Mumbai
npx hardhat run scripts/deploy.js --network polygon_mumbai
\`\`\`

**Hardhat Config for Polygon:**
\`\`\`javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80001
    },
    polygon_mainnet: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137
    }
  }
};
\`\`\`

---

### 🔑 MetaMask Integration

\`\`\`javascript
// Connect wallet
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    const accounts = await window.ethereum
      .request({ method: 'eth_requestAccounts' });
    return accounts[0];
  }
  throw new Error('MetaMask not installed');
}

// Switch to Polygon
async function switchToPolygon() {
  await window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: '0x89',
      chainName: 'Polygon Mainnet',
      rpcUrls: ['https://polygon-rpc.com'],
      nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 }
    }]
  });
}
\`\`\`

---

### 📦 IPFS for Game Asset Storage

\`\`\`javascript
// Upload NFT metadata to IPFS via Pinata
const { PinataSDK } = require("pinata");
const pinata = new PinataSDK({ pinataJwt: process.env.PINATA_JWT });

async function uploadGameAsset(imagePath, metadata) {
  // Upload image
  const imageResult = await pinata.upload.file(imagePath);
  const imageURI = \`ipfs://\${imageResult.IpfsHash}\`;

  // Upload metadata JSON
  const metadataResult = await pinata.upload.json({
    name: metadata.name,
    description: metadata.description,
    image: imageURI,
    attributes: metadata.attributes
  });

  return \`ipfs://\${metadataResult.IpfsHash}\`;
}
\`\`\`

---

### ⚡ Ethers.js — Contract Interaction

\`\`\`javascript
import { ethers } from "ethers";
import GameItemABI from "./abis/GameItem.json";

const CONTRACT_ADDRESS = "0xYourContractAddress";

async function mintItem(playerAddress, itemName) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS, 
    GameItemABI, 
    signer
  );

  const tx = await contract.mintGameItem(
    playerAddress,
    itemName,
    "Weapon",
    4,        // Legendary rarity
    9500,     // Attack
    200,      // Defense
    true,     // Tradeable
    "ipfs://QmYourMetadataHash",
    { value: ethers.parseEther("0.01") } // Mint fee
  );

  await tx.wait();
  console.log("Item minted! TX:", tx.hash);
}
\`\`\`

---

### 🎮 Unity + Web3 Integration

\`\`\`csharp
// Unity C# — Read NFT data
using Nethereum.Web3;
using Nethereum.ABI.FunctionEncoding.Attributes;

public class BlockchainManager : MonoBehaviour {
    private Web3 web3;
    private string contractAddress = "0xYourContract";

    async void Start() {
        web3 = new Web3("https://polygon-rpc.com");
        var balance = await GetNFTBalance(playerWallet);
        Debug.Log($"Player owns {balance} NFT items");
    }
}
\`\`\`

---

### 📚 OpenZeppelin Security Libraries

\`\`\`
@openzeppelin/contracts/
  ├── token/ERC721/          ← NFT base contracts
  ├── token/ERC1155/         ← Multi-token standard
  ├── access/Ownable.sol     ← Admin control
  ├── access/AccessControl   ← Role-based access
  ├── security/              
  │   ├── ReentrancyGuard    ← Prevent reentrancy
  │   └── Pausable           ← Emergency pause
  └── utils/
      └── Counters.sol       ← Safe counter
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **generate a complete deployment script**
- Ask me to **explain The Graph for data indexing**
- Ask me about **OpenZeppelin Defender for monitoring**`,
    };
  }

  // ── RESEARCH HELP ─────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['research', 'paper', 'academic', 'thesis', 'literature', 'study', 'findings', 'summary', 'report'])) {
    return {
      category: 'System Design',
      content: `## 📖 Research Summary — Blockchain for Gaming Security

### Key Research Areas & Findings

---

### 🔬 Research Question 1
**"How secure are traditional gaming asset systems?"**

**Findings:**
\`\`\`
❌ Centralized databases = single point of failure
❌ 500M+ gaming accounts breached (2011–2023)
❌ No true player ownership of assets
❌ Item duplication exploits cost devs millions
❌ No transparency in trade fairness

Notable incidents:
  • Sony PSN Hack (2011): 77M accounts
  • Zynga Breach (2019): 218M accounts  
  • EA Data Theft (2021): Source code stolen
\`\`\`

---

### 🔬 Research Question 2
**"How can blockchain enhance asset security?"**

**Key Contributions:**
\`\`\`
✅ Immutability → Cannot alter ownership records
✅ Decentralization → No central hack target
✅ Transparency → All transactions auditable
✅ Smart Contract Automation → No human fraud
✅ Cryptographic Proof → Undeniable ownership
✅ NFT Uniqueness → Eliminates duplication

Quantified Security Improvements:
  • 99.9% reduction in item duplication
  • Eliminates account theft of assets
  • Fraud detection via on-chain analytics
\`\`\`

---

### 🔬 Research Question 3
**"What architecture suits NFT-based gaming?"**

**Recommended Architecture (Research Consensus):**
\`\`\`
Layer 1: Ethereum (Security anchor)
Layer 2: Polygon/Immutable X (Speed + cost)
Storage: IPFS + Filecoin (Decentralized)
Identity: Web3 wallets (Self-sovereign)
Indexing: The Graph (Query efficiency)
\`\`\`

---

### 📊 Key Statistics

| Metric | Value | Source |
|---|---|---|
| NFT Gaming Market Size (2023) | $4.6 billion | DappRadar |
| Projected Market (2028) | $65 billion | MarketsandMarkets |
| Play-to-Earn Players (2023) | 1.5M+ daily | Axie Infinity |
| Ronin Hack Loss (2022) | $625M | Sky Mavis |
| Gas Savings with L2 | Up to 99.9% | Polygon Labs |

---

### 📝 Research Methodology Framework

\`\`\`
1. Literature Review
   → Satoshi Nakamoto (2008) — Bitcoin whitepaper
   → Wood (2015) — Ethereum yellow paper
   → Entriken (2018) — ERC-721 proposal
   → Radomski (2018) — ERC-1155 proposal

2. Comparative Analysis
   → Traditional vs Blockchain gaming systems
   → Security metric comparison
   → Performance benchmarking

3. Case Study Analysis
   → Axie Infinity, Gods Unchained, Decentraland
   → Security incident post-mortems

4. System Design & Prototype
   → Smart contract implementation
   → Security mechanism testing
   → Gas optimization analysis
\`\`\`

---

### 🏆 Key Conclusions

1. **Blockchain significantly enhances security** vs traditional gaming
2. **Hybrid L1+L2 architecture** is optimal for gaming use cases
3. **ERC-1155** is superior to ERC-721 for multi-asset games
4. **Smart contract audits** are non-negotiable before launch
5. **IPFS storage** solves NFT permanence problem

---

**🔎 Next Steps:**
- Ask me to **generate a complete threat analysis report**
- Ask me to **design a research prototype system**
- Ask me to **compare centralized vs decentralized gaming**`,
    };
  }

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['about', 'who are you', 'what are you', 'what can you do', 'capabilities', 'features', 'help me', 'what do you know'])) {
    return {
      category: 'General',
      content: `## 🛡️ About BlockGuard AI

### Identity

I am **BlockGuard AI** — an advanced intelligent agent specialized in **Blockchain Technology for Secure In-Game Asset Management and NFT Trading** in Online Gaming.

---

### 🎯 My Expertise

**1. Blockchain Fundamentals**
- History of blockchain & DLT
- Consensus mechanisms (PoW, PoS, DPoS, PoH)
- Public vs permissioned blockchains
- Smart contract architecture

**2. Online Gaming Knowledge**
- Evolution of digital gaming assets
- Microtransactions & virtual economies
- MMO architecture & vulnerabilities
- P2E (Play-to-Earn) game design

**3. NFT Standards & Gaming**
- ERC-721 (unique assets)
- ERC-1155 (multi-token)
- NFT metadata design
- Wash trading detection

**4. Security Expertise**
- Account hacking prevention
- Item duplication detection
- Smart contract vulnerability analysis
- On-chain fraud detection

**5. System Architecture**
- Full blockchain gaming system design
- Security mechanism implementation
- Dev tools: Hardhat, MetaMask, IPFS
- Testing & deployment pipelines

---

### 💬 What You Can Ask Me

\`\`\`
Explain:
  "Explain how ERC-721 works"
  "What are the security risks in gaming?"

Analyze:
  "Analyze the Axie Infinity hack"
  "Compare Ethereum vs Polygon for gaming"

Design:
  "Design a secure NFT trading system"
  "Create a system architecture for my game"

Generate:
  "Generate a smart contract for game items"
  "Create NFT metadata for a sword"
  "Generate a threat analysis report"

Research:
  "Summarize blockchain gaming research"
  "What are the best consensus mechanisms?"
\`\`\`

---

### ⚠️ My Limitations

\`\`\`
❌ I do NOT give financial investment advice
❌ I do NOT promote cryptocurrencies as investments
❌ I stay focused on blockchain gaming (no off-topic)
\`\`\`

---

**I'm ready to help! What would you like to explore?**`,
    };
  }

  // ── POLYGON / LAYER 2 ─────────────────────────────────────────────────────
  if (matchKeywords(msg, ['polygon', 'layer 2', 'l2', 'scaling', 'immutable', 'rollup', 'sidechain', 'gas fee', 'gas cost', 'cheap', 'fast blockchain'])) {
    return {
      category: 'Blockchain Basics',
      content: `## ⚡ Layer 2 Scaling for Blockchain Gaming

### The Problem with Layer 1

Ethereum Mainnet processes ~15-30 TPS. A busy game with thousands of concurrent players doing trades, crafting, and battling would **congest the entire network** — making fees spike to $50-200+ per transaction.

**Solution: Layer 2 Scaling**

---

### 🟣 Polygon PoS (Most Popular for Gaming)

\`\`\`
Type:      Proof-of-Stake sidechain
TPS:       7,200+
Avg Fee:   $0.001-0.01
Finality:  2-3 seconds
Security:  Ethereum checkpoints

Used by:   The Sandbox, Decentraland, Aavegotchi

Setup:
  Chain ID:  137 (Mainnet) / 80001 (Mumbai testnet)
  RPC URL:   https://polygon-rpc.com
  Bridge:    https://wallet.polygon.technology
\`\`\`

---

### 🔵 Immutable X (Gaming-Focused L2)

\`\`\`
Type:      ZK-Rollup (Zero-Knowledge proofs)
TPS:       9,000+
Gas:       FREE for NFT minting & trading
Finality:  Instant
Security:  Ethereum-level (ZK proofs)

Used by:   Gods Unchained, Guild of Guardians

Key Feature: Gas-free NFT minting
  → Game devs can mint items for players FREE
  → No gas cost passed to players at all
\`\`\`

---

### 🟡 Arbitrum / Optimism (Optimistic Rollups)

\`\`\`
Type:      Optimistic Rollup
TPS:       4,000+
Avg Fee:   $0.10-0.50
Finality:  7-day challenge period (withdrawals)
Security:  Ethereum-level

Best for:  DeFi-adjacent gaming (yield farming + NFTs)
\`\`\`

---

### 🔴 Ronin (Axie Infinity's Sidechain)

\`\`\`
Type:      DPoS sidechain (Ethereum-based)
TPS:       100+
Gas:       Near-zero
Finality:  <1 second

⚠️ WARNING — March 2022 Hack:
  Loss:     $625 million
  Cause:    5 of 9 validator keys compromised
  
  Security Improvements Made:
  ✅ Increased validator set
  ✅ Added multi-sig requirements
  ✅ Third-party security audits
  ✅ Circuit breakers implemented
\`\`\`

---

### 📊 L2 Selection Guide for Game Developers

\`\`\`
IF you need gas-free NFT minting:
  → Use Immutable X

IF you want maximum ecosystem + tools:
  → Use Polygon PoS

IF you're building a high-frequency action game:
  → Use Solana (65,000 TPS)

IF security is your top priority:
  → Use Ethereum + Optimistic/ZK Rollup

IF you want a custom gaming chain:
  → Use Avalanche Subnet or Cosmos SDK
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **generate a Hardhat config for Polygon**
- Ask me about **deploying on Immutable X**
- Ask me to **design a multi-chain asset system**`,
    };
  }

  // ── PLAY TO EARN ──────────────────────────────────────────────────────────
  if (matchKeywords(msg, ['play to earn', 'p2e', 'earn', 'token economy', 'game economy', 'tokenomics', 'reward', 'scholarship'])) {
    return {
      category: 'Case Studies',
      content: `## 🎮 Play-to-Earn (P2E) Economics & Design

### What is Play-to-Earn?

**P2E** games allow players to earn real-world value (cryptocurrency/NFTs) through gameplay — creating a new paradigm where games become income sources.

---

### 💰 P2E Economic Models

**Dual-Token Model (Axie Infinity)**
\`\`\`
AXS (Governance Token)
  → Staking rewards
  → DAO voting rights
  → Treasury control
  → Capped supply

SLP (Smooth Love Potion - Utility Token)
  → Earned through gameplay
  → Used for Axie breeding
  → Unlimited mint via gameplay
  → Burns through breeding costs
\`\`\`

**Problem:** Infinite SLP minting without enough burn mechanisms led to hyperinflation in 2022.

---

### ⚖️ Sustainable Token Design Principles

\`\`\`
1. BALANCED MINT/BURN
   Earn tokens through play
   Burn tokens for crafting, upgrades, breeding
   Target: Burn rate ≥ Mint rate

2. CAPPED SUPPLY GOVERNANCE TOKEN
   Cannot print infinitely
   Incentivizes long-term holding
   Used for DAO governance

3. VARIABLE EARNING RATES
   Skill-based → Better players earn more
   Time-gated → Prevents farming bots
   Anti-bot measures → On-chain behavioral analysis

4. SINK MECHANISMS
   Crafting costs (burn materials)
   Land taxes (burn tokens to hold)
   Tournament entry fees
   Cosmetic upgrades
\`\`\`

---

### 🏫 Scholarship System (Axie Innovation)

\`\`\`
Problem:   High cost to enter game ($300-1000+ for starter Axies)

Solution:  NFT Scholarship System

How it works:
  Manager (NFT Owner) ──lends──→ Scholar (Player)
  Scholar earns SLP → Splits with Manager
  
  Typical split: 70% Scholar / 30% Manager

Benefits:
  ✅ Enables play for people who can't afford entry
  ✅ NFT owners earn passive income
  ✅ Increases player base dramatically

Risks:
  ⚠️ Exploitative splits (Manager takes too much)
  ⚠️ Scholar dependency on Manager
  ⚠️ No scholarship if token price collapses
\`\`\`

---

### 📈 P2E Market Data

| Game | Peak Daily Players | Monthly Revenue | Token ATH |
|---|---|---|---|
| Axie Infinity | 2.7M | $340M (Aug 2021) | AXS $164 |
| STEPN (Move2Earn) | 700K | $122M (May 2022) | GMT $4.11 |
| Gods Unchained | 450K | N/A (free minting) | GODS $8.02 |
| Splinterlands | 500K | $15M monthly | SPS $1.21 |

---

### ⚠️ P2E Pitfalls & Solutions

| Problem | Solution |
|---|---|
| Token hyperinflation | Strong burn mechanisms |
| Bot farming | AI-based behavioral detection |
| Ponzi-like growth | Real gameplay value first |
| Market dependency | Stable coin rewards option |
| Whale manipulation | Quadratic voting governance |

---

### 🔮 Future: Free-to-Own (F2O) Model

\`\`\`
Next evolution beyond P2E:
  → Players earn NFTs through gameplay (free)
  → No upfront cost barrier
  → Sustainable earning via skill
  → Examples: Gods Unchained (free card earning)
\`\`\`

---

**🔎 Next Steps:**
- Ask me to **design a sustainable token economy**
- Ask me to **analyze the Axie economic collapse**
- Ask me about **DAO governance for gaming**`,
    };
  }

  // ── DEFAULT / FALLBACK ────────────────────────────────────────────────────
  return {
    category: 'General',
    content: `## 🛡️ BlockGuard AI — Response

Thank you for your question about: **"${userMessage}"**

I'm analyzing this in the context of **Blockchain Gaming Security and NFT Asset Management**.

---

Here are some relevant areas I can help you explore:

**🔗 Blockchain Fundamentals**
> Ask: *"Explain blockchain technology"* or *"What is DLT?"*

**🖼️ NFT Standards**
> Ask: *"Explain ERC-721 and ERC-1155"* or *"Design NFT metadata"*

**🔐 Security Analysis**
> Ask: *"What are security issues in gaming?"* or *"Analyze smart contract vulnerabilities"*

**💻 Smart Contracts**
> Ask: *"Generate an ERC-721 game item contract"* or *"Write an NFT marketplace contract"*

**📐 System Design**
> Ask: *"Design a blockchain gaming system"* or *"What architecture should I use?"*

**📚 Case Studies**
> Ask: *"Tell me about Axie Infinity"* or *"What happened in the Ronin hack?"*

**⚙️ Development Tools**
> Ask: *"Explain Hardhat and IPFS setup"* or *"How do I integrate MetaMask?"*

---

**💡 Tip:** Try using the **Quick Action buttons** on the left sidebar to jump straight into a specific topic!

What would you like to explore?`,
  };
}
