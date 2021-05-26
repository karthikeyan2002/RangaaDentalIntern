import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

const GetPDF = ({ data, styles }) => (
	<Document>
		<Page size='A4' style={styles.page}>
			<View style={styles.pagecontainer}>
				<view style={styles.header}>
					<Text>Rangaa Dental Care</Text>
						<view style={styles.address}>
						<Text>No 36, Gandhi Road, Thiruvanaikoil, Trichy - 620005, Near Thiruvanaikovil Theppa Kulam</Text>
						</view>
						<view style={styles.date}>
						<Text>Reported : {today}</Text>
						</view>
				</view>
				{/* Basic Details */}
				<view style={styles.margintop}>
					<view style={styles.BasicDetails}>
						<view style={styles.box1}>
							<Text> Name : {data["Name"]}</Text>
							<Text> Email : {data["email"]} </Text>
							<Text> State : TN</Text>
						</view>

						<view style={styles.box2}>
							<Text> Age : {data["Age"]} </Text>
							<Text> Phone Number : {data["Phone Number"]}</Text>
							<Text> Visited due to : Fever</Text>
						</view>

						<view style={styles.box3}>
							<Text> Gender : Male </Text>
							<Text> City : Madurai </Text>
						</view>
					</view>
				</view>
				{/* Habits */}
				<view style={styles.subheading}>
					<Text>Habits</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Nail Biting : </Text>
						<Text> Bottle Feeding : </Text>
					</view>

					<view style={styles.box2}>
						<Text> Thumb sucking : </Text>
						<Text> Moth Breathing :</Text>
					</view>

					<view style={styles.box3}>
						<Text> Tounge Thrusting : </Text>
					</view>
				</view>
				{/* Medical History */}
				<view style={styles.subheading}>
					<Text>History</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Allergy : UM</Text>
						<Text> Diabetes : UM  </Text>
						<Text> Epilepsy : UM </Text>
					</view>

					<view style={styles.box2}>
						<Text> Hypertension : UM</Text>
						<Text> Bleeding Disorder : NM</Text>
						<Text style={{ fontSize: "8px", color: "green" }}>
							UM - Under Medication
						</Text>
					</view>

					<view style={styles.box3}>
						<Text> Ischemic cardiac diseases : NM </Text>
						<Text> Anticoagulant therapy : NM </Text>
						<Text style={{ fontSize: "8px", color: "green" }}>
							NM - Not Under Medication
						</Text>
					</view>
				</view>

				{/* Diagnosis */}
				<view style={styles.subheading}>
					<Text>Diagnosis</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Decayed : </Text>
						<Text> Filled : </Text>
						<Text> Missing : </Text>
						<Text> Fractured : </Text>
					</view>

					<view style={styles.box2}>
						<Text> Attrition : </Text>
						<Text> Dental Caries : </Text>
						<Text> Periapical abscess : </Text>
						<Text> Caries with apical periondontities : </Text>
					</view>

					<view style={styles.box3}>
						<Text> Mobile :</Text>
						<Text> Infected root stumps : </Text>
						<Text> Abrasion / abfraction : </Text>
						<Text> Retained deciduous teeth : </Text>
					</view>
				</view>
				{/* Tooth Problems */}
				<view style={styles.subheading}>
					<Text>Tooth Problem</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Calcus : </Text>
						<Text> Mouth Ulcer : </Text>
						<Text> Bad Breath : </Text>
						<Text> U/L edentulous: </Text>
					</view>

					<view style={styles.box2}>
						<Text> Malocclusion : </Text>
						<Text> Stanis and Calcus : </Text>
						<Text> Periondontitis : </Text>
						<Text> Gingivitis : </Text>
					</view>

					<view style={styles.box3}>
						<Text> Orofacial pain :</Text>
						<Text> MUCOSAL LESIONS : </Text>
						<Text> Lichen Planes : </Text>
						<Text> Leukoplakiat : </Text>
					</view>
				</view>

				<view style={styles.subheading}>
					<Text>Mucosal Lesions</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Lichen Planes : </Text>
					</view>

					<view style={styles.box2}>
						<Text> Leukoplakiat : </Text>
					</view>
				</view>

				<view style={styles.subheading}>
					<Text>Treatment</Text>
				</view>

				<view style={styles.BasicDetails}>
					<view style={styles.box1}>
						<Text> Extraction : </Text>
						<Text> Restoration : </Text>
						<Text>Oral prophylaxis :</Text>
					</view>

					<view style={styles.box2}>
						<Text> Rooot canal Treatment : </Text>
						<Text> Bleaching :</Text>
					</view>
				</view>

				<view style={styles.Thankyou}>
					<Text>Thank You</Text>
					<Text>Get Well Soon !</Text>
				</view>

				<view style={styles.footer}>
					<Text>Contact : 7947264733</Text>
				</view>

			</View>
		</Page>
	</Document>
);

export default GetPDF;
