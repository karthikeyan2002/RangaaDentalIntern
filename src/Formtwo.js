import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const validate = (values) => {};

const Formtwo = () => {
	const formik = useFormik({
		initialValues: {},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className='form2'>
			<div className='mb-5'>
				<FontAwesomeIcon
					icon={faArrowLeft}
					className='text-blue-200'
					size='lg'
				></FontAwesomeIcon>
				<FontAwesomeIcon
					icon={faPowerOff}
					className='float-right text-white'
					size='lg'
				></FontAwesomeIcon>
			</div>

			<form
				onSubmit={formik.handleSubmit}
				className='form-container shadow-md rounded p-10 mb-4 flex flex-col my-2'
			>
				<div class='text-center text-2xl'>
					<p class='font-black'>NURSE DATA ENTRY</p>
				</div>
				<div className='md:w-full px-3 mb-6 md:mb-0'>
					<label className='font-black text-red-600'>PATIENT ID</label>
					<input
						id='pid'
						name='pid'
						type='text'
						onChange={formik.handleChange}
						value={formik.values.pid}
						className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
						placeholder='Patient ID'
					/>
				</div>
				<br />
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/4 px-3 mb-6 md:mb-0'>
						<p class='font-black text-red-600 text-center'>
							HABITS OF THE PATIENT
						</p>
						<table class='table-fixed'>
							<thead>
								<tr class='text-black hover:text-blue-700 '>
									<th class='w-1/2 px-4 py-2'>Habit</th>
									<th class='w-1/4 px-4 py-2'>Yes</th>
									<th class='w-1/4 px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='w-1/2 px-4 py-2'>Nail biting</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='biting'
											value='yes'
											checked={formik.values.biting === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='biting'
											value='no'
											checked={formik.values.biting === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>bottle feeding</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bottle'
											value='yes'
											checked={formik.values.bottle === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bottle'
											value='no'
											checked={formik.values.bottle === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>Thumb sucking</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Thumb'
											value='yes'
											checked={formik.values.Thumb === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Thumb'
											value='no'
											checked={formik.values.Thumb === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>Tongue Thrusting</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Tongue'
											value='yes'
											checked={formik.values.Tongue === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Tongue'
											value='no'
											checked={formik.values.Tongue === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>Mouth breathing</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Mouth'
											value='yes'
											checked={formik.values.Mouth === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Mouth'
											value='no'
											checked={formik.values.Mouth === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='md:w-3/4 px-3 mb-6 md:mb-0'>
						<p class='font-black text-red-600 text-center'>
							MEDICAL HISTORY OF THE PATIENT
						</p>
						<table class='table-auto'>
							<thead>
								<tr class='text-black hover:text-blue-700'>
									<th class='px-4 py-2'>Name of the Disease</th>
									<th class='px-4 py-2'>Under medication</th>
									<th class='px-4 py-2'>Not under medication</th>
									<th class='px-4 py-2'>Unknown</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='border px-4 py-2'>Allergy</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Allergy'
											value='undermed'
											checked={formik.values.Allergy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Allergy'
											value='notundermed'
											checked={formik.values.Allergy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Allergy'
											value='unknown'
											checked={formik.values.Allergy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Diabetes</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='diabetes'
											value='undermed'
											checked={formik.values.diabetes === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='diabetes'
											value='notundermed'
											checked={formik.values.diabetes === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='diabetes'
											value='unknown'
											checked={formik.values.diabetes === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Epilepsy</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Epilepsy'
											value='undermed'
											checked={formik.values.Epilepsy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Epilepsy'
											value='notundermed'
											checked={formik.values.Epilepsy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Epilepsy'
											value='unknown'
											checked={formik.values.Epilepsy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Hypertension</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='hypertension'
											value='undermed'
											checked={formik.values.hypertension === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='hypertension'
											value='notundermed'
											checked={formik.values.hypertension === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='hypertension'
											value='unknown'
											checked={formik.values.hypertension === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Bleeding disorder</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Bleeding'
											value='undermed'
											checked={formik.values.Bleeding === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Bleeding'
											value='notundermed'
											checked={formik.values.Bleeding === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Bleeding'
											value='unknown'
											checked={formik.values.Bleeding === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Anticoagulant therapy</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Anticoagulant'
											value='undermed'
											checked={formik.values.Anticoagulant === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Anticoagulant'
											value='notundermed'
											checked={formik.values.Anticoagulant === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Anticoagulant'
											value='unknown'
											checked={formik.values.Anticoagulant === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Ischemic cardiac diseases</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='cardiac'
											value='undermed'
											checked={formik.values.cardiac === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='cardiac'
											value='notundermed'
											checked={formik.values.cardiac === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
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
				</div>
				<div className='-mx-4 md:flex mb-4 text-center'>
					<div className='md:w-full px-3 mb-6 md:mb-0'>
						<label className='font-black text-red-600' for='grid-city'>
							COMMENTS IF ANY
						</label>
						<textarea
							className='appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 resize border rounded-md mb-2'
							name='comments'
							placeholder='Type your comments here ... '
							value={formik.values.comments}
							onChange={formik.handleChange}
						></textarea>
					</div>
				</div>
				<button
					type='submit'
					class='bg-gray-700 text-white font-bold py-2 px-4 hover:bg-gray-600 rounded uppercase'
				>
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default Formtwo;
