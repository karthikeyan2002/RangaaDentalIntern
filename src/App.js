import React from "react";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Formtwo from "./Formtwo.js";
import { getPatients } from "./utils/index.ts";
import { BrowserRouter } from "react-router-dom";

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
