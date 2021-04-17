import React from 'react';
import "./form.css"

function Form() {
    return (

<div className="form">
    <div className="bg-yellow-300  shadow-md rounded p-10 mb-4 flex flex-col my-2 form-container">
       
            <div className="-mx-4 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"></input>
                <p className="text-white text-xs">Please fill out this field.</p>
                </div>
                <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"></input>
                </div>
            </div>


            <div className="-mx-4 md:flex mb-6">
                <div className="md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Age
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="number" placeholder="Enter Your Age">
                </input>
                </div>
                <div className="md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Gender
                </label>
                <select class="block appearance-none w-full bg-gray-lighter border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
                </div>
                <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Phone Number
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="number" placeholder="1234567890">
                </input>
                </div>
            </div>

            <div className="-mx-4 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                   Email
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4" id="grid-city" type="email" placeholder="Area pin code"></input>
                </div>
                <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                    City
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Enter City Name"></input>
                </div>
                <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                    State
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Enter State Name"></input>
                </div>
             </div>
            
            <div className="-mx-4 md:flex mb-2">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                        Complaints
                    </label>
                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 resize border rounded-md" placeholder= "Type your Complaints ... "></textarea>
                </div>
            </div>

        </div>   
    </div>
    )
}

export default Form
