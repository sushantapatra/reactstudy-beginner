import React, { useState } from "react";

const ShortCircuitEvaluation = () => {
	const [name, setName] = useState("");
	return (
		<div>
			<h1>Short Circuit Evaluation</h1>
			<h3>
				{name || (
					<>
						<p>Sushanta Patra</p>
						<p>React Developer</p>
					</>
				)}
			</h3>
			<h3>{name && "Sushanta"}</h3>
		</div>
	);
};

export default ShortCircuitEvaluation;
