import React from "react";
import  { version } from "react";
import "./App.css";
import Header from "./Header.js";
import Input from "./Input.js";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";

export let islogin = true;
console.log(islogin);

function App() {
	return (
		<>
			{islogin ? (
				<>
					<Header />
					<input type='text' placeholder='Search' style={{ float: "right" }} />
					<Input />
				</>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
