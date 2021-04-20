import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik , useField , useFormikContext } from 'formik';
import "./Styles/form.css";

const validate = values => {
  const errors = {};
 
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.age) {
    errors.age = 'Required';
  } else if (values.age > 100) {
    errors.age = 'Invalid Age';
  }

  if (!values.phno) {
    errors.phno = 'Required';
  } else if (values.phno.length > 10) {
    errors.phno = 'Invalid phone number';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!values.city) {
    errors.city = 'Required';
  } else if (values.city.length < 3) {
    errors.city = 'Invalid city name';
  }

  return errors;
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Formone = () => {
  
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       age: '',
       phno: '',
       email: '',
       city:'',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
return (

<div className="form">
    
    <form onSubmit={formik.handleSubmit} className="bg-yellow-300  shadow-md rounded p-10 mb-4 flex flex-col my-2">
    
    <div className="-mx-4 md:flex mb-2">
      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label htmlFor="firstName" className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
          placeholder="Name of the Patient"
        />
          {formik.errors.firstName ? <div className="text-white text-xs">{formik.errors.firstName}</div> : null}
      </div>
      
      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
       <label htmlFor="lastName" className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
         placeholder="Father's Name / Last Name"
       />
         {formik.errors.lastName ? <div className="text-white text-xs">{formik.errors.lastName}</div> : null}
      </div>
   </div>

   <div className="-mx-4 md:flex mb-2">
      <div className="md:w-1/3 px-3 mb-6 md:mb-0">
      <label htmlFor="age" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Age</label>
        <input
          id="age"
          name="age"
          type="Number"
          onChange={formik.handleChange}
          value={formik.values.age}
          className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
          placeholder="Age of the Patient"
        />
        {formik.errors.age ? <div className="text-white text-xs">{formik.errors.age}</div> : null}
      </div>
      <div className="md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="phno" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Phone Number</label>
        <input
          id="phno"
          name="phno"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.phno}
          className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
          placeholder="12345 67890"
        />
        {formik.errors.phno ? <div className="text-white text-xs">{formik.errors.phno}</div> : null}
      </div>
        
      <div className="md:w-1/3 px-3 mb-6 md:mb-0">
      <label htmlFor="email" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
          placeholder="Mail-id of the Patient"
        />
        {formik.errors.email ? <div className="text-white text-xs">{formik.errors.email}</div> : null}
      </div>
   </div>

   
   <div className="-mx-4 md:flex mb-2">
      
      <div className="md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="phno" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">city</label>
        <MySelect label="Job Type" name="jobType">
             <option value="">Select a job type</option>
             <option value="designer">Designer</option>
             <option value="development">Developer</option>
             <option value="product">Product Manager</option>
             <option value="other">Other</option>
           </MySelect>
      </div>

      <div className="md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="phno" className="block uppercase tracking-wide text-white text-xs font-bold mb-2">city</label>
        <input
          id="city"
          name="city"
          type="city"
          onChange={formik.handleChange}
          value={formik.values.city}
          className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
          placeholder="Enter Name of the City"
        />
        {formik.errors.city ? <div className="text-white text-xs">{formik.errors.city}</div> : null}
      </div>
        
      
   </div>
        
    <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Submit</button>
  </form>
</div>
   );
 };

export  default Formone;
    
 


    {/* <div className="bg-yellow-300  shadow-md rounded p-10 mb-4 flex flex-col my-2 form-container">
       
            <div className="-mx-4 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Name of the Patient"></input>
                
                </div>
                <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Father's Name / Last Name"></input>
                </div>
            </div>


            <div className="-mx-4 md:flex mb-2">
                <div className="md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                    Age
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="number" placeholder="Age of the Patient">
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
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="number" placeholder="12345 67890">
                </input>
                </div>
            </div>

            <div className="-mx-4 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                   Email
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 mb-1" id="grid-city" type="email" placeholder="Mail-id of the Patient"></input>
                <p className="text-white text-xs">Mail-id if availabe !</p>
                </div>
                
                <div className="md:w-1/4 px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                    City
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Enter Name of the City"></input>
                </div>
                <div className="md:w-1/4 px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                    State
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="State Name"></input>
                </div>
             </div>
            
            <div className="-mx-4 md:flex mb-2">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                        Complaints
                    </label>
                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 resize border rounded-md mb-2" placeholder= "Type your Complaints ... "></textarea>
                </div>
            </div>

            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Submit
            </button>
        </div>    */}
  
