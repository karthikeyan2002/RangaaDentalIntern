import { combineReducers } from "redux";
import * as types from "../types";

const intialState = {
	login: localStorage.getItem("user"),
};

const state = (state = intialState, action) => {
	if (action.type === undefined) {
		return state;
	}
	switch (action.type) {
		case types.PATIENT_DETAILS:
			return {
				...state,
				details: action.payload,
			};
		case types.LOGIN:
			localStorage.setItem("user", true);
			return {
				...state,
				login: true,
			};
		case types.LOGOUT:
			localStorage.setItem("user", false);
			return {
				...state,
				login: false,
			};
		default:
			return state;
	}
};

export const allReducers = combineReducers({ state });
