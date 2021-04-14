import React from "react";
import { Formik, Field } from "formik";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-grid-system";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "60%",
  },
  textField1: {
    width: "99%",
  },
}));

function MainForm() {
  const classes = useStyles();
  return (
    <div className="Container">
      <Container fluid>
        <Formik
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
          <form>
            <h2 align="center">Patient Registration Form</h2>
            <br />
            <Row style={{ height: "65px" }} debug>
              <Col md={8} debug>
                <TextField
                  className={classes.textField}
                  type="text"
                  name="name"
                  label="Name"
                />
              </Col>
              <Col md={4} debug>
                <TextField
                  name="age"
                  label="Age"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row style={{ height: "65px" }} debug>
              <Col xs={8} debug>
                <TextField
                  type="text"
                  name="mobileNumber"
                  label="Mobile Number"
                  className={classes.textField}
                />
                <br />
                <br />
                <TextField
                  id="email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  label="E-Mail ID"
                />
              </Col>
              <Col xs={4} debug>
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
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row style={{ height: "65px" }} debug>
              <Col debug>
                <TextField
                  type="text"
                  name="allergy"
                  label="You're allergic To..."
                  className={classes.textField1}
                />
              </Col>
            </Row>
            <br />
            <Row style={{ height: "80px" }} debug>
              <Col xs={12} debug>
                <TextField
                  className={classes.textField1}
                  name="complaints"
                  id="standard-textarea"
                  label="Describe your Problem here!"
                  placeholder="Placeholder"
                  multiline
                />
              </Col>
            </Row>
            <br />
            {/* <h2>Medical History</h2>
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
            </label> */}
            <br />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Done!
            </Button>
          </form>
        </Formik>
      </Container>
    </div>
  );
}

export default MainForm;
