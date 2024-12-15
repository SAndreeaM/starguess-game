import React from 'react';

interface GameScreenProps {
    className?: string;
}

const GameScreen: React.FC<GameScreenProps> = ({ className }) => {
    return (
        <div className={`game-screen flexbox page-container ${className}`}>
            <h1>Welcome to the Star Guess Game!</h1>
        </div>
    );
};

export default GameScreen;