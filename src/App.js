import React from "react";
import "./App.css";
import Header from "./Header.js";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import { createNewPost } from "./utils";
import MySurvey from "../src/surveydisp/surveyone";
import MainForm from "./MainForm";
import "./utils";
export let islogin = true;
console.log(islogin);
createNewPost()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
function App() {
	return (
		<>
			{islogin ? (
				<>
					<Header />
					<NavigationBar />
					{/* <MySurvey /> */}
					<MainForm />
				</>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
