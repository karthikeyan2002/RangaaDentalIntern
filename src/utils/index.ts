import * as firebase from "firebase";
import { firestore } from "../firebase";
import * as admin from "firebase-admin";
import _ from "lodash";

// Add new patient data
const createNewPost = async (data: any) => {
	await firestore.collection("patients").add({
		...data,
		created: firebase.default.firestore.FieldValue.serverTimestamp(),
	});
};

// Creates new user ( This is valid only for admin )
const createUser = async (email: string, password: string, role: object) => {
	await firebase.default
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((uid) => {
			if (uid.user != null) {
				return admin
					.auth()
					.setCustomUserClaims(uid.user.uid, role)
					.then((res) => console.log(res))
					.catch((err) => console.log(err));
			} else {
				console.error("User cannot be null");
			}
		});
};

// Update patient data

const updatePatientData = async (
	data: firebase.default.firestore.DocumentData,
	patientID: string
): Promise<void> => {
	await firestore.collection("patients").doc(patientID).update(data);
};

// Retrieves data to display on dashboard
const getPatients = async (): Promise<Array<Object>> => {
	const result: Array<Object> = [];
	await firestore
		.collection("PatientDetails")
		.get()
		.then((res) => {
			res.docs.forEach((doc) => {
				result.push(doc.data());
			});
		})
		.catch((err) => console.log(err));
	return result;
};

export { createNewPost, createUser, getPatients, updatePatientData };
