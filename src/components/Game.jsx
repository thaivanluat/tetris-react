import Menu from "@/components/Menu"
import Tetris from "@/components/Tetris"
import { useGameOver } from "@/hooks/useGameOver"

const Game = ({rows, columns}) => {
	const [gameOver, setGameOver, resetGameOver] = useGameOver();
    const start = () => {
		resetGameOver();
	}

    return (
        <div className="game">
			{gameOver ? (
				<Menu onClick={start} />
			) : 
			(	
				<Tetris rows={rows} columns={columns} setGameOver={resetGameOver} />
			)}
            
        </div>
    );
}

export default Game;