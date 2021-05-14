import React from "react";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Formone from "./Formone.js";
import { getPatients } from "./utils/index.ts";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";

getPatients()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
function App() {
	const islogin = useSelector((state) => state.state.login);
	console.log(islogin);
	return (
		<>
			{" "}
			<BrowserRouter>
				{islogin ? ( // CHANGE true to islogin
					<>
						{/* <Header />*/}
						<Dashboard />
						{/* <Table />  */}
						{/* <Formone />  */}
						{/* <Formtwo /> */}
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
