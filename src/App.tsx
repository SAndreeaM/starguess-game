import { useState } from 'react';
import './App.css';

import Clock from './Clock';
import TitleScreen from './TitleScreen';
import GameScreen from './GameScreen';

// Custom type for page
type Page = "home" | "daily" | "endless" | "about";

const App: React.FC = () => {
  const [isNightTime, setIsNightTime] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isFloatingUp, setIsFloatingUp] = useState<boolean>(false);

  // Handle page change
  const floatUpDuration = 1000;
  const handlePageChange = (page: Page) => {
    if (currentPage === "home") {
      setIsFloatingUp(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsFloatingUp(false);
      }, floatUpDuration);
    } else {
      setCurrentPage(page);
    }
  };

  // Render page content
  let pageContent;
  switch (currentPage) {
    case "home":
      pageContent = <TitleScreen onPageChange={handlePageChange} />;
      break;

    case "daily":
      pageContent = <GameScreen key="daily" />;
      break;

    case "endless":
      pageContent = <GameScreen key="endless" />;
      break;

    case "about":
      pageContent = <GameScreen key="about" />;
      break;

    default:
      pageContent = null;
  }

  return (
    <div className={`App flexbox ${isNightTime ? 'night' : 'day'}`} style={{ '--float-up-duration': `${floatUpDuration}ms` } as React.CSSProperties}>
      <Clock setIsNightTime={setIsNightTime} />
      {currentPage === "home" && isFloatingUp ? (
        <TitleScreen onPageChange={handlePageChange} className="float-up" />
      ) : (
        pageContent
      )}
      <footer>
        Coded by <a href="https://www.linkedin.com/in/andreea-maria-sandulache-312927207/" target="_blank">Andreea "PuffyBean" Săndulache</a> from <a href="https://blackcatjoystickstudios.carrd.co/" target="_blank">BlackCatJoystick Studios</a>. Inspired by <a href="https://store.steampowered.com/app/413150/Stardew_Valley/" target="_blank">Stardew Valley</a>, created by <a href="https://www.stardewvalley.net/author/concernedape/" target="_blank">ConcernedApe</a>.
      </footer>
    </div>
  );
}

export default App;
export type { Page };
