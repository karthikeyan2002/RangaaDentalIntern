import React, { useState, useEffect } from "react";
import "./Table.css";
import Header from "./Header";
import { getPatients } from "./utils/index";
import add from "./img/add-5.png";
import search from "./img/search-2.png";

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
					<th>Age</th>
					<th>Phone</th>
					<th>Email</th>
					<th>Complaint</th>
					<th>Add</th>
				</tr>
				{patients.length > 0 ? (
					patients.map((patient) => (
						<tr>
							<td>{patient.Name}</td>
							<td>{patient.Age}</td>
							<td>{patient["Phone Number"]}</td>
							<td>{patient.email}</td>
							<td>Some Complaints</td>
							<td>
								<button className='editbtn'>Edit</button>
							</td>
						</tr>
					))
				) : (
					<h2 style={{ color: "white", fontFamily: "monospace" }}>
						Loading ....
					</h2>
				)}
				
			</table>

				
			{/* This will be usefull if we want to replace lord icon with img */}
			<img src={add} className="add"></img>
			<img src={search} className="search-img"></img>

			{/* <script src='https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js'></script>

			<lord-icon
				src='https://cdn.lordicon.com/mecwbjnp.json'
				trigger='hover'
				colors='primary:#ee6d66,secondary:#d1faf0'
				style={{
					width: "75px",
					height: "75px",
					float: "right",
					position: "fixed",
					right: "10px",
					bottom: "120px",
				}}
			></lord-icon>

			<lord-icon
				src='https://cdn.lordicon.com/msoeawqm.json'
				trigger='hover'
				colors='primary:#d1181f,secondary:#ffffff'
				className='search-img'
				style={{
					width: "75px",
					height: "75px",
					float: "right",
					position: "fixed",
					right: "10px",
					bottom: "20px",
				}}
			></lord-icon> */}
		</div>
	);
}

export default Table;
