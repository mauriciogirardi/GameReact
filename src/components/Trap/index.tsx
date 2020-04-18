import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Trap = () => {
	return (
		<div
			style={{
				animation: 'trap-anomation 1s steps(8) infinite',
				backgroundImage: 'url(./assets/TRAP.png)',
				backgroundRepeat: 'no-repeat',
				width: TILE_SIZE,
				height: 100,
				position: 'absolute',
				bottom: TILE_SIZE * 5,
				left: TILE_SIZE * 15,
			}}
		/>
	);
};

export default Trap;
