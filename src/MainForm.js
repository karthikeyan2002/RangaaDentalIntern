import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	  },
	  
	textField: {
    width: "100%",
  },
}));

function MainForm() {
  const classes = useStyles();
  return (
    <div className="Container">
      <Formik 
        className={classes.root}
        initialValues={{
          name: "",
          age: "",
          gender: "",
          mobileNumber: "",
          email: "",
          complaints: "",
          allergy: "",
          medicalHistory: {
            diabetes: "",
            hypertension: "",
            epilepsy: "",
            cardiac: "",
            allergy: "",
            bleeding: "",
            anticogulant: "",
          },
          otherDisease: null,
          habits: {
            thumb: "",
            tongue: "",
            mouth: "",
            bottle: "",
            nail: "",
          },
          comments1: "",
          diagnosis: {
            caries: "",
            apicalPeriondontities: "",
            abscess: "",
            attrition: "",
            abrasion: "",
            stumps: "",
            impactedTooth: "",
            deciduous: "",
            edntulous: "",
            malocclusion: "",
            stains: "",
            periondontities: "",
            gingivitis: "",
          },
          comments2: "",
          mucosal: {
            lichen: "",
            leukoplakiat: "",
            others: "",
          },
          orofacial: "",
          examination: {
            decayed: "",
            filled: "",
            missing: "",
            calculus: "",
            ulcer: "",
            breath: "",
            fractured: "",
            mobile: "",
          },
          comments3: "",
          treatmentPain: {
            prophylaxis: "",
            extraction: "",
            restoration: "",
            root: "",
            bleaching: "",
          },
          comments4: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <table>
            <tdata>
              <tr>
                <td>
                  <TextField
                    className={classes.textField}
                    type="text"
                    name="name"
                    label="Name"
                  />
                </td>
				<br />
                <td>
                  <TextField
                    name="age"
                    label="Age"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </td>
                <td>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1">
                      <FormControlLabel
                        name="gender"
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        name="gender"
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        name="gender"
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    type="text"
                    name="mobileNumber"
                    label="Mobile Number"
                    className={classes.textField}
                  />
                </td>
                <br />
                <td>
                  <TextField
                    id="email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    label="E-Mail ID"
                  />
                </td>
              </tr>
              <h2>Medical History</h2>
              <br />
              <h4>Diabetes</h4>
              <br />
              <label>
                Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.diabetes"
                  value="Under Medication"
                ></Field>
              </label>
              <label>
                Not Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.diabetes"
                  value="Not Under Medication"
                ></Field>
              </label>
              <label>
                Unknown
                <Field
                  type="radio"
                  name="medicalHistory.diabetes"
                  value="Unknown"
                ></Field>
              </label>
              <br />

              <h4>Hypertension</h4>
              <br />

              <label>
                Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.hypertension"
                  value="Under Medication"
                ></Field>
              </label>
              <label>
                Not Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.hypertension"
                  value="Not Under Medication"
                ></Field>
              </label>
              <label>
                Unknown
                <Field
                  type="radio"
                  name="medicalHistory.hypertension"
                  value="Unknown"
                ></Field>
              </label>
              <br />

              <h4>Epilepsy</h4>
              <br />

              <label>
                Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.epilepsy"
                  value="Under Medication"
                ></Field>
              </label>
              <label>
                Not Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.epilepsy"
                  value="Not Under Medication"
                ></Field>
              </label>
              <label>
                Unknown
                <Field
                  type="radio"
                  name="medicalHistory.epilepsy"
                  value="Unknown"
                ></Field>
              </label>
              <br />

              <h4>Ischemic cardiac diseases </h4>
              <br />

              <label>
                Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.cardiac"
                  value="Under Medication"
                ></Field>
              </label>
              <label>
                Not Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.cardiac"
                  value="Not Under Medication"
                ></Field>
              </label>
              <label>
                Unknown
                <Field
                  type="radio"
                  name="medicalHistory.cardiac"
                  value="Unknown"
                ></Field>
              </label>
              <br />

              <h4>Allergy</h4>
              <br />

              <label>
                Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.allergy"
                  value="Under Medication"
                ></Field>
              </label>
              <label>
                Not Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.allergy"
                  value="Not Under Medication"
                ></Field>
              </label>
              <label>
                Unknown
                <Field
                  type="radio"
                  name="medicalHistory.allergy"
                  value="Unknown"
                ></Field>
              </label>
              <br />

              <h4>Bleeding Disorder</h4>
              <br />

              <label>
                Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.bleeding"
                  value="Under Medication"
                ></Field>
              </label>
              <label>
                Not Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.bleeding"
                  value="Not Under Medication"
                ></Field>
              </label>
              <label>
                Unknown
                <Field
                  type="radio"
                  name="medicalHistory.bleeding"
                  value="Unknown"
                ></Field>
              </label>
              <br />

              <h4>Anti-Cogulant</h4>
              <br />

              <label>
                Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.anticogulant"
                  value="Under Medication"
                ></Field>
              </label>
              <label>
                Not Under Medication
                <Field
                  type="radio"
                  name="medicalHistory.anticogulant"
                  value="Not Under Medication"
                ></Field>
              </label>
              <label>
                Unknown
                <Field
                  type="radio"
                  name="medicalHistory.anticogulant"
                  value="Unknown"
                ></Field>
              </label>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </tdata>
          </table>
        </Form>
      </Formik>
    </div>
  );
}

export default MainForm;
