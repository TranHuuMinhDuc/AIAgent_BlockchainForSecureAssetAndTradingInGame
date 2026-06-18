import React from 'react';
import { Logo } from './Logo';
import { NavPage } from '../types';

interface NavbarProps {
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
}

const navItems: { label: string; page: NavPage }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Chat', page: 'chat' },
  { label: 'Research', page: 'research' },
  { label: 'Security', page: 'security' },
  { label: 'About', page: 'about' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#222]">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <Logo size={32} />
          <span className="font-['Space_Grotesk'] font-bold text-white text-lg tracking-tight">
            BlockGuard <span className="text-gray-400 font-normal">AI</span>
          </span>
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                activePage === page
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => onNavigate('chat')}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-colors"
        >
          <span>Launch AI</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};
