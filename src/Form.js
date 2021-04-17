import React from 'react';
import "./form.css"

function Form() {
    return (

<div className="form">
            <div className="bg-purple-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 form-container">
       
        {/* This is for fname and age */}

            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"></input>
                <p className="text-white text-xs">Please fill out this field.</p>
                </div>
                <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"></input>
                </div>
            </div>

        {/* This is for age and email */}

            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Age
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="Enter Your Age">
                </input>
                </div>
                <div className="md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Phone Number
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="1234567890">
                </input>
                </div>
                <div className="md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Email
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="example@gmail.com">
                </input>
                </div>
            </div>

            {/* Address */}
        
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                    Area
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Area Name"></input>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                    City
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="City Name"></input>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                    State
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="State Name"></input>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                   Pin code
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-white border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Area pin code"></input>
                </div>
               
            </div>
            </div>   
        </div>
    )
}

export default Form
