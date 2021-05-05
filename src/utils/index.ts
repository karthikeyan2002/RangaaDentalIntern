import * as firebase from "firebase";
import { firestore } from "../firebase";
import * as admin from "firebase-admin";
import _ from "lodash";
import { createTransport } from "nodemailer";

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

const sendMail = (fileName: string, filePath: string): void => {
	const transport = createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			type: "OAuth2",
			user: "tarunksu30@gmail.com",
			clientId:
				"449488924393-rsptflm8535ubdrseshrpla6g0jeb6b8.apps.googleusercontent.com",
			clientSecret: "ilz8I7UVx8sLVJ8BITHJdonC",
			refreshToken:
				"1//04VvwAqUE_n34CgYIARAAGAQSNgF-L9IrhGD_leD05-KWlkB9lgzTdOkhzo2EFSjjTx2_MPvFFrRh7_l1f2DmrcghPNn8aKq3sw",
		},
	});
	let mailOptions = {
		from: "tarunksu30@gmail.com",
		to: "tarun@student.tce.edu",
		fileName,
		path: filePath,
	};
	transport.sendMail(mailOptions, (err) => {
		if (err) {
			console.log("Error" + err);
		}
	});
};

// Function to authenticate users

const userLogin = async (email:string, password:string) : Promise<firebase.default.auth.UserCredential> =>{
	return await firebase.default.auth().signInWithEmailAndPassword(email,password)
}

export { createNewPost, createUser, getPatients, updatePatientData, sendMail,userLogin };
