import React, { useState } from "react";
const UsestateHook = () => {
	const [name, setName] = useState("Sushanta");
	const [myBiodata, setMyBiodata] = useState([
		{
			id: 0,
			myName: "Sushanta",
			age: 30,
		},
		{
			id: 1,
			myName: "Pagulu",
			age: 30,
		},
	]);
	const [myBio, setMyBio] = useState({
		myName: "Sushanta",
		age: 30,
	});
	const changeName = () => {
		setName("Sushanta Patra");
	};

	const clearData = () => {
		setMyBiodata([]);
	};
	const addData = () => {
		setMyBiodata((prevData) => {
			return [...prevData, { id: 2, myName: "Divya Sundar", age: 29 }];
		});
	};

	const updateData = () => {
		setMyBio({ ...myBio, myName: "Sushanta Patra" });
	};
	//way 1
	const removeSingleData = (removeId) => {
		const myNewData = myBiodata.filter((currentElmemt) => {
			return currentElmemt.id !== removeId;
		});
		setMyBiodata(myNewData);
	};

	// way 2
	const removeSingleData2 = (removeId) => {
		const myNewData = myBiodata.filter(
			(currentElmemt) => currentElmemt.id !== removeId
		);
		setMyBiodata(myNewData);
	};

	return (
		<div>
			<h1>UsestateHook</h1>
			<h3>My Name is : {name}</h3>
			{myBiodata.map((currentElmemt) => (
				<p key={currentElmemt.id}>
					Name:{currentElmemt.myName} and age: {currentElmemt.age}
					<button
						className="btn btn-warning btn-sm"
						onClick={() => removeSingleData(currentElmemt.id)}
					>
						Remove
					</button>
				</p>
			))}

			<p>
				Name:{myBio.myName} and age: {myBio.age}
			</p>

			<button className="btn btn-secondary mx-2" onClick={changeName}>
				Change Name
			</button>

			<button className="btn btn-secondary mx-2" onClick={clearData}>
				Clear Data
			</button>
			<button className="btn btn-secondary mx-2" onClick={addData}>
				Add Data
			</button>
			<button className="btn btn-secondary" onClick={updateData}>
				Update Data
			</button>
		</div>
	);
};
export default UsestateHook;
