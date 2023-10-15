import React from "react"

import Preview from "/src/components/Preview";

const Previews = ({ tetrominoes }) => {
	// we want everything except the last one 
	const previewTetrominos = tetrominoes.slice(1- tetrominoes.length)
	.reverse();

	return (
		<>
			{previewTetrominos.map((tetromino, index) => (
				<Preview tetromino={tetromino} index={index} key={index} />
			))}
		</>
	);
}

export default React.memo(Previews);