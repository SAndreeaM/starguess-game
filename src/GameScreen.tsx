import React from 'react';

import './GameScreen.css';

// Import assets
import scroll from './assets/scroll.png';

interface GameScreenProps {
    className?: string;
}

const GameScreen: React.FC<GameScreenProps> = ({ className }) => {
    return (
        <div className={`game-screen flexbox page-container ${className}`}>
            <input className='search-bar' type="text" placeholder="Search..." />
        </div>
    );
};

export default GameScreen;