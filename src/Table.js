import React, { useState, useEffect } from "react";
import "./Table.css";
import Header from "./Header";
import { getPatients } from "./utils/index";

function Table() {
	const [patients, setPatients] = useState([]);
	useEffect(() => {
		const data = getPatients();
		setPatients(data);
	}, []);

	console.log(patients);

	return (
		<div className='Dashboard'>
			<Header />

			<table>
				<tr style={{ backgroundColor: "black", color: "white" }}>
					<th>Name</th>
					<th>Phone</th>
					<th>Age</th>
					<th>Email</th>
					<th>Complaint</th>
					<th>Add</th>
				</tr>

				{patients.map(function (patients) {
					return (
						<tr>
							<td>{patients.Name}</td>
							<td>{patients.Age}</td>
							<td>{patients.Age}</td>
							<td>{patients.email}</td>
						</tr>
					);
				})} 

				
			</table>
		</div>
	);
}

export default Table;
