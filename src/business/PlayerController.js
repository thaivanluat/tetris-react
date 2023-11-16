import { isWithinBoard, hasCollision  } from "@/business/Board";
import { Action } from "@/business/Input";
import { rotate } from "@/business/Tetrominoes";

export const playerController = ({
	action,
	board,
	player,
	setPlayer,
	setGameOver
}) => {
	if(!action) {
		return;
	}

	if(action === Action.Rotate) {
		attemptRotation({ board, player, setPlayer });
	} else {
		attemptMovement({ board, player, setPlayer, action, setGameOver})
	}
}

export const movePlayer = ({ movement, position, shape, board}) => {
	const desiredNextPosition = {
		row: position.row + movement.row,
		column: position.column + movement.column,
	};

	const collided = hasCollision({
		board,
		position: desiredNextPosition,
		shape
	});

	const isOnBoard = isWithBoard({
		board,
		position: desiredNextPosition,
		shape
	});

	const preventMove = !isOnBoard || (isOnBoard && collided);
	const nextPosition = preventMove ? position : desiredNextPosition;

	const isMovingDown = movement.row > 0;
	const isHit = isMovingDown && (collided || !isOnBoard);

	return { collided: isHit, nextPosition };
}

const attemptRotation = ({ board, player, setPlayer }) => {
	const shape = rotate({
		piece: player.tetromino.shape,
		direction: 1
	});

	const position = player.position;
	const isValidRotation = isWithinBoard({board, position, shape}) && 
							!hasCollision({board, position, shape});

	if(isValidRotation) {
		setPlayer({
			...player,
			tetromino: {
				...player.tetromino,
				shape
			}
		});
	} else {
		return false;
	}
}

const attemptMovement = ({ board, player, setPlayer, action, setGameOver}) => {
	const movement = {row: 0, column: 0};
	let isFastDrop = false;

	if(action === Action.FastDrop) {
		isFastDrop = true;
	} else if(action === Action.SlowDrop) {
		movement.row += 1;
	} else if(action === Action.Left) {
		movement.column -= 1;
	} else if(action === Action.Right) {
		movement.column += 1;
	}

	const { collided, nextPosition} = movePlayer({
		movement,
		position: player.position,
		shape: player.tetromino.shape,
		board
	});


	const isGameOver = collided && player.position.row === 0;
	if(isGameOver) {
		setGameOver(true);
	}

	setPlayer({
		...player,
		collided,
		isFastDrop,
		position: nextPosition
	})
}