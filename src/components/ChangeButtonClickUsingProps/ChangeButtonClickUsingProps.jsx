function ChangeButtonClickUsingProps(props) {
	console.log(props);
	return (
		<>
			<button onClick={props.onClickRenderParentData}>
				Clicked {props.count} times
			</button>
		</>
	);
}
export default ChangeButtonClickUsingProps;
