import React from 'react';
import { useState, useEffect } from 'react';
import data from './data.ts';

import './GameScreen.css';

// Import assets
import scroll from './assets/scroll.png';

interface GameScreenProps {
    className?: string;
}

const GameScreen: React.FC<GameScreenProps> = ({ className }) => {
    const [searchPrompt, setSearchPrompt] = useState<string>(''); // Search prompt
    const [dropdownContent, setDropdownContent] = useState<JSX.Element[]>([]); // Dropdown content
    const [isInputActive, setIsInputActive] = useState<boolean>(false); // Track if input is active
    const [selectedCharacterId, setSelectedCharacterId] = useState<number>(0); // Selected character

    // Update searchPrompt based on input
    const onSearchPromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPrompt(e.target.value);
    };

    // Filter dropdown content based on searchPrompt
    useEffect(() => {
        setDropdownContent(data.filter((character) => character.name.toLowerCase().includes(searchPrompt.toLowerCase())).map((character) => 
            <li 
                key={character.id}
                onClick={() => {
                    setSelectedCharacterId(character.id); // Set selected character
                    setSearchPrompt(''); // Clear search prompt
                }}
            >{character.name}</li>
        ));
    }, [searchPrompt]);

    // Handle input focus
    const handleInputFocus = () => {
        setIsInputActive(true);
    };

    // Handle input blur
    const handleInputBlur = () => {
        setIsInputActive(false);
    };

    return (
        <div className={`game-screen window flexbox page-container ${className}`}>
            <div className='search-container flexbox'>
                <div className='search-bar-container'>
                    <input 
                        className='search-bar' 
                        type="text" 
                        placeholder="Search..." 
                        value={searchPrompt}
                        onChange={onSearchPromptChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>
                {(searchPrompt.length > 0 || isInputActive) &&
                    (
                        <div className='dropdown-container flexbox'>
                            <ul>
                                {dropdownContent}
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default GameScreen;