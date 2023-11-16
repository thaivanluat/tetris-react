import "./GameController.css";
import { Action, actionForKey, actionIsDrop } from "@/business/Input";
import { playerController } from "@/business/PlayerController";
import { useInterval } from '@/hooks/useInterval';
import { useDropTime } from '@/hooks/useDropTime';

const GameController = ({
	board,
	gameStats,
	player,
	setGameOver,
	setPlayer,
}) => {
	const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
		gameStats
	});
	
	useInterval(() => {
		handleInput({ action: Action.SlowDrop })
	}, 1000);

	const onKeyUp = ({ code }) => {
		const action = actionForKey(code);

		if(actionIsDrop(action)) {
			resumeDropTime();
		}
	};

	const onKeyDown = ({ code }) => {
		const action = actionForKey(code);

		if(action === Action.Pause) {
			if(dropTime) {
				pauseDropTime();
			} else {
				resumeDropTime();
			}
		} else if(action === Action.Quit){
			setGameOver(true);
		} else {
			if(actionIsDrop(action)) {
				pauseDropTime();
			}
			handleInput({action});
		}
	};

	const handleInput = ({ action }) => {
		
	}

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
