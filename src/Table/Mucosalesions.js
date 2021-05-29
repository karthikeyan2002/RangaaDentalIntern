import React from 'react'
import { useFormik } from "formik";
import { updatePatientData } from "../utils";

const validate = (values) => {};

const  Mucosalesions= ({ pid }) => {
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
									<th className='px-4 py-2'></th>
									<th className='px-4 py-2'>Yes</th>
									<th className='px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border px-4 py-2'>Lichen Planes</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Lichen'
											value='yes'
											checked={formik.values.Lichen === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Lichen'
											value='no'
											checked={formik.values.Lichen === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-4 py-2'>Leukoplakiat</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Leukoplakiat'
											value='yes'
											checked={formik.values.Leukoplakiat === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-4 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='Leukoplakiat'
											value='no'
											checked={formik.values.Leukoplakiat === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
        </div>
    )
}

export default Mucosalesions
