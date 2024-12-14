import { useState } from 'react';
import './App.css';

import Clock from './Clock';
import TitleScreen from './TitleScreen';

const App: React.FC = () => {
  const [isNightTime, setIsNightTime] = useState<boolean>(false);

  return (
    <div className={`App flexbox ${isNightTime ? 'night' : 'day'}`}>
      <Clock setIsNightTime={setIsNightTime} />
      <TitleScreen />
    </div>
  );
}

export default App;
