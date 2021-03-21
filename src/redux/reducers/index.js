import { combineReducers } from "redux";
import * as types from "../types";

const intialState = {
	name: "",
	phoneNumber: "",
	age: 0,
	gender: "M",
	diabetes: "Not Under Medication",
	hypertension: "Not Under Medication",
	epilepsy: "Not Under Medication",
};

const reducer = (state = intialState, action) => {
	if (action.type === undefined) {
		return state;
	}
	switch (action.type) {
		case types.PATIENT_NAME:
			return {
				...state,
				name: action.payload,
			};
		case types.PHONE_NUMBER:
			return {
				...state,
				phoneNumber: action.payload,
			};
		case types.PATIENT_AGE:
			return {
				...state,
				age: action.payload,
			};
		case types.GENDER:
			return {
				...state,
				gender: action.payload,
			};
		case types.DIABETES:
			return {
				...state,
				diabetes: action.payload,
			};
		case types.HYPERTENSION:
			return {
				...state,
				hypertension: action.payload,
			};
		case types.EPILSEPSY:
			return {
				...state,
				epilepsy: action.payload,
			};
		default:
			return state;
	}
};

export const allReducers = combineReducers({ reducer });
