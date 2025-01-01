import React from 'react';

import './TitleScreen.css';

// Import utility functions
import * as utils from './utils';

// Import assets
import starguess from './assets/starguess.svg';
import starguess_bg from './assets/logo-bg.svg';
import btn2 from './assets/btn2.svg';

import leaf1 from './assets/leaf1.svg';
import leaf2 from './assets/leaf2.svg';
import leaf3 from './assets/leaf3.svg';
import leaf4 from './assets/leaf4.svg';
import leaf5 from './assets/leaf5.svg';

import petal from './assets/petal.gif';
import petal_flipped from './assets/petal-flipped.gif';

import { Page } from './App';

interface Props {
    onPageChange: (page: Page) => void;
    className?: string;
}

const TitleScreen: React.FC<Props> = ({ onPageChange, className }) => {
    // Leaf click count
    let leafClickCount = 0;

    // Setup buttons
    const buttons: { text: string, page: Page }[] = [
        { text: 'Daily Challenge', page: "daily" },
        { text: 'Endless Mode', page: "endless" },
        { text: 'About', page: "about" }
    ];

    // Generate button elements
    const buttonElements = buttons.map((button, index) => (
        <div key={index} className='button-container flexbox'>
            <img className='button-bg' src={btn2} alt="Button Background" />
            <button className='title-screen-button' onClick={() => onPageChange(button.page)}>
                {button.text}
            </button>
        </div>
    ));

    // Handle leaf click
    const handleLeafClick = (event: React.MouseEvent<HTMLImageElement>) => {
        leafClickCount++;

        const petalCount = utils.getRandomInt(2, 5);
        const animationDuration = 5000;

        const { mouseX, mouseY } = utils.getMousePosition(event.nativeEvent);

        for (let i = 0; i < petalCount; i++) {
            // Create petal element
            const newPetal = document.createElement('img');
            newPetal.src = Math.random() > 0.5 ? petal : petal_flipped;
            newPetal.className = 'petal';
            newPetal.style.left = `${mouseX}px`;
            newPetal.style.top = `${mouseY}px`;

            // Set random color
            newPetal.style.filter = `hue-rotate(${utils.getRandomInt(0, 360)}deg)`;

            // Set random horizontal translation
            const randomX = utils.getRandomNumber(-12.5, 12.5);
            newPetal.style.setProperty('--random-x', `${randomX}vw`);
            newPetal.style.setProperty('--animation-duration', `${animationDuration}ms`);

            document.body.appendChild(newPetal);

            // Remove petal after animation ends
            setTimeout(() => {
                newPetal.remove();
            }, animationDuration);
        }
    };

    // Generate leaf elements
    const leafAssets = [leaf1, leaf2, leaf3, leaf4, leaf5];
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
        <div className={`title-screen flexbox page-container ${className}`}>
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
