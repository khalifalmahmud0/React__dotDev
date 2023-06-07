import { useState } from "react";
import Button from "../Button/Button";
import ButtonClickCounter from "../ButtonClickCounter/ButtonClickCounter";
import ChangeButtonClickUsingProps from "../ChangeButtonClickUsingProps/ChangeButtonClickUsingProps";
import Profile from "../Profile/Profile";
import ShoppingList from "../ShoppingList/ShoppingList";
import "./App.css";

function App() {
	const [count, setCount] = useState(1);

	return (
		<>
			<h1>All Components Here: </h1>
			<Button />
			<Profile />
			<ShoppingList />
			<ButtonClickCounter />
			<ButtonClickCounter />
			<ButtonClickCounter />
			<ButtonClickCounter />
			<ButtonClickCounter />
			<br />
			<ChangeButtonClickUsingProps
				count={count}
				onClickRenderParentData={() => setCount(count + 1)}
			/>
			<ChangeButtonClickUsingProps
				count={count}
				onClickRenderParentData={() => setCount(count + 1)}
			/>
		</>
	);
}

export default App;
