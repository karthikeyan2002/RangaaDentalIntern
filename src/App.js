import React from "react";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Formtwo from "./Formtwo";
import Formone from "./Formone";
import Formthree from "./Formthree";

function App() {
	const islogin = useSelector((state) => state.state.login);
	console.log(islogin);
	return (
		<>
			{" "}
			<BrowserRouter>
				{islogin ? (
					<>
						{/* <Dashboard />  */}
						{/* <Formone /> */}
						{/* <Formtwo />  */}
						{/* <Formthree /> */}
						<Switch>
							<Route exact path='/' component={Dashboard} />
							<Route path='/Receptionist' component={Formone} />
							<Route path='/Nurse' component={Formtwo} />
							<Route path='/Doctor' component={Formthree} />
						</Switch>
					</>
				) : (
					<Login />
				)}
			</BrowserRouter>
		</>
	);
}
export default App;
