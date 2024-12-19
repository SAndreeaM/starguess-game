import React, { useState, useEffect } from 'react';
import data from './data/data.ts';

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
    const [selectedCharactersContent, setSelectedCharactersContent] = useState<JSX.Element[]>([]); // Selected characters
    const [selectedCharacterIds, setSelectedCharacterIds] = useState<number[]>([]); // Track selected character IDs

    // Function to map characters to dropdown items
    const getDropdownContent = (characters: typeof data) => {
        return characters
            .filter((character) => !selectedCharacterIds.includes(character.id)) // Exclude selected characters
            .map((character) => (
                <li
                    key={character.id}
                    onClick={() => onCharacterSelect(character.id)}
                    role="option"
                    className="dropdown-item"
                >
                    {character.name}
                </li>
            ));
    };

    // Initialize dropdownContent with full list from data
    useEffect(() => {
        setDropdownContent(getDropdownContent(data));
    }, [selectedCharacterIds]); // Re-run whenever selectedCharacterIds changes

    // Update searchPrompt and filter dropdown content
    useEffect(() => {
        if (searchPrompt.trim()) {
            const filteredContent = data.filter((character) =>
                character.name.toLowerCase().includes(searchPrompt.toLowerCase())
            );
            setDropdownContent(getDropdownContent(filteredContent)); // Filtered dropdown content
        } else {
            setDropdownContent(getDropdownContent(data)); // Reset to full list if search is empty
        }
    }, [searchPrompt, selectedCharacterIds]); // Re-run whenever searchPrompt or selectedCharacterIds changes

    // Handle character selection
    const onCharacterSelect = (id: number) => {
        const character = data.find((char) => char.id === id);
        if (character) {
            // Add the character's ID to selectedCharacterIds
            setSelectedCharacterIds((prevIds) => [...prevIds, id]);

            // Add the character to the selected list
            setSelectedCharactersContent((prevContent) => [
                <div className="character-row" key={id}>
                    <div className="character-cell">{character.name}</div>
                    <div className="character-cell">{character.birthday}</div>
                    <div className="character-cell">{character.gender}</div>
                    <div className="character-cell">
                        {character.marriageable ? 'Yes' : 'No'}
                    </div>
                    <div className="character-cell">{character.lovedGifts}</div>
                    <div className="character-cell">{character.hatedGifts}</div>
                </div>,
                ...prevContent
            ]);
        }
        setSearchPrompt(''); // Clear search bar
    };

    return (
        <div className={`game-screen window flexbox page-container ${className}`}>
            <div className="search-container flexbox">
                <div className="search-bar-container">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search..."
                        value={searchPrompt}
                        onChange={(e) => setSearchPrompt(e.target.value)}
                        onFocus={() => setIsInputActive(true)}
                        onBlur={() => setTimeout(() => setIsInputActive(false), 100)}
                    />
                </div>
                {(searchPrompt.length > 0 || isInputActive) && (
                    <div className="dropdown-container flexbox">
                        <ul role="listbox" className="dropdown-list">
                            {dropdownContent}
                        </ul>
                    </div>
                )}
            </div>
            <div className="characters-container flexbox">
                <div className="character-header character-row">
                    <div className="character-cell">Character</div>
                    <div className="character-cell">Birthday</div>
                    <div className="character-cell">Gender</div>
                    <div className="character-cell">Marriageable</div>
                    <div className="character-cell">Loved Gifts</div>
                    <div className="character-cell">Hated Gifts</div>
                </div>
                {selectedCharactersContent}
            </div>
        </div>
    );
};

export default GameScreen;
