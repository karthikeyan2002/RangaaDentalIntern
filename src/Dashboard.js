/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { getPatients, userLogout } from "./utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPowerOff,
	faBars,
	faSearch,
	faUserPlus,
	faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Styles/Dashboard.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { logout } from "./redux/actions";
import { useDispatch } from "react-redux";
import moment from "moment";

function Dashboard() {
	const [patients, setPatients] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		getPatients()
			.then((response) => setPatients(response))
			.catch((err) => console.error(err));
	}, []);
	return (
		<>
			<div className='navbar text-white'>
				<FontAwesomeIcon
					icon={faBars}
					className='float-left mb-2'
				></FontAwesomeIcon>
				<h3 className='text-center'>PATIENT DETAILS</h3>
				<div class='dropdown'>
					<a>
						<FontAwesomeIcon
							icon={faPowerOff}
							className='float-right mb-2'
						></FontAwesomeIcon>
					</a>
					<div class='dropdown-content'>
						<a
							href='#'
							onClick={() => userLogout().then(() => dispatch(logout()))}
						>
							Log out
						</a>
					</div>
				</div>
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

					<div class='float-right Search'>
						<div class='bg-white flex items-center  border-12 shadow-xl w-full h-12'>
							<input
								class='rounded-l-full w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none'
								id='search'
								type='text'
								placeholder='Search'
							></input>
							<div class='p-4'>
								{/* <button class='bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-6 h-6 flex items-center justify-center'> */}
								<a className='text-blue-900 hover:text-blue-600'>
									<FontAwesomeIcon
										icon={faSearch}
										className='float-right'
									></FontAwesomeIcon>
								</a>
								{/* </button> */}
							</div>
						</div>
					</div>
				</div>

				<div className='-my-6 py-4 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 patienttabel clear-both mt-12'>
					<div className='align-middle inline-block min-w-full shadow overflow-hidden shadow-dashboard rounded-bl-lg rounded-br-lg'>
						<table className='min-w-full overflow-x-auto'>
							<thead className='text-gray-700'>
								<tr>
									<th className='pl-4 py-4 border-b-2 border-gray-300   leading-4  tracking-widest uppercase'>
										Full Name
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Age'>
										Age
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Gender'>
										Gender
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Phone'>
										Phone
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Complaint'>
										Complaint
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Status'>
										Status
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase'>
										Details
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase'>
										PDF
									</th>
									<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase'>
										Edit
									</th>
								</tr>
							</thead>
							<tbody className='bg-white'>
								{patients.length > 0 ? (
									patients.map((patient) => (
										<tr>
											{/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5 text-gray-800">{patient.Name}</div>
                                            </div>
                                        </div>
                      </td>  */}
											<td className='pl-4 py-2.5 whitespace-no-wrap border-b border-gray-500 text-left font-semibold'>
												<div className='text-sm leading-5 font-bold'>
													{patient.Name}
												</div>
											</td>
											<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-center font-semibold Age'>
												<div className='text-sm leading-5'>{patient.Age}</div>
											</td>
											<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-center font-semibold Gender'>
												<div className='text-sm leading-5'>
													{patient.Gender}
												</div>
											</td>
											<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center font-semibold Phone'>
												{patient["Phone Number"]}
											</td>
											<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center font-semibold Complaint'>
												{patient.complaints}
											</td>
											<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center Status'>
												<span className='relative inline-block px-3 py-1 font-semibold leading-1 text-center'>
													<span
														aria-hidden
														className='absolute inset-0 bg-red-500 rounded-full'
													></span>
													<span className='relative text-xs text-white tacking-widest'>
														Completed
													</span>
												</span>
											</td>
											<td className='py-3 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center Deatils-big'>
												<button className='px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
													View Details
												</button>
											</td>
											<td className='py-3 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center Deatils-small'>
												<button className='px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
													View
												</button>
											</td>
											<td className='py-3 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center'>
												<button className='px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
													Download
												</button>
											</td>
											<td className='whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center'>
												<a
													href=''
													className='text-green-900  hover:text-cyan-600'
												>
													<FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
												</a>
											</td>
										</tr>
									))
								) : (
									<h2 style={{ fontFamily: "monospace" }}>Loading ....</h2>
								)}
							</tbody>
						</table>
					</div>
				</div>
				{/* Pagination starts here */}
				<div className='p-3 pt-5 text-center'>
					<div className=' patienttabel mt-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
						<div className='flex-1 flex justify-between sm:hidden'>
							<a
								href='#'
								className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
							>
								Previous
							</a>
							<a
								href='#'
								className='ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
							>
								Next
							</a>
						</div>
						<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
							<div>
								<p className='text-sm text-gray-700'>
									Showing <span className='font-medium'>1</span> to{" "}
									<span className='font-medium'>3</span> of{" "}
									<span className='font-medium'>3</span> results
								</p>
							</div>
							<div>
								<nav
									className='relative z-0 inline-flex rounded-md shadow-xl -space-x-px'
									aria-label='Pagination'
								>
									<a
										href='#'
										className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
									>
										<span className='sr-only'>Previous</span>
										<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
									</a>
									<a
										href='#'
										className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
									>
										1
									</a>
									<a
										href='#'
										className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
									>
										2
									</a>
									<a
										href='#'
										className='hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
									>
										3
									</a>
									<a
										href='#'
										className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
									>
										<span className='sr-only'>Next</span>
										<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>

				<a href='' className='text-blue-700  hover:text-cyan-900'>
					<FontAwesomeIcon
						icon={faUserPlus}
						className='userplus'
						size='lg'
					></FontAwesomeIcon>
				</a>
			</div>
		</>
	);
}

export default React.memo(Dashboard);
