import { combineReducers } from "redux";
import * as types from "../types";

const intialState = {};

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
		default:
			return state;
	}
};

export const allReducers = combineReducers({ state });
