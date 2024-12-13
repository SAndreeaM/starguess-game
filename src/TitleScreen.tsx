import React from 'react';

import starguess from './assets/starguess.svg';

const TitleScreen: React.FC = () => {
	const buttons: string[] = ['Play', 'Settings', 'About'];
	const buttonElements = buttons.map((buttonText, index) => (
		<button key={index} className='title-screen-btn'>
			{buttonText}
		</button>
	))

	return (
		<div className='title-screen flexbox'>
			<div className='starguess-logo'>
				<img src={starguess} alt="StarGuess Logo" />
			</div>
			<div className='btn-container flexbox'>
				{buttonElements}
			</div>
		</div>
	);
};

export default TitleScreen;