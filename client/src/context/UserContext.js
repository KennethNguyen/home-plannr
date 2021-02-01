import React, { useReducer, createContext } from "react";
import { useHistory } from "react-router-dom";
import * as api from "../api/api";

const UserContext = createContext();

const ACTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
  LOGOUT: "logout",
};

const UserContextProvider = (props) => {
  const history = useHistory();
  const userState = { authData: null };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.LOGIN:
      case ACTIONS.SIGNUP:
        localStorage.setItem(
          "userDetails",
          JSON.stringify({ ...action.payload.data })
        );
        // eslint-disable-next-line
        console.log(
          `This is localStorage: ${localStorage.getItem("userDetails")}`
        );
        return { ...state, authData: action.payload.data };
      case ACTIONS.LOGOUT:
        localStorage.clear();
        return { ...state, authData: null };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, userState);

  const loginUser = async (formData) => {
    try {
      const { data } = await api.login(formData);
      dispatch({ type: ACTIONS.LOGIN, payload: { data } });
      history.push("/");
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const signupUser = async (formData) => {
    try {
      const { data } = await api.signup(formData);
      dispatch({ type: ACTIONS.SIGNUP, payload: { data } });
      history.push("/");
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const logoutUser = () => {
    try {
      dispatch({ type: ACTIONS.LOGOUT });
      history.push("/login");
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const { authData } = state;

  const providerValues = {
    authData,
    loginUser,
    signupUser,
    logoutUser,
  };

  const { children } = props;

  return (
    <UserContext.Provider value={providerValues}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
