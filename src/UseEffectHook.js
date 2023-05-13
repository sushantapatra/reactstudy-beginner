import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
	const [num, setNum] = useState(0);

	const [widthCount, setWidthCount] = useState(window.screen.width);
	const actualWidth = () => {
		setWidthCount(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", actualWidth);
		return () => {
			window.removeEventListener("resize", actualWidth);
		};
	});

	useEffect(() => {
		console.log(`Use Effect code running... ${num}`);
	}, [num]);

	return (
		<div>
			<h1>UseEffect Hook</h1>
			<h3>Number : {num}</h3>
			<hr />
			<p>The actual size of the window :</p>
			<h3>{widthCount}</h3>

			<button
				className="btn btn-sm btn-secondary mx-2"
				onClick={() => setNum(num + 1)}
			>
				Increase
			</button>
			<button
				className="btn btn-sm btn-secondary mx-2"
				onClick={() => setNum(num - 1)}
			>
				Decrease
			</button>
		</div>
	);
};

export default UseEffectHook;
