import React from "react";

const SpreadOperator = () => {
	const fullName = ["Sushanta", "Patra"];
	const bioData = [1, ...fullName, 26, "male"];

	const shooterGame = ["Call of Duty", "Far cry", "Resident Evil"];
	const racingGame = ["Need For Speed", "Gran Turismo", "Burnout"];
	const games = [...shooterGame, ...racingGame];

	console.log(games);

	return (
		<div>
			<h1>Spread Operator</h1>
		</div>
	);
};

export default SpreadOperator;
