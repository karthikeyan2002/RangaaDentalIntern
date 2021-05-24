import { faArrowLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { updatePatientData, userLogout } from "./utils";
import { logout } from "./redux/actions";
import "./Styles/form.css";
import "./Styles/index.css";
import { Link } from "react-router-dom";

const validate = (values) => {};

const Formthree = ({ pid }) => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {},
		validate,
		onSubmit: (values) => {
			updatePatientData(values, pid);
		},
	});
	return (
		<div className='form3'>
			<div className='mb-5'>
				<Link to='/'>
					<FontAwesomeIcon
						icon={faArrowLeft}
						className='text-white'
						size='lg'
					></FontAwesomeIcon>
				</Link>
				<div className='dropdown'>
					<span>
						<FontAwesomeIcon
							icon={faPowerOff}
							className='float-right text-white'
							size='lg'
						></FontAwesomeIcon>
					</span>
					<div className='dropdown-content'>
						<span
							href='#'
							onClick={() => userLogout().then(() => dispatch(logout()))}
						>
							Log out
						</span>
					</div>
				</div>
			</div>

			<form
				onSubmit={formik.handleSubmit}
				className='form-container shadow-md rounded p-10 mb-4 flex flex-col my-2'
			>
				<div className='text-center text-2xl'>
					<p className='font-black'>DOCTOR'S PORTAL</p>
				</div>
			
				<p className='font-black text-red-600 text-xl text-center'>DIAGNOSIS</p>
				<div className='-mx-4 md:flex mb-4'>
					<div className='overflow-auto md:overflow-scroll md:w-1/2 px-3 mb-6 md:mb-0'>
						<table className='table-auto'>
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
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
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
						<br />
						<p className='font-black text-red-600 text-center'>MUCOSAL LESIONS</p>
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
				</div>
				<p className='font-black text-red-600 text-xl text-center'>TREATMENT</p>
				<div className='-mx-4 md:flex mb-4'>
					<div className='overflow-auto md:overflow-scroll md:w-1/2 px-3 mb-6 md:mb-0'>
						<table className='table-auto'>
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
					</div>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
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
				</div>
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0 text-right'>
						
						<input
							id='dname'
							name='dname'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.dname}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder="Doctor's Name"
						/>
					</div>
							
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
					 <div className='ml-3 mt-2'>
						<label for="toggleB" className="ml-9 flex items-center cursor-pointer">
							<div className="relative">
							<input type="checkbox" id="toggleB" className="sr-only"></input>
							<div className="block bg-red-600 w-14 h-8 rounded-full"></div>
							<div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
							</div>
							<div className="ml-3 text-gray-700 font-medium">
							Completed !
							</div>
						</label>
						</div>
					</div>
				</div>
				<div className='text-center'><button
					type='submit'
					className='bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase w-1/7 hover:bg-gray-600 border-none tracking-wider'
				>
					SUBMIT
				</button></div>
			</form>
		</div>
	);
};

export default React.memo(Formthree);
