import React, { useState, useEffect } from 'react';
import data from './data/data.json';

import './GameScreen.css';

// Import assets
import scroll from './assets/scroll.png';
import character_bg from './assets/character-bg.svg';

import spring from './assets/spring.svg';
import summer from './assets/summer.svg';
import autumn from './assets/autumn.svg';
import winter from './assets/winter.svg';

interface Props {
    className?: string;
}

const GameScreen: React.FC<Props> = ({ className }) => {
    const [searchPrompt, setSearchPrompt] = useState<string>(''); // Search prompt
    const [dropdownContent, setDropdownContent] = useState<JSX.Element[]>([]); // Dropdown content
    const [isInputActive, setIsInputActive] = useState<boolean>(false); // Track if input is active
    const [selectedCharactersContent, setSelectedCharactersContent] = useState<JSX.Element[]>([]); // Selected characters
    const [selectedCharacterIds, setSelectedCharacterIds] = useState<number[]>([]); // Track selected character IDs

    // Function to map characters to dropdown items
    const getDropdownContent = (characters: typeof data.characters) => {
            return characters
            .filter((character) => !selectedCharacterIds.includes(character.id)) // Exclude selected characters
            .map((character) => (
                <li
                    key={character.id}
                    onMouseDown={() => onCharacterSelect(character.id)}
                    role="option"
                    className='dropdown-item'
                >
                    {character.name}
                </li>
            ));
    };

    // Initialize dropdownContent with full list from data
    useEffect(() => {
        setDropdownContent(getDropdownContent(data.characters));
    }, [selectedCharacterIds]); // Re-run whenever selectedCharacterIds changes

    // Update searchPrompt and filter dropdown content
    useEffect(() => {
        if (searchPrompt.trim()) {
            const filteredContent = data.characters.filter((character) =>
                character.name.toLowerCase().includes(searchPrompt.toLowerCase())
            );
            setDropdownContent(getDropdownContent(filteredContent)); // Filtered dropdown content
        } else {
            setDropdownContent(getDropdownContent(data.characters)); // Reset to full list if search is empty
        }
    }, [searchPrompt, selectedCharacterIds]); // Re-run whenever searchPrompt or selectedCharacterIds changes

    // Handle character selection
    const onCharacterSelect = (id: number) => {
        const character = data.characters.find((char) => char.id === id);
        if (character) {
            // Add the character's ID to selectedCharacterIds
            setSelectedCharacterIds((prevIds) => [...prevIds, id]);

            // Add the character to the selected list
            setSelectedCharactersContent((prevContent) => [
                <div className='character-row' key={id}>
                    <div className='character character-cell'>
                        <img src={character_bg} alt={character.name} className='character-bg' />
                        <img src={character.image} alt={character.name} className='character-image' />
                        <div className='character-name'>{character.name}</div>
                    </div>
                    <div className='character-birthday character-cell'>
                        {character.birthday === -1 ? "Unknown" : (
                            <img 
                                src={
                                    character.birthday === 1 ? spring :
                                    character.birthday === 2 ? summer :
                                    character.birthday === 3 ? autumn :
                                    winter
                                } 
                                alt="Season"
                            />
                        )}
                    </div>
                    <div className='character-cell'>
                        {character.gender === 0 ? "Male" : character.gender === 1 ? "Female" : "Unknown"}
                    </div>
                    <div className='character-cell'>
                        {character.marriageable ? "Yes" : "No"}
                    </div>
                    <div className='character-gifts character-cell'>
                        {character.lovedGifts.map((giftId) => {
                            const gift = data.items.find(item => item.id === giftId);
                            return gift ? (
                                <img key={giftId} src={gift.image} alt={gift.name} />
                            ) : null;
                        })}
                    </div>
                    <div className='character-gifts character-cell flexbox'>
                        {character.hatedGifts.map((giftId) => {
                            const gift = data.items.find(item => item.id === giftId);
                            return gift ? (
                                <img key={giftId} src={gift.image} alt={gift.name} />
                            ) : null;
                        })}
                    </div>
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
                        onBlur={() => setIsInputActive(false)}
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
                <div className="selected-characters-container flexbox">
                    {selectedCharactersContent}
                </div>
            </div>
        </div>
    );
};

export default GameScreen;
