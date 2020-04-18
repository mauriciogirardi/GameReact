import React from 'react';
import { TILE_SIZE, DEMON_TILE_SIZE } from '../../settings/constants';
import './index.css';

const Demon = () => {
	return (
		<div
			style={{
				animation: 'demon-anomation 1s steps(2) infinite',
				backgroundImage: 'url(./assets/DEMON.png)',
				backgroundRepeat: 'no-repeat',
				width: DEMON_TILE_SIZE,
				height: DEMON_TILE_SIZE,
				position: 'absolute',
				bottom: TILE_SIZE * 12,
				left: TILE_SIZE * 15,
			}}
		/>
	);
};

export default Demon;
