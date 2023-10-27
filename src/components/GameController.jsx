import "./GameController.css";
import { Action, actionForKey } from "@/business/Input";

const GameController = ({
	board,
	gameStats,
	player,
	setGameOver,
	setPlayer,
}) => {
	const onKeyUp = ({ code }) => {
		const action = actionForKey(code);

		if (action === Action.Quit) {
			setGameOver(true);
		}
	};

	const onKeyDown = ({ code }) => {
		console.log(code);
	};

	return (
		<input
			type="text"
			className="game-controller"
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			autoFocus={true}
			onBlur={({ target }) => target.focus()}
		/>
	);
};

export default GameController;
