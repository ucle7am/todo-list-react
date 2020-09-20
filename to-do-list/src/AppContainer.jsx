import React from "react";
import "./App.css";
import DoComponent from "./componets/DoComponent/DoComponent";
import AddComponent from "./componets/AddComponent/AddComponent";
import App from "./App";
import { connect } from "react-redux";

const getPropsFromState = (state) => {
  return {
    state: state,
  };
};
const dispatchState = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

const AppContainer = connect(getPropsFromState, dispatchState)(App);
export default AppContainer;
