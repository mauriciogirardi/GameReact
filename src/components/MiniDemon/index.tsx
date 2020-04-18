import React from 'react';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';
import './index.css';

const MiniDemon = () => {
	return (
		<div
			style={{
				animation: 'mini-demon-anomation 1s steps(4) infinite',
				backgroundImage: 'url(./assets/MINI-DEMON.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
				width: TILE_SIZE,
				height: TILE_SIZE + HEAD_OFFSET,
				position: 'absolute',
				bottom: TILE_SIZE * 10,
				left: TILE_SIZE * 5,
			}}
		/>
	);
};

export default MiniDemon;
