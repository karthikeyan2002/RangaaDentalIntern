import { faArrowLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Habits from "./Table/Habits";
import MedicalHistory from "./Table/MedicalHistory";
import ToothProblem from "./Table/Mucosalesions";
import { logout } from "./redux/actions";
import "./Styles/form.css";
import "./Styles/index.css";
import { updatePatientData, userLogout } from "./utils";

// let myRadios = document.getElementsByName('tabs2');
// let setCheck;
// let x = 0;
// for(x = 0; x < myRadios.length; x++){
//     myRadios[x].onclick = function(){
//         if(setCheck !== this){
//              setCheck = this;
//         }else{
//             this.checked = false;
//             setCheck = null;
//     }
//     };
// }
const validate = (values) => {};
const Formtwo = ({ pid }) => {
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
		<div className='form2'>
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

				<div className="tab w-full overflow-hidden border-t">
				<input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"></input>
				<label className="block p-4 leading-normal cursor-pointer" for="tab-single-three">HABITS</label>
				<div className="tab-content overflow-x-scroll border-l-2 bg-gray-100 border-indigo-500 leading-normal text-center">
						<Habits />
				</div>
				</div>
	
				<div className="tab w-full overflow-hidden border-t">
				<input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2"></input>
				<label className="block p-4 leading-normal cursor-pointer" for="tab-single-two">MEDICAL HISTORY</label>
				<div className="tab-content overflow-x-scroll border-l-2 bg-gray-100 border-indigo-500 leading-normal">
							<MedicalHistory />
				</div>
				</div>

				<div className="tab w-full overflow-hidden border-t">
				<input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"></input>
				<label className="block p-4  leading-normal cursor-pointer" for="tab-single-one">TOOTH PROBLEM</label>
				<div className="tab-content overflow-x-scroll border-l-2 bg-gray-100 border-indigo-500 leading-normal">
							<ToothProblem />
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
