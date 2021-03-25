import * as firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCIpQu_bSnjw1S4XbIe4QtmPmBvYRHAFZ0",
	authDomain: "ranga-dental.firebaseapp.com",
	projectId: "ranga-dental",
	storageBucket: "ranga-dental.appspot.com",
	messagingSenderId: "449488924393",
	appId: "1:449488924393:web:1153a486a250b4bbebca78",
	measurementId: "G-11X2TKQK4J",
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);
const firestore = firebase.default.firestore();
const firestoreRef = firebase.default.firestore().collection("patients");

export { firestore, firestoreRef, firebase, firebaseConfig };
