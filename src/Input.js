import React from "react";
import * as actions from "./redux/actions";
import { useDispatch } from "react-redux";
import { store } from "./redux/store";
function Input() {
	const dispatch = useDispatch();
	console.log(store.getState());
	return (
		<div className='Input'>
			<table>
				<tr>
					<th> Name </th>
					<th> Age </th>
					<th> Phone Number </th>
					<th> Gender </th>
					<th> Diabetes </th>
					<th> Hypertension </th>
					<th> Epilepsy </th>
					<th> Add </th>
				</tr>
				<tr>
					<td>
						<input
							name='Patient-Name'
							type='text'
							placeholder="Enter Patient's Name"
							onChange={(event) => {
								dispatch(actions.updateName(event.target.value));
								event.preventDefault();
							}}
						/>
					</td>
					<td>
						<input
							name='Patient-Age'
							type='number'
							placeholder="Enter Patient's Age"
							onChange={(event) => {
								dispatch(actions.updateAge(event.target.value));
								event.preventDefault();
							}}
						/>
					</td>
					<td>
						<input
							name='Phone-number'
							type='tel'
							placeholder="Patient's Phone number"
							onChange={(event) => {
								dispatch(actions.updatePhoneNumber(event.target.value));
								event.preventDefault();
							}}
						/>
					</td>
					<td>
						<select
							onChange={(event) => {
								dispatch(actions.updateGender(event.target.value));
								event.preventDefault();
							}}
						>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
						</select>
					</td>
					<td>
						<select
							onChange={(event) => {
								console.log();
								dispatch(actions.hasDiabetes(event.target.value));
								event.preventDefault();
							}}
						>
							<option value='Diabetes-num'>Not Under Medication</option>
							<option value='Diabetes-um'>Under Medication</option>
						</select>
					</td>
					<td>
						<select
							onChange={(event) => {
								dispatch(actions.hasHypertension(event.target.value));
								event.preventDefault();
							}}
						>
							<option value='hypertension-num'>Not Under Medication</option>
							<option value='hypertension-um'>Under Medication</option>
						</select>
					</td>
					<td>
						<select
							onChange={(event) => {
								dispatch(actions.hasEpilepsy(event.target.value));
								event.preventDefault();
							}}
						>
							<option value='Epilepsy-num'>Not under Medication</option>
							<option value='Epilepsy-um'>Under Medication</option>
						</select>
					</td>
					<td>
						<button type='submit' onClick={() => console.log(store.getState())}>
							Add
						</button>
					</td>
				</tr>
			</table>
		</div>
	);
}

export default Input;
