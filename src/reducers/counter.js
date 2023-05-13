const initialState = 0;

const counter = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
		case "DECREMENT":
			return state - action.payload;
		case "MULTIPICATION":
			return state * action.payload;
		case "DIVIDE":
			return state / action.payload;
		default:
			return state;
	}
};

export default counter;
