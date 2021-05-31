import { faArrowLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePatientData, userLogout } from "./utils";
import { logout } from "./redux/actions";
import "./Styles/form.css";
import "./Styles/index.css";
import { Link } from "react-router-dom";
import Diagnosis from "./Table/Diagnosis";
import Mucosalesions from "./Table/Mucosalesions";
import Treatment from "./Table/Treatment";
import classnames from "classnames";

const validate = (values) => {};

const Formthree = ({ pid }) => {
	const [open, setOpen] = useState(false);
	const [openTwo, setOpenTwo] = useState(false);
	const [openThree, setOpenThree] = useState(false);
	const [openFour, setOpenFour] = useState(false);
	console.log(open, openTwo, openThree);
	const accordion = classnames(
		"border-l-2",
		"bg-gray-100",
		"border-indigo-500",
		"leading-normal",
		"transition",
		"duration-300",
		"ease-in-out",
		"justify-center",
		"p-0",
		"h-0",
		{ "opacity-0": !open, "opacity-1 h-auto p-10": open }
	);
	const accordionTwo = classnames(
		"border-l-2",
		"bg-gray-100",
		"border-indigo-500",
		"leading-normal",
		"transition",
		"duration-300",
		"ease-in-out",
		"p-0",
		"h-0",
		{ "opacity-0": !openTwo, "opacity-1 h-auto p-10": openTwo }
	);

	const accordionThree = classnames(
		"border-l-2",
		"bg-gray-100",
		"border-indigo-500",
		"leading-normal",
		"transition",
		"duration-300",
		"ease-in-out",
		"p-0",
		"h-0",
		{ "opacity-0": !openThree, "opacity-1 h-auto p-10": openThree }
	);

	const accordionFour = classnames(
		"border-l-2",
		"bg-gray-100",
		"border-indigo-500",
		"leading-normal",
		"transition",
		"duration-300",
		"ease-in-out",
		"p-0",
		"h-0",
		{ "opacity-0": !openFour, "opacity-1 h-auto p-10": openFour }
	);
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
						className='float-right text-blue-600 hover:text-blue-400'
						size='lg'
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

				<div className='text-center'>
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

				<div className='tab w-full overflow-hidden border-t'>
					<span
						className='block p-4 leading-normal cursor-pointer'
						for='tab-single-three'
						onClick={() => setOpen((open) => !open)}
					>
						HABITS
					</span>
					<div className={accordion}>
						<Diagnosis />
					</div>
				</div>

				<div className='tab w-full overflow-hidden border-t'>
					<span
						className='block p-4 leading-normal cursor-pointer'
						for='tab-single-two'
						onClick={() => setOpenTwo((openTwo) => !openTwo)}
					>
						MEDICAL HISTORY
					</span>
					<div className={accordionTwo}>
						<Mucosalesions />
					</div>
				</div>

				<div className='tab w-full overflow-hidden border-t'>
					<span
						className='block p-4  leading-normal cursor-pointer'
						for='tab-single-one'
						onClick={() => setOpenThree((openThree) => !openThree)}
					>
						TOOTH PROBLEM
					</span>
					<div className={accordionThree}>
						<Treatment />
					</div>
				</div>

				<div className='tab w-full overflow-hidden border-t'>
					<span
						className='block p-4 leading-normal cursor-pointer'
						for='tab-single-four'
						onClick={() => setOpenFour((open) => !open)}
					>
						Comments
					</span>
					<div className={accordionFour}>
						<textarea
							class='resize border rounded-md w-full'
							placeholder='Type your message here ..'
						></textarea>
					</div>
				</div>
			</form>
		</div>
	);
};

export default React.memo(Formthree);
