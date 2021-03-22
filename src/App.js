import React from "react";
import "./App.css";
import Header from "./Header.js";
import Login from "./login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SurveyComponent from "./SurveyComponent";
import { NavigationBar } from "./NavigationBar";

export let islogin = true;
console.log(islogin);

function App() {
  return (
    <>
      {islogin ? (
        <>
          <Header />
          <NavigationBar />
          <SurveyComponent />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
