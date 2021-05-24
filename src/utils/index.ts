import * as sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail";
import * as firebase from "firebase";
import fs from "fs";
import { firestore } from "../firebase";
import { login } from "../redux/actions";
import { store } from "../redux/store";
/**
 * Create new paient with unique ID and store it in DB
 * @param data
 */
const createNewPost = async (data: any) => {
	await firestore.collection("patients").add({
		...data,
		created: firebase.default.firestore.FieldValue.serverTimestamp(),
	});
};

/**
 * Function that updates patients data. Use this to update not create
 * @param data
 * @param patientID
 */

const updatePatientData = async (
	data: firebase.default.firestore.DocumentData,
	patientID: string
): Promise<void> => {
	await firestore.collection("patients").doc(patientID).update(data);
};

/**
 * Function to get all patients data for displaying in dashboard
 * @returns
 */
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

const sendMail = (fileName?: string, filePath?: string): void => {
	sgMail.setApiKey("APIKEY");
	console.log(fs);
	var msg: MailDataRequired;
	fs.readFile(
		"D:\\Studies\\Graph Theory\\Module -I Basics in Graph Theory",
		(err, data) => {
			if (err) {
				// do something with the error
			}
			if (data) {
				msg = {
					to: "tarun@student.tce.edu",
					from: "tarunksu30@gmail.com",
					subject: "Attachment",
					html: "<p>Here’s an attachment for you!</p>",
					attachments: [
						{
							content: data.toString("base64"),
							filename: "some-attachment.pdf",
							type: "application/pdf",
							disposition: "attachment",
							contentId: "mytext",
						},
					],
				};
				(async () => {
					try {
						await sgMail.send(msg);
					} catch (error) {
						console.error(error);

						if (error.response) {
							console.error(error.response.body);
						}
					}
				})();
			}
		}
	);
};

/**
 * Function to authenticate an user using email password
 * @param email
 * @param password
 * @returns
 */
const userLogin = async (
	email: string,
	password: string
): Promise<firebase.default.auth.UserCredential> => {
	return await firebase.default
		.auth()
		.signInWithEmailAndPassword(email, password);
};

/**
 * Logs out an user
 * @returns Promise
 */
const userLogout = async (): Promise<void> => {
	return await firebase.default.auth().signOut();
};

/**
 * Keeps track of user's auth state
 */
// const monitorUser = (): void => {
// 	firebase.default.auth().onAuthStateChanged((user) => {
// 		if (user?.email) {
// 			store.dispatch(login());
// 		}
// 	});
// };

/**
 * Returns a boolean based on user's auth state
 * @returns boolean
 */
const userSignedIn = (): boolean => {
	let user = firebase.default.auth().currentUser;
	if (user != null) {
		return true;
	}
	return false;
};

console.log(userSignedIn());

// 1//0g1slxpjR79hVCgYIARAAGBASNgF-L9Ir8ERV5PSHYf1JMLgaMpwv08eHYXU393LjK6P_xFqUp0QNBUzempnbz2zfnEHCoWuoEA
export {
	createNewPost,
	getPatients,
	updatePatientData,
	sendMail,
	userLogin,
	userLogout,
	userSignedIn,
};
