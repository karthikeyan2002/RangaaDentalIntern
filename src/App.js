import React from "react";
import Header from "./Header.js";
import NavigationBar from "./NavigationBar.js";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createNewPost } from "./utils";
import Dashboard from "./Dashboard.js";
import Formone from "./Formone.js";
import Formtwo from "./Formtwo.js";
import Formthree from "./Formthree.js";
import { getPatients, sendMail } from "./utils/index.ts";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export let islogin = false;
console.log(islogin);
getPatients()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
function App() {
	return (
		<>
			{" "}
			<BrowserRouter>
				{islogin ? (
					<>
						{/* <Header />*/}
						{/* <Dashboard /> */}
						{/* <Table />  */}
						{/* <Formone />  */}
						<Formtwo />
						{/* <Formthree /> */}
						{/* <Switch>
							<Route exact path='/' component={TableTest} />
							<Route path='/Receptionist' component={Formone} />
							<Route path='/Nurse' component={Formtwo} />
							<Route path='/Doctor' component={Formthree} />
						</Switch> */}
					</>
				) : (
					<Login />
				)}
			</BrowserRouter>
		</>
	);
}
export default App;
