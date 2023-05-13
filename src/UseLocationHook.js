import React from "react";
import { useLocation } from "react-router-dom";

const UseLocationHook = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div>
			<h1>Use Location Hook</h1>
		</div>
	);
};

export default UseLocationHook;
