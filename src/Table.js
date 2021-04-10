import React, { useState, useEffect } from "react";
import "./Table.css";
import Header from "./Header";
import { getPatients } from "./utils/index";

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
							<td>edit</td>
							<button>+</button>
						</tr>
					))
				) : (
					<h2>Loading</h2>
				)}
				{/* 
				<tr>
					<td>Avinash</td>
					<td>987654321</td>
					<td>20</td>
					<td>avinashr@gmail.com</td>
					<td>complaint----</td>
					<td>edit</td>
				</tr>
				<tr>
					<td>Karthikeyan</td>
					<td>9080585673</td>
					<td>18</td>
					<td>bkarthi1000@gmail.com</td>
					<td>complaint----</td>
					<td>edit</td>
				</tr>
				<tr>
					<td>Karthikeyan</td>
					<td>9080585673</td>
					<td>18</td>
					<td>bkarthi1000@gmail.com</td>
					<td>complaint </td>
					<td>edit</td>
				</tr>
				<tr>
					<td>Karthikeyan</td>
					<td>9080585673</td>
					<td>18</td>
					<td>bkarthi1000@gmail.com</td>
					<td>asfasfasf</td>
					<td>edit</td>
				</tr>
				<tr>
					<td>Karthikeyan</td>
					<td>9080585673</td>
					<td>18</td>
					<td>bkarthi1000@gmail.com</td>
					<td>asfasfasf</td>
					<td>edit</td>
				</tr>
				<tr>
					<td>Karthikeyan</td>
					<td>9080585673</td>
					<td>18</td>
					<td>bkarthi1000@gmail.com</td>
					<td>asfasfasf</td>
					<td>edit</td>
				</tr> */}
			</table>
		</div>
	);
}

export default Table;
