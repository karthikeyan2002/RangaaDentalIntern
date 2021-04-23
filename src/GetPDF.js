import React from "react";
import { PdfDocument } from "./PdfGenrator";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Image,
} from "@react-pdf/renderer";

const GetPDF = ({ data, styles }) => (
	<Document>
		<Page size='A4' style={styles.page}>
			<View style={styles.pagecontainer}>
				<view style={styles.header}>
					<Text>Rangaa Dental</Text>
				</view>

				<view style={styles.subheading}>
					<Text>Patient Details</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Name : {`${data.firstName}  ${data.lastName}`} </Text>
						<Text> Email : {data.email} </Text>
						<Text> State : {data.state}</Text>
					</view>

					<view style={styles.box2}>
						<Text> Age : {data.age} </Text>
						<Text> Phone Number : {data.phno}</Text>
						<Text> Visited due to : Fever</Text>
					</view>

					<view style={styles.box3}>
						<Text> Gender : {data.gender} </Text>
						<Text> City : {data.city} </Text>
					</view>
				</view>

				<view style={styles.subheading}>
					<Text>Medical History</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Allergy : NM </Text>
						<Text> Diabetes : UM </Text>
						<Text> Epilepsy : NM </Text>
					</view>

					<view style={styles.box2}>
						<Text> Hypertension : UM</Text>
						<Text> Bleeding Disorder : NM</Text>
						<Text> Anticoagulant therapy : NM </Text>
					</view>

					<view style={styles.box3}>
						<Text> Ischemic cardiac diseases : NM </Text>
						<Text> UM - Under Medication </Text>
						<Text> NM - Not Under Medication </Text>
					</view>
				</view>
			</View>
		</Page>
	</Document>
);

export default GetPDF;
