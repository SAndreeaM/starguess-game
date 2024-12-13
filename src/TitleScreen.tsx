import React from 'react';

import starguess from './assets/starguess.svg';
import starguess_bg from './assets/logo-bg.svg';

const TitleScreen: React.FC = () => {
	const buttons: string[] = ['Play', 'Settings', 'About'];
	const buttonElements = buttons.map((buttonText, index) => (
		<button key={index} className='title-screen-btn flexbox'>
			{buttonText}
		</button>
	))

	return (
		<div className='title-screen flexbox'>
			<div className='starguess-logo-container flexbox'>
				<img className='starguess-logo' src={starguess} alt="StarGuess Logo" />
				<img className='starguess-logo-bg' src={starguess_bg} alt="StarGuess Logo" />
			</div>
			<div className='btn-container flexbox'>
				{buttonElements}
			</div>
		</div>
	);
};

export default TitleScreen;