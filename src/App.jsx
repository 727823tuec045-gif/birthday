import React from 'react';
import OpeningSection from './components/OpeningSection';
import FriendshipIntro from './components/FriendshipIntro';
import DhivyaFiles from './components/DhivyaFiles';
import InteractiveQuestion from './components/InteractiveQuestion';
import MessageSection from './components/MessageSection';
import OneLastWish from './components/OneLastWish';
import FriendshipTree from './components/FriendshipTree';

export default function App() {
  return (
    <main className="site-shell">
      <OpeningSection />
      <FriendshipIntro />
      <DhivyaFiles />
      <InteractiveQuestion />
      <MessageSection />
      <FriendshipTree />
      <OneLastWish />
      <footer className="site-footer">
        <span>made with a little stardust</span>
        <span aria-hidden="true">✦</span>
        <span>for Dhivya, always</span>
      </footer>
    </main>
  );
}
