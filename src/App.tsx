import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { InfoPanel } from './components/InfoPanel';
import { ChatInterface } from './components/ChatInterface';
import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { SecurityPage } from './pages/SecurityPage';
import { AboutPage } from './pages/AboutPage';
import { ChatSession, NavPage } from './types';

let sessionCounter = 0;

function createSession(): ChatSession {
  sessionCounter++;
  return {
    id: `session-${Date.now()}-${sessionCounter}`,
    title: `Chat ${sessionCounter}`,
    messages: [],
    category: 'General',
    timestamp: new Date(),
  };
}

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    const s = createSession();
    return [s];
  });
  const [activeSessionId, setActiveSessionId] = useState<string>(sessions[0].id);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);


  const activeSession = sessions.find((s) => s.id === activeSessionId) ?? null;

  const handleNewChat = useCallback(() => {
    const newSession = createSession();
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
    setActivePage('chat');
  }, []);

  const handleSelectSession = useCallback((id: string) => {
    setActiveSessionId(id);
    setActivePage('chat');
  }, []);

  const handleUpdateSession = useCallback((updated: ChatSession) => {
    setSessions((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  }, []);

  const handleQuickAction = useCallback((prompt: string) => {
    // If we're not on chat page, navigate there and queue the prompt
    setPendingPrompt(prompt);
    setActivePage('chat');
  }, []);

  const handleClearPendingPrompt = useCallback(() => {
    setPendingPrompt(null);
  }, []);

  const renderPage = () => {
    if (activePage === 'home') {
      return <HomePage onNavigate={setActivePage} onQuickAction={handleQuickAction} />;
    }
    if (activePage === 'research') {
      return <ResearchPage onNavigate={setActivePage} onQuickAction={handleQuickAction} />;
    }
    if (activePage === 'security') {
      return <SecurityPage onNavigate={setActivePage} onQuickAction={handleQuickAction} />;
    }
    if (activePage === 'about') {
      return <AboutPage onNavigate={setActivePage} />;
    }
    // chat
    return (
      <ChatInterface
        session={activeSession}
        onUpdateSession={handleUpdateSession}
        pendingPrompt={pendingPrompt}
        onClearPendingPrompt={handleClearPendingPrompt}
      />
    );
  };

  return (
    <div
      className="h-screen flex flex-col overflow-hidden bg-black text-white"
      style={{ fontFamily: "'Inter', 'Roboto', sans-serif" }}
    >
      {/* Navbar */}
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {/* Main layout */}
      <div className="flex-1 flex overflow-hidden mt-14">
        {/* Sidebar — only visible on chat page */}
        {activePage === 'chat' && (
          <Sidebar
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={handleSelectSession}
            onNewChat={handleNewChat}
            onQuickAction={handleQuickAction}
          />
        )}

        {/* Page content */}
        <div className="flex-1 flex overflow-hidden">
          {renderPage()}

          {/* Info panel — only on chat page */}
          {activePage === 'chat' && <InfoPanel />}
        </div>
      </div>
    </div>
  );
}
