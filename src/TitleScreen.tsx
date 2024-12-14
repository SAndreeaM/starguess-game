import React from 'react';

import './TitleScreen.css';

// Import assets
import starguess from './assets/starguess.svg';
import starguess_bg from './assets/logo-bg.svg';
import btn2 from './assets/btn2.svg';

import leaf1 from './assets/leaf1.svg';
import leaf2 from './assets/leaf2.svg';
import leaf3 from './assets/leaf3.svg';
import leaf4 from './assets/leaf4.svg';
import leaf5 from './assets/leaf5.svg';

const TitleScreen: React.FC = () => {
    // Setup buttons
    const buttons: string[] = ['Daily Challenge', 'Endless Mode', 'About'];
    const buttonElements = buttons.map((buttonText, index) => (
        <div key={index} className='button-container flexbox'>
            <img className='button-bg' src={btn2} alt="Button Background" />
            <button className='title-screen-button'>
                {buttonText}
            </button>
        </div>
    ));

    // Leaf assets array
    const leafAssets = [leaf1, leaf2, leaf3, leaf4, leaf5];

    // Handle leaf click
    const handleLeafClick = (event: React.MouseEvent<HTMLImageElement>) => {
        console.log(`Leaf clicked!`, event.currentTarget.alt);
        console.log(`Mouse Position: X=${event.clientX}, Y=${event.clientY}`);
    };

    // Generate leaf elements
    const leafElements = leafAssets.map((leaf, index) => (
        <img
            key={index}
            className={`leaf${index + 1}`}
            src={leaf}
            alt={`Leaf ${index + 1}`}
            onClick={handleLeafClick}
        />
    ));

    return (
        <div className='title-screen flexbox'>
            <div className='starguess-logo-container flexbox'>
                <img className='starguess-logo' src={starguess} alt="StarGuess Logo" />
                <img className='starguess-logo-bg' src={starguess_bg} alt="StarGuess Logo Background" />
                <div className='logo-leaves-container'>
                    {leafElements}
                </div>
            </div>
            <div className='buttons-container flexbox'>
                {buttonElements}
            </div>
        </div>
    );
};

export default TitleScreen;
