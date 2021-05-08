import { combineReducers } from "redux";
import * as types from "../types";

const intialState = {
	login: false,
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
			return {
				...state,
				login: true,
			};
		default:
			return state;
	}
};

export const allReducers = combineReducers({ state });
