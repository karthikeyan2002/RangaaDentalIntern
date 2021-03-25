import * as firebase from "firebase";
import { firestoreRef } from "../firebase";

const createNewPost = async () => {
	await firebase.default
		.firestore()
		.collection("patients")
		.get()
		.then((res) => res)
		.catch((err) => console.log(err));
};

export { createNewPost };
