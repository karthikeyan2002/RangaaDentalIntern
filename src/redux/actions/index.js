import {
	DIABETES,
	EPILSEPSY,
	GENDER,
	HYPERTENSION,
	LOGIN,
	PATIENT_AGE,
	PATIENT_DETAILS,
	PATIENT_NAME,
	PHONE_NUMBER,
} from "../types";

export const updateName = (name) => {
	return {
		type: PATIENT_NAME,
		payload: name,
	};
};

export const updateAge = (age) => {
	return {
		type: PATIENT_AGE,
		payload: age,
	};
};

export const updatePhoneNumber = (number) => {
	return {
		type: PHONE_NUMBER,
		payload: number,
	};
};

export const updateGender = (gender) => {
	return {
		type: GENDER,
		payload: gender,
	};
};

export const hasDiabetes = (diabetes) => {
	return {
		type: DIABETES,
		payload: diabetes,
	};
};

export const hasHypertension = (hypertension) => {
	return {
		type: HYPERTENSION,
		payload: hypertension,
	};
};

export const hasEpilepsy = (epilepsy) => {
	return {
		type: EPILSEPSY,
		payload: epilepsy,
	};
};

export const updateAllDetails = (details) => {
	return {
		type: PATIENT_DETAILS,
		payload: details,
	};
};

export const login = () => {
	return {
		type: LOGIN,
	};
};
