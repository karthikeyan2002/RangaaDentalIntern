const Json = {
  progressBarType: "buttons",
  showProgressBar: "top",
  pages: [
    {
      navigationTitle: "Personal Details",
      navigationDescription: "Confidential",

      questions: [
        {
          type: "paneldynamic",
          name: "panel1",
          title: "Please Enter Details",
          renderMode: "progressTop",
          templateTitle: "About: {panel.relativeType}",
          templateElements: [
            {
              name: "Name",
              type: "text",
              title: "Name",
              isRequired: true,
            },
            {
              name: "Gender",
              type: "radiogroup",
              title: "Gender",
              startWithNewLine: false,
              isRequired: true,
              colCount: 0,
              choices: ["Male", "Female", "Others"],
            },
            {
              name: "Age",
              type: "text",
              title: "Age",
              isRequired: true,
              startWithNewLine: false,
            },
            {
              type: "text",
              name: "phone",
              title: "Mobile Number:",
              isRequired: true,
            },
            {
              type: "text",
              name: "email",
              title: "Please enter your e-mail",
              isRequired: true,
              validators: [
                  {
                      type: "email"
                  }
              ]
            },
            {
              name: "complaints",
              type: "text",
              title: "Complaints of the Patient",
              isRequired: false,
            },
            {
              name: "allergic to",
              type: "text",
              title: "Patient Allergic to",
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
      navigationTitle: "Medical History",
      navigationDescription: "By Doctor",
      questions: [
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
          name: "anything else1",
          title: "If any other diseases in history please specify here:",
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
          name: "anything else3",
          title: "Anything else?, please specify here:",
          isRequired: false,
        },
          ],
        },
    {
      navigationTitle: "Diagnosis",
      navigationDescription: "By Doctor",
      questions: [
        {
          type: "matrix",
          name: "diagnosis",
          title: "Diagnosis",
          columns: [
            {
              value: 1,
              text: "Yes",
            },
            {
              value: 0,
              text: "No",
            },
          ],
          rows: [
            {
              value: "caries",
              text: "Dental caries",
            },
            {
              value: "caries with",
              text: "Caries with apical periondontities",
            },
            {
              value: "abscess",
              text: "Periapical abscess",
            },
            {
              value: "Attrition",
              text: "Attrition",
            },
            {
              value: "abrasion",
              text: "Abrasion / abfraction",
            },
            {
              value: "root stumps",
              text: "Infected root stumps",
            },
            {
              value: "impacted tooth",
              text: "Impacted tooth",
            },
            {
              value: "Retained",
              text: "Retained deciduous teeth",
            },
            {
              value: "UL",
              text: "U/L edentulous",
            },
            {
              value: "maloc",
              text: "Malocclusion",
            },
            {
              value: "stains",
              text: "Stains and Calculus",
            },
            {
              value: "periondon",
              text: "Periondontitis",
            },
            {
              value: "gingi",
              text: "Gingivitis",
            },
          ],
        },
        {
          type: "text",
          name: "anything else3",
          title: "Anything else?, please specify here:",
          isRequired: false,
        },
        {
          type: "matrix",
          name: "mucosal lesions",
          title: "Mucosal Lesions",
          columns: [
            {
              value: 1,
              text: "Yes",
            },
            {
              value: 0,
              text: "No",
            },
          ],
          rows: [
            {
              value: "Lichen",
              text: "Lichen Planes",
            },
            {
              value: "Leukoplakiat",
              text: "Leukoplakiat",
            },
            {
              value: "others",
              text: "Others",
            },
          ],
        },
        {
          type: "text",
          name: "Orofacial pain",
          title: "Orofacial pain",
          isRequired: false,
        },
      ],
    },
    {
      navigationTitle: "Treatment",
      navigationDescription: "By Doctor",
      questions: [
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
          name: "anything else2",
          title: "Anything else?, please specify here:",
          isRequired: false,
        },
        {
          type: "matrix",
          name: "Treatment Pain",
          title: "Treatment Pain",
          columns: [
            {
              value: 1,
              text: "Yes",
            },
            {
              value: 0,
              text: "No",
            },
          ],
          rows: [
            {
              value: "Oral p",
              text: "Oral prophylaxis",
            },
            {
              value: "Extraction",
              text: "Extraction",
            },
            {
              value: "Restoration",
              text: "Restoration",
            },
            {
              value: "Rootcanal",
              text: "Root canal treatment",
            },
            {
              value: "Bleaching",
              text: "Bleaching",
            },
          ],
        },
        {
          type: "comment",
          name: "Anything else4",
          title: "Anything else or comments to specify?",
        },
      ],
    },
  ],
};
export default Json;
