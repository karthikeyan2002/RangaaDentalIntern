import { useFormik } from "formik";
import React from 'react';
import { useSelector } from "react-redux";
import { updatePatientData } from "../utils";

const validate = (values) => {};

const Habits = ({ pid }) => {
	
	const state = useSelector((state) => state.state);
	console.log(state);
	const formik = useFormik({
		initialValues: {
			pid: "",
			biting: "",
			bottle: "",
			thumb: "",
			tongue: "",
			mouth: "",
			allergy: "",
			diabetes: "",
			hypertension: "",
			bleeding: "",
			anticoagulant: "",
			cardiac: "",
		},
		validate,
		onSubmit: (values) => {
			updatePatientData(values, pid);
		},
	});

    return (
        <div>
              <table className="w-full">
							<thead className='border border-green-600 text-center px-3'>
								<tr class='text-black'>
									<th class='px-2 py-2'>Name of the Disease</th>
									<th class='px-2 py-2'>Under Medication</th>
									<th class='px-2 py-2'>Not under Medication</th>
									<th class='px-2 py-2'>Unknown</th>
								</tr>
							</thead>
							<tbody className='text-center border'>
								<tr>
									<td className='border px-2 py-2 text-left'>Allergy</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='allergy'
											value='undermed'
											checked={formik.values.allergy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='allergy'
											value='notundermed'
											checked={formik.values.allergy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='allergy'
											value='unknown'
											checked={formik.values.allergy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>Diabetes</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='diabetes'
											value='undermed'
											checked={formik.values.diabetes === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='diabetes'
											value='notundermed'
											checked={formik.values.diabetes === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='diabetes'
											value='unknown'
											checked={formik.values.diabetes === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>Epilepsy</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='epilepsy'
											value='undermed'
											checked={formik.values.epilepsy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='epilepsy'
											value='notundermed'
											checked={formik.values.epilepsy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='epilepsy'
											value='unknown'
											checked={formik.values.epilepsy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>Hypertension</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='hypertension'
											value='undermed'
											checked={formik.values.hypertension === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='hypertension'
											value='notundermed'
											checked={formik.values.hypertension === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='hypertension'
											value='unknown'
											checked={formik.values.hypertension === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>
										Bleeding disorder
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bleeding'
											value='undermed'
											checked={formik.values.bleeding === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bleeding'
											value='notundermed'
											checked={formik.values.bleeding === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bleeding'
											value='unknown'
											checked={formik.values.bleeding === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>
										Anticoagulant therapy
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='anticoagulant'
											value='undermed'
											checked={formik.values.anticoagulant === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='anticoagulant'
											value='notundermed'
											checked={formik.values.anticoagulant === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='anticoagulant'
											value='unknown'
											checked={formik.values.anticoagulant === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>
										Ischemic cardiac diseases
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='cardiac'
											value='undermed'
											checked={formik.values.cardiac === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='cardiac'
											value='notundermed'
											checked={formik.values.cardiac === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='cardiac'
											value='unknown'
											checked={formik.values.cardiac === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
        </div>
    )
}

export default Habits
