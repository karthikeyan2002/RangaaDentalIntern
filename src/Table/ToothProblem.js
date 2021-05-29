import React from 'react';
import { updatePatientData } from "../utils";
import { useFormik } from "formik";


const validate = (values) => {};

const ToothProblem = ({ pid }) => {
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
									<th className='px-4 py-2'>Yes</th>
									<th className='px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border px-4 py-2'>Calculus</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Calculus'
											value='yes'
											checked={formik.values.Calculus === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Calculus'
											value='no'
											checked={formik.values.Calculus === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Mouth Ulcers</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Ulcers'
											value='yes'
											checked={formik.values.Ulcers === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Ulcers'
											value='no'
											checked={formik.values.Ulcers === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Bad Breath</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Breath'
											value='yes'
											checked={formik.values.Breath === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Breath'
											value='no'
											checked={formik.values.Breath === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>U/L edentulous</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='edentulous'
											value='yes'
											checked={formik.values.edentulous === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='edentulous'
											value='no'
											checked={formik.values.edentulous === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Malocclusion</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Malocclusion'
											value='yes'
											checked={formik.values.Malocclusion === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Malocclusion'
											value='no'
											checked={formik.values.Malocclusion === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Stains and Calculus</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Stains'
											value='yes'
											checked={formik.values.Stains === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Stains'
											value='no'
											checked={formik.values.Stains === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Periondontitis</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Periondontitis'
											value='yes'
											checked={formik.values.Periondontitis === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Periondontitis'
											value='no'
											checked={formik.values.Periondontitis === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Gingivitis</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Gingivitis'
											value='yes'
											checked={formik.values.Gingivitis === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Gingivitis'
											value='no'
											checked={formik.values.Gingivitis === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Orofacial pain</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Orofacial'
											value='yes'
											checked={formik.values.Orofacial === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Orofacial'
											value='no'
											checked={formik.values.Orofacial === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>

        </div>
    )
}

export default ToothProblem
