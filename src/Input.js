import React from "react";

function Input() {
  return (
    <div className="Input">
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
            {" "}
            <input
              name="Patient-Name"
              type="text"
              placeholder="Enter Patient's Name"
            />{" "}
          </td>
          <td>
            {" "}
            <input
              name="Patient-Age"
              type="number"
              placeholder="Enter Patient's Age"
            />{" "}
          </td>
          <td>
            {" "}
            <input
              name="Phone-number"
              type="number"
              placeholder="Patient's Phone number"
            />{" "}
          </td>
          <td>
            <select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </td>
          <td>
            <select>
              <option value="Diabetes-num">Not Under Medication</option>
              <option value="Diabetes-um">Under Medication</option>
            </select>
          </td>
          <td>
            <select>
              <option value="hypertension-num">Not Under Medication</option>
              <option value="hypertension-um">Under Medication</option>
            </select>
          </td>
          <td>
            <select>
              <option value="Epilepsy-num">Not under Medication</option>
              <option value="Epilepsy-um">Under Medication</option>
            </select>
          </td>
          <td>
            <button type="submit">Add</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Input;
