import React, { useState } from "react";
import { addTodo, removeTodo, deleteTodo } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const TodoApp = () => {
	const [inputData, setInputData] = useState("");
	const todoData = useSelector((state) => state.todoReducer.list);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Todo App using React and Redux</h1>
			<p>To do list</p>
			<div className="row">
				<div className="col-md-4 mx-auto">
					<input
						type="text"
						placeholder="add items here..."
						onChange={(event) => setInputData(event.target.value)}
						value={inputData}
					/>
					<button
						type="submit"
						className="btn btn-success btn-sm mx-2"
						onClick={() =>
							dispatch(addTodo(inputData), setInputData(""))
						}
					>
						Submit
					</button>

					<br />
					<hr />
					<div className="m-4 p-4">
						<ul className="list-group">
							{todoData.map((curElm) => {
								return (
									<li
										className="d-flex justify-content-between my-1"
										key={curElm.id}
									>
										{" "}
										{curElm.data}{" "}
										<span
											className="btn btn-danger btn-sm"
											onClick={() =>
												dispatch(deleteTodo(curElm.id))
											}
										>
											Dlete
										</span>
									</li>
								);
							})}
						</ul>

						{todoData.length > 0 ? (
							<>
								<br />
								<hr />
								<button
									className="btn btn-danger btn-sm"
									onClick={() => dispatch(removeTodo())}
								>
									Remove Todo
								</button>
							</>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
