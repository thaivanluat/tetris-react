import "@/components/menu.css";

const Menu = ({ onClick }) => {
	return (
		<div className="menu">
			<button className="button" onClick={onClick}>
				Play tetris
			</button>
		</div>
	);
};

export default Menu;
