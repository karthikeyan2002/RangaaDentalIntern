import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import Json from "../surveys/qns";

Survey.StylesManager.applyTheme("modern");

const MySurvey = () => {
  return (
    <Survey.Survey
      showCompletedPage={true}
      onComplete={(data) => console.log(data.valuesHash)}
      json={Json}
    />
  );
};

export default MySurvey;
