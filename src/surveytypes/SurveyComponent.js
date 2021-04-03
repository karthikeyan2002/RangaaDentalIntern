import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import Json from "../surveys/qns";
import { createNewPost } from "../utils";
import * as SurveyPDF from "survey-pdf";

Survey.StylesManager.applyTheme("modern");

const SurveyComponent = () => {
	//pdf generator code starts here
	const survey = new Survey.Model(Json);
	function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
		var options = {
			format: [pdfWidth, pdfHeight],
		};
		var surveyPDF = new SurveyPDF.SurveyPDF(Json, options);
		surveyPDF.data = surveyModel.data;
		surveyPDF.save(filename);
	}
	//pdf generator code ends here
	return (
		<Survey.Survey
			showCompletedPage={true}
			onComplete={(data) => {
				var pdfWidth = survey.pdfWidth || 210;
				var pdfHeight = survey.pdfHeight || 297;
				saveSurveyToPdf("surveyResult.pdf", data, pdfWidth, pdfHeight);
			}}
			json={Json}
		/>
	);
};

export default SurveyComponent;
