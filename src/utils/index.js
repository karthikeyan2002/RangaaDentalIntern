import * as firebase from "firebase";
import { firestore } from "../firebase";

const createNewPost = async (data) => {
	await firestore
		.collection("patients")
		.add({
			data,
			created: firebase.default.firestore.FieldValue.serverTimestamp(),
		});
};

export { createNewPost };
