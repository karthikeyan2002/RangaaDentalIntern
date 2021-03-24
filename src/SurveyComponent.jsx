import React, { Component } from "react";

import * as Survey from "survey-react";
import "survey-react/modern.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  render() {
    const json = {
      progressBarType: "buttons",
      showProgressBar: "top",
      pages: [
        {
          navigationTitle: "Panel1",
          navigationDescription: "AAA",

          questions: [
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
                  type: "text",
                  title: "Age",
                  isRequired: true,
                  startWithNewLine: false,
                  visibleIf: "{panel.isalive} = 'Male''Female''Others'",
                  choicesMin: 1,
                  choicesMax: 115,
                },
                {
                  type: "text",
                  name: "phone",
                  title: "Mobile Number:",
                  isRequired: true,
                },
                {
                  type: "matrixdropdown",
                  name: "immunizations",
                  title: "Medical History of the patient:",
                  columns: [
                    {
                      name: "answer",
                      title: "Please select",
                      choices: [
                        {
                          value: "yes",
                          text: "Under medication",
                        },
                        {
                          value: "no",
                          text: "Not Under medication",
                        },
                        {
                          value: "unknown",
                          text: "Unknown",
                        },
                      ],
                      cellType: "radiogroup",
                      isRequired: false,
                    },
                    {
                      name: "year",
                      title: "From Year",
                      cellType: "text",
                      isRequired: false,
                      visibleIf: '{row.answer} = "yes"',
                    },
                  ],
                  choices: [1, 2, 3, 4, 5, 6, 7],
                  rows: [
                    "Diabetes",
                    "Hypertension",
                    "Epilepsy",
                    "Ischemic cardiac diseases",
                    "Allergy",
                    "Bleeding disorder",
                    "Anticoagulant therapy",
                  ],
                },
                {
                  type: "text",
                  name: "anything else",
                  title:
                    "If any other diseases in history please specify here:",
                  isRequired: false,
                },
                {
                  type: "matrixdropdown",
                  name: "examination",
                  title: "Doctor's Examination",
                  columns: [
                    {
                      name: "answer",
                      title: "Please select",
                      choices: [
                        {
                          value: "yes",
                          text: "Yes",
                        },
                        {
                          value: "no",
                          text: "No",
                        },
                      ],
                      cellType: "radiogroup",
                      isRequired: false,
                    },
                    {
                      name: "year",
                      title: "Comments (If any)",
                      cellType: "text",
                      isRequired: false,
                      visibleIf: '{row.answer} = "yes"',
                    },
                  ],
                  choices: [1, 2, 3, 4, 5, 6, 7],
                  rows: [
                    "Decayed teeth",
                    "Filled teeth",
                    "Missing teeth",
                    "Calculus teeth",
                    "Mouth ulcers",
                    "Bad Breath",
                    "Fractured teeth",
                    "Mobile teeth",
                  ],
                },
                {
                  type: "text",
                  name: "anything else",
                  title: "Anything else?, please specify here:",
                  isRequired: false,
                },
                {
                  type: "matrixdropdown",
                  name: "habits",
                  title: "Habits of the Patient",
                  columns: [
                    {
                      name: "answer",
                      title: "Please select",
                      choices: [
                        {
                          value: "yes",
                          text: "Yes",
                        },
                        {
                          value: "no",
                          text: "No",
                        },
                      ],
                      cellType: "radiogroup",
                      isRequired: false,
                    },
                    {
                      name: "year",
                      title: "Comments (If any)",
                      cellType: "text",
                      isRequired: false,
                      visibleIf: '{row.answer} = "yes"',
                    },
                  ],
                  choices: [1, 2, 3, 4, 5],
                  rows: [
                    "Thumb sucking",
                    "Tongue Thrusting",
                    "Mouth breathing",
                    "bottle feeding",
                    "Nail biting",
                  ],
                },
                {
                  type: "text",
                  name: "anything else",
                  title: "Anything else?, please specify here:",
                  isRequired: false,
                },
              ],
              panelCount: 1,
              panelAddText: "Add Next Patient",
              panelRemoveText: "Remove This Patient",
            },
          ],
        },
        {
          navigationTitle: "Panel2",
          navigationDescription: "BBB",
          questions: [
            {
              type: "radiogroup",
              name: "price to competitors",
              title: "Compared to our competitors, do you feel the Product is",
              choices: [
                "Less expensive",
                "Priced about the same",
                "More expensive",
                "Not sure",
              ],
            },
            {
              type: "radiogroup",
              name: "price",
              title: "Do you feel our current price is merited by our product?",
              choices: [
                "correct|Yes, the price is about right",
                "low|No, the price is too low for your product",
                "high|No, the price is too high for your product",
              ],
            },
            {
              type: "multipletext",
              name: "pricelimit",
              title: "What is the... ",
              items: [
                {
                  name: "mostamount",
                  title:
                    "Most amount you would every pay for a product like ours",
                },
                {
                  name: "leastamount",
                  title: "The least amount you would feel comfortable paying",
                },
              ],
            },
          ],
        },
        {
          navigationTitle: "Panel3",
          navigationDescription: "CCC",
          questions: [
            {
              type: "matrix",
              name: "Quality",
              title:
                "Please indicate if you agree or disagree with the following statements",
              columns: [
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows: [
                {
                  value: "affordable",
                  text: "Product is affordable",
                },
                {
                  value: "does what it claims",
                  text: "Product does what it claims",
                },
                {
                  value: "better then others",
                  text: "Product is better than other products on the market",
                },
                {
                  value: "easy to use",
                  text: "Product is easy to use",
                },
              ],
            },
            {
              type: "rating",
              name: "satisfaction",
              title: "How satisfied are you with the Product?",
              isRequired: true,
              mininumRateDescription: "Not Satisfied",
              maximumRateDescription: "Completely satisfied",
            },
            {
              type: "rating",
              name: "recommend friends",
              visibleIf: "{satisfaction} > 3",
              title:
                "How likely are you to recommend the Product to a friend or co-worker?",
              mininumRateDescription: "Will not recommend",
              maximumRateDescription: "I will recommend",
            },
            {
              type: "comment",
              name: "suggestions",
              title: "What would make you more satisfied with the Product?",
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
