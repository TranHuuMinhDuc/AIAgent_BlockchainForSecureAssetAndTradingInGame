export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  category: string;
  timestamp: Date;
}

export type Category =
  | 'Blockchain Basics'
  | 'NFT Standards'
  | 'Security Analysis'
  | 'Smart Contracts'
  | 'Case Studies'
  | 'System Design';

export type NavPage = 'home' | 'chat' | 'research' | 'security' | 'about';
