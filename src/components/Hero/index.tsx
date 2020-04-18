import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Hero = () => {
	return (
		<div
			style={{
				animation: 'hero-anomation 1s steps(4) infinite',
				backgroundImage: 'url(./assets/HERO.png)',
				backgroundRepeat: 'no-repeat',
				width: TILE_SIZE,
				height: 100,
				position: 'absolute',
				bottom: 48,
				left: 0,
			}}
		/>
	);
};

export default Hero;
