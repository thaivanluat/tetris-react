import React from "react";
import "./GameStats.css";

const GameStats = ({ gameStats }) => {
	const { level, points, linesCompleted, linePerLevel } = gameStats;
	const linesToLevel = linePerLevel - linesCompleted;

	return (
		<ul className="gamestats gamestats__right">
			<li>Level</li>
			<li className="value">{level}</li>
			<li>Lines to next level</li>
			<li className="value">{linesToLevel}</li>
			<li>Points</li>
			<li className="value">{points}</li>
		</ul>
	);
};

export default React.memo(GameStats);
