import { useState } from "react";

export default function ButtonClickCounter() {
	const [count, setCount] = useState(0);
	function IncreaseCount() {
		setCount(count + 1);
	}
	return (
		<>
			<button onClick={IncreaseCount}> Clicked {count} times</button>
		</>
	);
}
