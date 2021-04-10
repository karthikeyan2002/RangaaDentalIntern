import * as firebase from "firebase";
import { firestore } from "../firebase";
import * as admin from "firebase-admin";
import _ from "lodash";

const createNewPost = async (data) => {
	await firestore.collection("patients").add({
		data,
		created: firebase.default.firestore.FieldValue.serverTimestamp(),
	});
};

const createUser = async (email, password, role) => {
	await firebase.default
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((uid) => {
			admin
				.auth()
				.setCustomUserClaims(uid, role)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		});
};

const getPatients = async () => {
	const result = [];
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

export { createNewPost, createUser, getPatients };
