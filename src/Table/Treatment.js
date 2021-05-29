import React from 'react'
import { useFormik } from "formik";
import { updatePatientData } from "../utils";

const validate = (values) => {};

const Treatment  = ({ pid }) => {
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
									<th className='px-4 py-2'>TREATMENT PAIN</th>
									<th className='px-4 py-2'>11-18</th>
									<th className='px-4 py-2'>21-28</th>
									<th className='px-4 py-2'>31-38</th>
									<th className='px-4 py-2'>41-48</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border px-4 py-2'>Extraction</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Extraction'
											value='11'
											checked={formik.values.Extraction === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Extraction'
											value='22'
											checked={formik.values.Extraction === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Extraction'
											value='33'
											checked={formik.values.Extraction === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Extraction'
											value='44'
											checked={formik.values.Extraction === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Restoration</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Restoration'
											value='11'
											checked={formik.values.Restoration === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Restoration'
											value='22'
											checked={formik.values.Restoration === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Restoration'
											value='33'
											checked={formik.values.Restoration === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Restoration'
											value='44'
											checked={formik.values.Restoration === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Root canal treatment</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Root'
											value='11'
											checked={formik.values.Root === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Root'
											value='22'
											checked={formik.values.Root === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Root'
											value='33'
											checked={formik.values.Root === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Root'
											value='44'
											checked={formik.values.Root === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
                        <table className='table-auto w-full'>
							<thead>
								<tr className='text-black hover:text-blue-700'>
									<th className='px-4 py-2'>Treatment</th>
									<th className='px-4 py-2'>Yes</th>
									<th className='px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border px-4 py-2'>Bleaching</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Bleaching'
											value='yes'
											checked={formik.values.Bleaching === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Bleaching'
											value='no'
											checked={formik.values.Bleaching === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Oral prophylaxis</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Oral'
											value='yes'
											checked={formik.values.Oral === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Oral'
											value='no'
											checked={formik.values.Oral === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
        </div>
    )
}

export default Treatment
