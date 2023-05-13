import React, { useState } from "react";

const BasicForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [allEntry, setAllEntry] = useState([]);
	const inputEvent = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};
	const submitForm = (event) => {
		event.preventDefault();
		const newEntry = { email: formData.email, password: formData.password };
		setAllEntry([...allEntry, newEntry]);
		setFormData({ email: "", password: "" });
	};
	return (
		<div>
			<h1>Basic Form Submit</h1>
			{allEntry.map((curEle, index) => (
				<p key={index}>
					Email :{curEle.email} and password :{curEle.password}
				</p>
			))}
			<form action="" onSubmit={submitForm}>
				<div className="col-md-6 mx-auto">
					<div className="mb-3">
						<label
							htmlFor="exampleFormControlInput1"
							className="form-label"
						>
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							placeholder="name@example.com"
							name="email"
							value={formData.email}
							onChange={inputEvent}
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="exampleFormControlInput1"
							className="form-label"
						>
							Password
						</label>
						<input
							type="password"
							className="form-control"
							placeholder="xxxxxx"
							name="password"
							value={formData.password}
							onChange={inputEvent}
						/>
					</div>
					<button type="submit" className="btn btn-info">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default BasicForm;
