import * as sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail";
import * as firebase from "firebase";
import * as admin from "firebase-admin";
import fs from "fs";
import { firestore } from "../firebase";
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

const sendMail = (fileName?: string, filePath?: string): void => {
	sgMail.setApiKey(
		"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"
	);
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

// Function to authenticate users

// API = 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
const userLogin = async (
	email: string,
	password: string
): Promise<firebase.default.auth.UserCredential> => {
	return await firebase.default
		.auth()
		.signInWithEmailAndPassword(email, password);
};

export {
	createNewPost,
	createUser,
	getPatients,
	updatePatientData,
	sendMail,
	userLogin,
};
