import React, { useState, useEffect } from "react";
import "./Table.css";
import Header from "./Header";
import { getPatients } from "./utils/index";
import add from "./add-5.png";
import search from "./search.png";

function Table() {
	const [patients, setPatients] = useState([]);
	useEffect(() => {
		getPatients()
			.then((response) => setPatients(response))
			.catch((err) => console.error(err));
	}, []);

	console.log(patients);

	return (
		<div className='Dashboard'>
			<Header />
			{/* <div className= "patient-search">
				<input type="search" id="patinet" className="search" placeholder="&#128269; Search Patient"></input>
				<button className="Add-btn">Add Patient</button>
			</div> */}
			<table>
				<tr style={{ backgroundColor: "black", color: "white" }}>
					<th>Name</th>
					<th>Phone</th>
					<th>Age</th>
					<th>Email</th>
					<th>Complaint</th>
					<th>Add</th>
				</tr>
				{patients.length > 0 ? (
					patients.map((patient) => (
						<tr>
							<td>{patient.Name}</td>
							<td>{patient["Phone Number"]}</td>
							<td>{patient.Age}</td>
							<td>{patient.email}</td>
							<td>Some Complaints</td>
							<td><button className= "editbtn">Edit</button></td>
						</tr>
					))
				) : (
					<h2 style={{ color : 'white', fontFamily: 'monospace'}}>Loading ....</h2>
				)}
				
			</table>
			<img src={add} className="add"></img>
			<img src={search} className="search"></img>
		</div>
	);
}

export default Table;
