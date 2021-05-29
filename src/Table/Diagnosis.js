import React from 'react';
import { useFormik } from "formik";
import { updatePatientData } from "../utils";

const validate = (values) => {};

const Diagnosis = ({ pid }) => {
	const formik = useFormik({
		initialValues: {},
		validate,
		onSubmit: (values) => {
			updatePatientData(values, pid);
		},
	});
    return (
        <div>
            <table className='table-auto w-full'>
							<thead>
								<tr className='text-black hover:text-blue-700'>
									<th className='px-4 py-2'>Tooth Problem</th>
									<th className='px-4 py-2'>11-18</th>
									<th className='px-4 py-2'>21-28</th>
									<th className='px-4 py-2'>31-38</th>
									<th className='px-4 py-2'>41-48</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border px-4 py-2'>Decayed</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Decayed'
											value='11'
											checked={formik.values.Decayed === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Decayed'
											value='22'
											checked={formik.values.Decayed === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Decayed'
											value='33'
											checked={formik.values.Decayed === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Decayed'
											value='44'
											checked={formik.values.Decayed === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Filled</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Filled'
											value='11'
											checked={formik.values.Filled === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Filled'
											value='22'
											checked={formik.values.Filled === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Filled'
											value='33'
											checked={formik.values.Filled === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Filled'
											value='44'
											checked={formik.values.Filled === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Missing</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Missing'
											value='11'
											checked={formik.values.Missing === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Missing'
											value='22'
											checked={formik.values.Missing === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Missing'
											value='33'
											checked={formik.values.Missing === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Missing'
											value='44'
											checked={formik.values.Missing === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Fractured</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Fractured'
											value='11'
											checked={formik.values.Fractured === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Fractured'
											value='22'
											checked={formik.values.Fractured === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Fractured'
											value='33'
											checked={formik.values.Fractured === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Fractured'
											value='44'
											checked={formik.values.Fractured === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Mobile</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Mobile'
											value='11'
											checked={formik.values.Mobile === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Mobile'
											value='22'
											checked={formik.values.Mobile === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Mobile'
											value='33'
											checked={formik.values.Mobile === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Mobile'
											value='44'
											checked={formik.values.Mobile === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Dental Caries</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Caries'
											value='11'
											checked={formik.values.Caries === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Caries'
											value='22'
											checked={formik.values.Caries === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Caries'
											value='33'
											checked={formik.values.Caries === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Caries'
											value='44'
											checked={formik.values.Caries === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>
										Caries with apical periondontities
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='apical'
											value='11'
											checked={formik.values.apical === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='apical'
											value='22'
											checked={formik.values.apical === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='apical'
											value='33'
											checked={formik.values.apical === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='apical'
											value='44'
											checked={formik.values.apical === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Periapical abscess</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Periapical'
											value='11'
											checked={formik.values.Periapical === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Periapical'
											value='22'
											checked={formik.values.Periapical === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Periapical'
											value='33'
											checked={formik.values.Periapical === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Periapical'
											value='44'
											checked={formik.values.Periapical === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Attrition</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Attrition'
											value='11'
											checked={formik.values.Attrition === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Attrition'
											value='22'
											checked={formik.values.Attrition === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Attrition'
											value='33'
											checked={formik.values.Attrition === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Attrition'
											value='44'
											checked={formik.values.Attrition === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Abrasion / abfraction</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Abrasion'
											value='11'
											checked={formik.values.Abrasion === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Abrasion'
											value='22'
											checked={formik.values.Abrasion === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Abrasion'
											value='33'
											checked={formik.values.Abrasion === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Abrasion'
											value='44'
											checked={formik.values.Abrasion === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Infected root stumps</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='stumps'
											value='11'
											checked={formik.values.stumps === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='stumps'
											value='22'
											checked={formik.values.stumps === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='stumps'
											value='33'
											checked={formik.values.stumps === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='stumps'
											value='44'
											checked={formik.values.stumps === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Impacted tooth</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Impacted'
											value='11'
											checked={formik.values.Impacted === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Impacted'
											value='22'
											checked={formik.values.Impacted === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Impacted'
											value='33'
											checked={formik.values.Impacted === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Impacted'
											value='44'
											checked={formik.values.Impacted === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Retained deciduous teeth</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Retained'
											value='11'
											checked={formik.values.Retained === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Retained'
											value='22'
											checked={formik.values.Retained === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Retained'
											value='33'
											checked={formik.values.Retained === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Retained'
											value='44'
											checked={formik.values.Retained === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
        </div>
    )
}

export default Diagnosis
