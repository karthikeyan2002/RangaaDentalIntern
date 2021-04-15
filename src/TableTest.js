/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { getPatients } from "./utils/index";
import Header from "./Header";
function TableTest() {
	const [patients, setPatients] = useState([]);
	useEffect(() => {
		getPatients()
			.then((response) => setPatients(response))
			.catch((err) => console.error(err));
	}, []);
	return (
		<>
			<Header />
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-50'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Name
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Title
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Status
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Role
										</th>
										<th scope='col' className='relative px-6 py-3'>
											<span className='sr-only'>Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{patients.length > 0 ? (
										patients.map((patient) => (
											<tr>
												<td className='px-4 py-2 whitespace-nowrap'>
													<div className='flex items-center'>
														<div class='ml-4'>
															<div class='text-sm font-medium text-gray-900'>
																{patient.Name}
															</div>
															<div class='text-sm text-gray-500'>
																{patient["Phone Number"]}
															</div>
														</div>
													</div>
												</td>
												<td class='px-4 py-2 whitespace-nowrap'>
													<div class='text-sm text-gray-900'>{patient.Age}</div>
												</td>
												<td>
													<div class='text-sm text-gray-500'>
														{patient.email}
													</div>
												</td>
												<td class='px-4 py-2 whitespace-nowrap'>
													<span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
														Complaints
													</span>
												</td>
												<td class='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
													<a
														href='#'
														className='text-indigo-600 hover:text-indigo-900'
													>
														Edit
													</a>
												</td>
											</tr>
										))
									) : (
										<div className='justify-center bg-rose-600'>
											<svg
												className='animate-spin h-5 w-5 mr-3 ...'
												viewBox='0 0 24 24'
											></svg>
											Loading ...
										</div>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TableTest;
