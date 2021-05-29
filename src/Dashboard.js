/* eslint-disable jsx-a11y/anchor-is-valid */
import {
	faSignOutAlt,
	// faBars,
	faSearch,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { logout } from "./redux/actions";
import "./Styles/Dashboard.css";
import "./Styles/index.css";
import Table from "./Table";
import { getPatients, userLogout } from "./utils/index";

function Dashboard() {
	const dispatch = useDispatch();
	const [patients, setPatients] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	useEffect(() => {
		getPatients()
			.then((res) => setPatients(res))
			.catch((err) => console.log(err));
	}, []);
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = patients.slice(indexOfFirstPost, indexOfLastPost);
	return (
		<>
			<div className='navbar'>
				<h3 className='text-center m-auto text-white'>PATIENT DETAILS</h3>
			<span className="float-right">
				<FontAwesomeIcon
				icon={faSignOutAlt}
				size="lg"
				onClick={() => userLogout().then(() => dispatch(logout()))}
				></FontAwesomeIcon>
         	 </span>
			</div>

			<div className='Dashboard'>
				<div className='p-4'>
					<div className='float-left Date'>
						<label>Date : </label>
						<input
							type='date'
							name='date'
							className='p-2 m-2 shadow-xl border-none'
							defaultValue={moment().format("DD,MM,YYYY")}
						></input>
					</div>

					<div className='float-right Search'>
						<div className='bg-white flex items-center  border-12 shadow-xl w-full h-12'>
							<input
								className='rounded-l-full w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none'
								id='search'
								type='text'
								placeholder='Search'
							></input>
							<div className='p-4'>
								<span className='text-blue-900 hover:text-blue-600'>
									<FontAwesomeIcon
										icon={faSearch}
										className='float-right'
									></FontAwesomeIcon>
								</span>
							</div>
						</div>
					</div>
				</div>

				<Table patients={currentPosts} />

				{/* Pagination starts here */}
				<div className='pt-5 text-center'>
					<div className=' patienttabel mt-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
						<div className='sm:flex-1 sm:flex sm:items-center content-center justify-center sm:justify-center'>
							<div>
								<Pagination
									postsPerPage={postsPerPage}
									totalPosts={patients.length}
									paginate={paginate}
								/>
							</div>
						</div>
					</div>
				</div>

				<Link to='/Receptionist'>
					<span>
						<FontAwesomeIcon
							icon={faUserPlus}
							className='userplus'
							size='lg'
						></FontAwesomeIcon>
					</span>
				</Link>
			</div>
		</>
	);
}

export default React.memo(Dashboard);
