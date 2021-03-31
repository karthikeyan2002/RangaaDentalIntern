import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import Json from "../surveys/qns";
import { createNewPost } from "../utils";

Survey.StylesManager.applyTheme("modern");

const MySurvey = () => {
	return (
		<Survey.Survey
			showCompletedPage={true}
			onComplete={(data) =>
				createNewPost(data.valuesHash)
					.then((res) => console.log(res))
					.catch((err) => console.log(err))
			}
			json={Json}
		/>
	);
};

export default MySurvey;
