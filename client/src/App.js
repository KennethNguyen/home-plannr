import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ToggleLightMode from "./components/ToggleLightMode/ToggleLightMode";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import Home from "./components/HomePage/Home";
import LogOutButton from "./components/LogOutButton";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <ToggleLightMode />
      <UserContextProvider>
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
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
