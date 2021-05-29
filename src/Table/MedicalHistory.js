import { useFormik } from "formik";
import React from 'react';
import { useSelector } from "react-redux";
import { updatePatientData } from "../utils";

const validate = (values) => {};

const MedicalHistory= ({ pid }) => {
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
              <table className='table-center border-collapse border border-green-800 w-full'>
							<thead className=' border border-green-600 '>
								<tr className='text-black text-center'>
									<th className='w-1/2 px-2 py-2'>Habit</th>
									<th className='w-1/4 px-2 py-2'>Yes</th>
									<th className='w-1/4 px-2 py-2'>No</th>
								</tr>
							</thead>
							<tbody className='text-center'>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>Nail biting</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='biting'
											value='yes'
											checked={formik.values.biting === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='biting'
											value='no'
											checked={formik.values.biting === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>bottle feeding</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bottle'
											value='yes'
											checked={formik.values.bottle === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bottle'
											value='no'
											checked={formik.values.bottle === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>Thumb sucking</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='thumb'
											value='yes'
											checked={formik.values.thumb === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='thumb'
											value='no'
											checked={formik.values.thumb === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>
										Tongue Thrusting
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='tongue'
											value='yes'
											checked={formik.values.tongue === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='tongue'
											value='no'
											checked={formik.values.tongue === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>Mouth breathing</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='mouth'
											value='yes'
											checked={formik.values.mouth === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='mouth'
											value='no'
											checked={formik.values.mouth === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
        </div>
    )
}

export default MedicalHistory
