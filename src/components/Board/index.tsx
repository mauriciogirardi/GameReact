import React from 'react';
import Hero from '../Hero';

import './index.css';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
	return (
		<div className="containerBoard">
			<Hero />
			<img
				src="./assets/tileset.gif"
				alt="board"
				width={GAME_SIZE}
				height={GAME_SIZE}
			/>
		</div>
	);
};

export default Board;
