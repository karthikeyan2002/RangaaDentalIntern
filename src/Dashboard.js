/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { getPatients, userLogout } from "./utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faBars,
  // faSearch,
  faChevronLeft,
  faChevronRight,
  faUserPlus,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Styles/Dashboard.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { logout } from "./redux/actions";
import {useDispatch} from 'react-redux'

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
      <div className="navbar">
        <FontAwesomeIcon
          icon={faBars}
          className="float-left mb-2"
        ></FontAwesomeIcon>
        <h2 className="text-center">PATIENT DETAILS</h2>
        <div class="dropdown">
          <a>
            <FontAwesomeIcon
              icon={faPowerOff}
              className="float-right mb-2"
            ></FontAwesomeIcon>
          </a>
          <div class="dropdown-content">
            <a href="#" onClick={()=>userLogout().then(()=>dispatch(logout()))}>Log out</a>
          </div>
        </div>
      </div>
	  <div className="Dashboard">
	  {/* Pagination starts here */}
	  <div className="p-10 text-center">
      <div className=" patienttabel px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">3</span> of{" "}
              <span className="font-medium">3</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
			  <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
				<span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
	  </div>
        {/* 				
					<div className='w-1/6 float-right search-icon'>
						<div class='p-4'>
							<div class='bg-white flex items-center rounded-full shadow-xl w-full h-12'>
								<input
									class='rounded-l-full w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none'
									id='search'
									type='text'
									placeholder='Search'
								></input>
								<div class='p-4'>
									<button class='bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-6 h-6 flex items-center justify-center'>
										<FontAwesomeIcon
											icon={faSearch}
											className='float-right text-white'
										></FontAwesomeIcon>
									</button>
								</div>
							</div>
						</div>
					</div> */}

        <div className="-my-2 py-2 overflow-x-hidden sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 patienttabel clear-both">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden shadow-dashboard rounded-bl-lg rounded-br-lg">
            <table className="min-w-full">
              <thead className="text-gray-700">
                <tr>
                  <th className="pl-4 py-4 border-b-2 border-gray-300 text-left leading-4  tracking-wider uppercase">
                    Full Name
                  </th>
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    Age
                  </th>
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    Gender
                  </th>
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    Phone
                  </th>
                  {/* <th className="py-4 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider uppercase">Email</th> */}
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    Complaint
                  </th>
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    Status
                  </th>
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    Details
                  </th>
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    PDF
                  </th>
                  <th className="py-4 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-wider uppercase">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
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
                      <td className="pl-4 py-4 whitespace-no-wrap border-b border-gray-500 text-left font-semibold">
                        <div className="text-sm leading-5 font-bold">
                          {patient.Name}
                        </div>
                      </td>
                      <td className="py-4 whitespace-no-wrap border-b border-gray-500 text-center font-semibold">
                        <div className="text-sm leading-5">{patient.Age}</div>
                      </td>
                      <td className="py-4 whitespace-no-wrap border-b border-gray-500 text-center font-semibold">
                        <div className="text-sm leading-5">
                          {patient.Gender}
                        </div>
                      </td>
                      <td className="py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center font-semibold">
                        {patient["Phone Number"]}
                      </td>
                      {/* <td className="py-4 pr-0 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-left font-semibold">{patient.email}</td> */}
                      <td className="py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center font-semibold">
                        {patient.complaints}
                      </td>
                      <td className="py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-1 text-center">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-500 rounded-full"
                          ></span>
                          <span className="relative text-xs text-white tacking-widest">
                            Completed
                          </span>
                        </span>
                      </td>
                      <td className="py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center">
                        <button className="px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                          View Details
                        </button>
                      </td>
                      <td className="py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center">
                        <button className="px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                          Download
                        </button>
                      </td>
                      <td className="whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center">
                        <FontAwesomeIcon
                          icon={faPencilAlt}
                          className="hover:red-700"
                        ></FontAwesomeIcon>
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
            <div className='p-10 text-center'>
							<button className='bg-blue-500 border-none p-2 mx-3 rounded-lg'>
								<FontAwesomeIcon
									icon={faChevronLeft}
									className='text-white'
									size='lg'
								></FontAwesomeIcon>
							</button>

							<input
								type='date'
								name='date'
								className='border-none p-2 rounded-lg bg-blue-500 text-white'
							></input>

							<button className='border-none bg-blue-500 p-2 mx-3 rounded-lg'>
								<FontAwesomeIcon
									icon={faChevronRight}
									className='text-white'
									size='lg'
								></FontAwesomeIcon>
							</button>
						</div>

        <FontAwesomeIcon
          icon={faUserPlus}
          className="text-blue-700 userplus"
          size="2x"
        ></FontAwesomeIcon>
      </div>
    </>
  );
}

export default React.memo(Dashboard);