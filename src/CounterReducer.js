import React from "react";

import {
	incCounter,
	decCounter,
	mulCounter,
	divCounter,
} from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const CounterReducer = () => {
	const myState = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div className="col-md-6 mx-auto">
			<h1>Increment/Decrement Counter Reducer</h1>
			<p>using React and redux</p>
			<h3>{myState}</h3>
			<div className="d-flex">
				<a
					href="#"
					className="btn btn-secondary mx-1"
					onClick={() => dispatch(incCounter(5))}
				>
					+
				</a>
				
				<a
					href="#"
					className="btn btn-secondary mx-1"
					onClick={() => dispatch(decCounter(1))}
				>
					-
				</a>
				<a
					href="#"
					className="btn btn-secondary mx-1"
					onClick={() => dispatch(mulCounter(5))}
				>
					*
				</a>
				<a
					href="#"
					className="btn btn-secondary mx-1"
					onClick={() => dispatch(divCounter(5))}
				>
					/
				</a>
			</div>
		</div>
	);
};

export default CounterReducer;
