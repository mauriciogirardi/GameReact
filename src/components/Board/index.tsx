import React from 'react';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Trap from '../Trap';
import Chest from '../Chest';

import './index.css';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
	return (
		<div className="containerBoard">
			<Hero />
			<MiniDemon />
			<Demon />
			<Trap />
			<Chest />
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
