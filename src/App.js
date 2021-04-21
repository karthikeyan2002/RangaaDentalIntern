import React from "react";
import Header from "./Header.js";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import { createNewPost } from "./utils";
import MySurvey from "../src/surveydisp/surveyone";
import Table from "./Table";
import TableTest from "./TableTest.js";
import Formone from "./Formone.js";
import Formtwo from "./Formone.js";

export let islogin = true;
console.log(islogin);
getPatients()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
function App() {
  return (
    <>
      {islogin ? (
        <>
          {/* <Header />
					<NavigationBar /> */}
          {/* <MySurvey /> */}
          {/* <TableTest /> */}
          {/* <Table /> */}
          {/* <Formone /> */}
          <Formtwo />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
