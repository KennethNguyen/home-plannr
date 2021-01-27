import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ToggleLightMode from "./components/ToggleLightMode/ToggleLightMode";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import Home from "./components/HomePage/Home";
import LogOutButton from "./components/LogOutButton";

function App() {
  return (
    <BrowserRouter>
      <ToggleLightMode />
      <Switch>
        <Route exact path="/">
          <LogOutButton />
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
