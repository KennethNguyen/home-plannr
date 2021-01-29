import React, { useReducer, createContext } from "react";
import * as api from "../api/api";

const UserContext = createContext();

const ACTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
  LOGOUT: "logout",
};

const UserContextProvider = (props) => {
  const userState = { authData: null };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.LOGIN:
      case ACTIONS.SIGNUP:
        localStorage.setItem(
          "userDetails",
          JSON.stringify({ ...action.payload.data })
        );
        console.log(`This is localStorage: ${localStorage.getItem('userDetails')}`)
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
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const signupUser = async (formData) => {
    const { data } = await api.signup(formData);
    dispatch({ type: ACTIONS.SIGNUP, payload: { data } });
  };

  const logoutUser = () => {
    dispatch({ type: ACTIONS.LOGOUT });
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
