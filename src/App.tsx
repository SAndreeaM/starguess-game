import { useState } from 'react';
import './App.css';

import Clock from './Clock';
import TitleScreen from './TitleScreen';
import GameScreen from './GameScreen';

enum Page {
  Home = 'home',
  Daily = 'daily',
  Endless = 'endless',
  About = 'about'
}

const App: React.FC = () => {
  const [isNightTime, setIsNightTime] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  // Handle page change
  const floatUpDuration = 1000;
  const handlePageChange = (page: Page) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTransitioning(false);
    }, floatUpDuration);
  };

  // Render page content
  let pageContent;
  switch (currentPage) {
    case Page.Home:
      pageContent = <TitleScreen onPageChange={handlePageChange} className={transitioning ? 'float-up' : ''} />;
      break;

    case Page.Daily:
      pageContent = <GameScreen key="daily" className={transitioning ? 'fade-in' : ''} />;
      break;

    case Page.Endless:
      pageContent = (
        <div key="endless" className={`game-screen flexbox page-container ${transitioning ? 'fade-in' : ''}`}>
          <h1>Endless Mode</h1>
        </div>
      );
      break;

    case Page.About:
      pageContent = (
        <div key="about" className={`game-screen flexbox page-container ${transitioning ? 'fade-in' : ''}`}>
          <h1>About</h1>
        </div>
      );
      break;

    default:
      pageContent = null;
  }

  return (
    <div className={`App flexbox ${isNightTime ? 'night' : 'day'}`} style={{ '--float-up-duration': `${floatUpDuration}ms` } as React.CSSProperties}>
      <Clock setIsNightTime={setIsNightTime} />
      {pageContent}
      <footer>
        Coded by <a href="https://www.linkedin.com/in/andreea-maria-sandulache-312927207/" target="_blank">Andreea "PuffyBean" Săndulache</a> from <a href="https://blackcatjoystickstudios.carrd.co/" target="_blank">BlackCatJoystick Studios</a>. Inspired by <a href="https://store.steampowered.com/app/413150/Stardew_Valley/" target="_blank">Stardew Valley</a>, created by <a href="https://www.stardewvalley.net/author/concernedape/" target="_blank">ConcernedApe</a>.
      </footer>
    </div>
  );
}

export default App;
export { Page };
