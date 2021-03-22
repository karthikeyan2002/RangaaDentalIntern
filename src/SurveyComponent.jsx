import React, { Component } from "react";

import * as Survey from "survey-react";
import "survey-react/modern.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  render() {
    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "paneldynamic",
              name: "relatives",
              title: "Please Enter Details",
              renderMode: "progressTop",
              templateTitle: "About: {panel.relativeType}",
              templateElements: [
                {
                  name: "description",
                  type: "text",
                  title: "Name",
                  isRequired: true,
                },
                {
                  name: "isalive",
                  type: "radiogroup",
                  title: "Gender",
                  startWithNewLine: false,
                  isRequired: true,
                  colCount: 0,
                  choices: ["Male", "Female", "Others"],
                },
                {
                  name: "liveage",
                  type: "dropdown",
                  title: "Age",
                  isRequired: true,
                  startWithNewLine: false,
                  visibleIf: "{panel.isalive} = 'Male''Female''Others'",
                  choicesMin: 1,
                  choicesMax: 115,
                },
                {
                  type: "text",
                  inputFormat: "###-###-####",
                  name: "phone",
                  title: "Mobile Number:",
                  isRequired: true,
                },
                {
                  type: "panel",
                  name: "moreInfo",
                  state: "expanded",
                  title: "Detail Information about: {panel.relativeType}",
                  elements: [
                    {
                      type: "matrixdynamic",
                      name: "relativeillness",
                      title: "Describe the illness or condition.",
                      rowCount: 1,
                      columns: [
                        {
                          name: "illness",
                          cellType: "dropdown",
                          title: "Illness/Condition",
                          choices: [
                            "Cancer",
                            "Epilepsy",
                            "Heart Disease",
                            "Diabetes",
                            "Stroke/TIA",
                            "High Blood Pressure",
                            "High Cholesterol or Triglycerides",
                            "Liver Disease",
                            "Alcohol or Drug Abuse",
                            "Anxiety, Depression or Psychiatric Illness",
                            "Tuberculosis",
                            "Anesthesia Complications",
                            "Genetic Disorder",
                            "Other – describe",
                          ],
                          isRequired: true,
                        },
                        {
                          name: "description",
                          cellType: "text",
                          title: "Describe",
                          isRequired: true,
                        },
                      ],
                    },
                  ],
                },
              ],
              panelCount: 1,
              panelAddText: "Add Next Patient",
              panelRemoveText: "Remove This Patient",
            },
          ],
        },
      ],
    };
    const survey = new Survey.Model(json);

    return <Survey.Survey model={survey} />;
  }
}

export default SurveyComponent;

// import React from "react";
// import * as actions from "./redux/actions";
// import { useDispatch } from "react-redux";
// import { store } from "./redux/store";
// function Input() {
// 	const dispatch = useDispatch();
// 	console.log(store.getState());
// 	return (
// 		<div className='Input'>
// 			<table>
// 				<tr>
// 					<th> Name </th>
// 					<th> Age </th>
// 					<th> Phone Number </th>
// 					<th> Gender </th>
// 					<th> Diabetes </th>
// 					<th> Hypertension </th>
// 					<th> Epilepsy </th>
// 					<th> Add </th>
// 				</tr>
// 				<tr>
// 					<td>
// 						<input
// 							name='Patient-Name'
// 							type='text'
// 							placeholder="Enter Patient's Name"
// 							onChange={(event) => {
// 								dispatch(actions.updateName(event.target.value));
// 								event.preventDefault();
// 							}}
// 						/>
// 					</td>
// 					<td>
// 						<input
// 							name='Patient-Age'
// 							type='number'
// 							placeholder="Enter Patient's Age"
// 							onChange={(event) => {
// 								dispatch(actions.updateAge(event.target.value));
// 								event.preventDefault();
// 							}}
// 						/>
// 					</td>
// 					<td>
// 						<input
// 							name='Phone-number'
// 							type='tel'
// 							placeholder="Patient's Phone number"
// 							onChange={(event) => {
// 								dispatch(actions.updatePhoneNumber(event.target.value));
// 								event.preventDefault();
// 							}}
// 						/>
// 					</td>
// 					<td>
// 						<select
// 							onChange={(event) => {
// 								dispatch(actions.updateGender(event.target.value));
// 								event.preventDefault();
// 							}}
// 						>
// 							<option value='Male'>Male</option>
// 							<option value='Female'>Female</option>
// 						</select>
// 					</td>
// 					<td>
// 						<select
// 							onChange={(event) => {
// 								console.log();
// 								dispatch(actions.hasDiabetes(event.target.value));
// 								event.preventDefault();
// 							}}
// 						>
// 							<option value='Diabetes-num'>Not Under Medication</option>
// 							<option value='Diabetes-um'>Under Medication</option>
// 						</select>
// 					</td>
// 					<td>
// 						<select
// 							onChange={(event) => {
// 								dispatch(actions.hasHypertension(event.target.value));
// 								event.preventDefault();
// 							}}
// 						>
// 							<option value='hypertension-num'>Not Under Medication</option>
// 							<option value='hypertension-um'>Under Medication</option>
// 						</select>
// 					</td>
// 					<td>
// 						<select
// 							onChange={(event) => {
// 								dispatch(actions.hasEpilepsy(event.target.value));
// 								event.preventDefault();
// 							}}
// 						>
// 							<option value='Epilepsy-num'>Not under Medication</option>
// 							<option value='Epilepsy-um'>Under Medication</option>
// 						</select>
// 					</td>
// 					<td>
// 						<button type='submit' onClick={() => console.log(store.getState())}>
// 							Add
// 						</button>
// 					</td>
// 				</tr>
// 			</table>
// 		</div>
// 	);
// }

// export default Input;
