export const incCounter = (num) => {
	return {
		type: "INCREMENT",
		payload: num,
	};
};

export const decCounter = (num) => {
	return {
		type: "DECREMENT",
		payload: num,
	};
};
export const mulCounter = (num) => {
	return {
		type: "MULTIPICATION",
		payload: num,
	};
};

export const divCounter = (num) => {
	return {
		type: "DIVIDE",
		payload: num,
	};
};

/** Todo App Actions */

export const addTodo = (data) => {
	return {
		type: "ADD_TODO",
		payload: {
			id: new Date().getTime().toString(),
			data: data,
		},
	};
};
export const deleteTodo = (id) => {
	return {
		type: "DELETE_TODO",
		id,
	};
};
export const removeTodo = () => {
	return {
		type: "REMOVE_TODO",
	};
};
