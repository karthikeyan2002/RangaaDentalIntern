import { faArrowLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "./redux/actions";
import "./Styles/form.css";
import "./Styles/index.css";
import Habits from "./Table/Habits";
import MedicalHistory from "./Table/MedicalHistory";
import Mucosalesions from "./Table/Mucosalesions";
import { updatePatientData, userLogout } from "./utils";

const validate = (values) => {};
const Formtwo = ({ pid }) => {
	const [open, setOpen] = useState(false);
	const [openTwo, setOpenTwo] = useState(false);
	const [openThree, setOpenThree] = useState(false);
	console.log(open, openTwo);
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
	const dispatch = useDispatch();
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
		<div className='form2 h-screen'>
			<div className='mb-12 mt-2'>
				<Link to='/'>
					<FontAwesomeIcon
						icon={faArrowLeft}
						className='text-blue-600 float-left hover:text-blue-400'
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
				<div className='tab w-full overflow-hidden border-t transition-all duration-300 ease-in-out justify-center'>
					<span
						className='block p-5 leading-normal cursor-pointer'
						for='tab-single-three'
						onClick={() => setOpen((open) => !open)}
					>
						HABITS
					</span>
					<div className={accordion}>
						<Habits />
					</div>
				</div>

				<div className='tab w-full overflow-hidden border-t'>
					<span
						className='block p-5 leading-normal cursor-pointer'
						for='tab-single-two'
						onClick={() => setOpenTwo((openTwo) => !openTwo)}
					>
						MEDICAL HISTORY
					</span>
					<div className={accordionTwo}>
						<MedicalHistory />
					</div>
				</div>
				<div className='tab w-full overflow-hidden border-t'>
					<span
						className='block p-5 leading-normal cursor-pointer'
						for='tab-single-two'
						onClick={() => setOpenThree((openThree) => !openThree)}
					>
						{"Mucosalesions".toUpperCase()}
					</span>
					<div className={accordionThree}>
						<Mucosalesions />
					</div>
				</div>

				<div className='text-center'>
					<button
						type='submit'
						className='bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase w-1/7 hover:bg-gray-600 border-none tracking-wider mt-3'
					>
						submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default React.memo(Formtwo);
