import { faArrowLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { updatePatientData, userLogout } from "./utils";
import { logout } from "./redux/actions";
import "./Styles/form.css";
import "./Styles/index.css";
import { Link } from "react-router-dom";
import Diagnosis from "./Table/Diagnosis";
import Mucosalesions from "./Table/Mucosalesions";
import Treatment from "./Table/Treatment";

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
						className='text-white hover:text-blue-400'
						size='lg'
					></FontAwesomeIcon>
				</Link>
				<span>
					<FontAwesomeIcon
					icon={faSignOutAlt}
					className="float-right text-blue-600 hover:text-blue-400"
					size="lg"
					onClick={() => userLogout().then(() => dispatch(logout()))}
					></FontAwesomeIcon>
				</span>
			</div>

			<form
				onSubmit={formik.handleSubmit}
				className='form-container shadow-md rounded p-10 mb-4 flex flex-col my-2'
			>
				<div className='text-center text-2xl'>
					<p className='font-black'>DOCTOR'S PORTAL</p>
				</div>
				
				<div className="text-center">
				<div className=''>
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
				</div>
			
				
				<div className="tab w-full overflow-hidden border-t">
				<input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"></input>
				<label className="block p-4 leading-normal cursor-pointer" for="tab-single-three">HABITS</label>
				<div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal text-center">
						<Diagnosis />
				</div>
				</div>
	
				<div className="tab w-full overflow-hidden border-t">
				<input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2"></input>
				<label className="block p-4 leading-normal cursor-pointer" for="tab-single-two">MEDICAL HISTORY</label>
				<div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
						<Mucosalesions/>
				</div>
				</div>

				<div className="tab w-full overflow-hidden border-t">
				<input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"></input>
				<label className="block p-4  leading-normal cursor-pointer" for="tab-single-one">TOOTH PROBLEM</label>
				<div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
						<Treatment />
				</div>
				</div>
			
							
					{/* <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
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
					</div> */}
		
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
