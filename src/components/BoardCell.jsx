import "./BoardCell.css";

const BoardCell = ({ cell }) => (
	<div className={`board-cell ${cell.className}`}>
		<div className="sparkle"></div>
	</div>
);

export default BoardCell;
