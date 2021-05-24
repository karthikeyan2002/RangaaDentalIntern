import { faArrowLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/actions";
import "./Styles/form.css";
import { createNewPost, userLogout } from "./utils";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (values.age > 100) {
    errors.age = "Invalid Age";
  }

  if (!values.phno) {
    errors.phno = "Required";
  } else if (values.phno.length !== 10) {
    errors.phno = "Invalid phone number";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length < 3) {
    errors.city = "Invalid city name";
  }

  return errors;
};

const Formone = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);
  console.log(state);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      phno: "",
      email: "",
      city: "",
      gender: "",
      state: "Tamil Nadu",
      complaint: "",
    },
    validate,
    onSubmit: (values) => {
      createNewPost(values);
    },
  });
  return (
    <div className="form">
      <div className="mb-12 mt-2">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-blue-600 float-left"
            size="lg"
          ></FontAwesomeIcon>
        </Link>
        <div className="dropdown">
          <span>
            <FontAwesomeIcon
              icon={faPowerOff}
              className="float-right text-gray-600"
              size="lg"
            ></FontAwesomeIcon>
          </span>
          <div className="dropdown-content">
            <span
              href="#"
              onClick={() => userLogout().then(() => dispatch(logout()))}
            >
              Log out
            </span>
          </div>
        </div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="form-container shadow-md rounded px-10 py-3 mb-2 flex flex-col my-2"
      >
        <h1 className="block uppercase tracking-wider text-gray-700 font-bold mb-10 text-center text-xl">
          patient registration
        </h1>

        <div className="-mx-4 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              htmlFor="firstName"
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
              placeholder="Name of the Patient"
            />
            {formik.errors.firstName ? (
              <div className="text-red-700 text-xs">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              htmlFor="lastName"
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
              placeholder="Father's Name / Last Name"
            />
            {formik.errors.lastName ? (
              <div className="text-red-700 text-xs">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
        </div>

        <div className="-mx-4 md:flex mb-2">
          <div className="md:w-1/3 px-3 mb-2 md:mb-0">
            <label
              htmlFor="age"
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
            >
              Age
            </label>
            <input
              id="age"
              name="age"
              type="Number"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
              placeholder="Age of the Patient"
            />
            {formik.errors.age ? (
              <div className="text-red-700 text-xs">{formik.errors.age}</div>
            ) : null}
          </div>
          <div className="md:w-1/3 px-3 mb-2 md:mb-0">
            <label
              htmlFor="phno"
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              id="phno"
              name="phno"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phno}
              className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
              placeholder="12345 67890"
            />
            {formik.errors.phno ? (
              <div className="text-red-700 text-xs">{formik.errors.phno}</div>
            ) : null}
          </div>

          <div className="md:w-1/3 px-3 mb-2 md:mb-0">
            <label
              htmlFor="email"
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
              placeholder="Mail-id of the Patient"
            />
            {formik.errors.email ? (
              <div className="text-red-700 text-xs">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="-mx-4 md:flex mb-2">
          <div className="md:w-1/3 px-3 mb-2 md:mb-0">
            <p className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2">
              Gender
            </p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
              ></input>
              <span className="ml-2 text-gray-700 font-bold">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
              ></input>
              <span className="ml-2 text-gray-700 font-bold">Female</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="others"
                checked={formik.values.gender === "others"}
                onChange={formik.handleChange}
              ></input>
              <span className="ml-2 text-gray-700 font-bold">Others</span>
            </label>
          </div>

          <div className="md:w-1/3 px-3 mb-2 md:mb-0">
            <label
              htmlFor="city"
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
            >
              city
            </label>
            <input
              id="city"
              name="city"
              type="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              className="appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3"
              placeholder="Enter Name of the City"
            />
            {formik.errors.city ? (
              <div className="text-red-700 text-xs">{formik.errors.city}</div>
            ) : null}
          </div>

          <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
              for="state"
            >
              State
            </label>
            <div className="relative">
              <select
                value={formik.values.state}
                onChange={formik.handleChange}
                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
              >
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="others">Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 md:flex mb-2">
          <div className="md:w-full px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Complaints
            </label>
            <textarea
              className="appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 resize border rounded-md mb-2"
              name="complaint"
              placeholder="Type your Complaints ... "
              value={formik.values.complaint}
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase w-1/7 hover:bg-gray-600 border-none"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Formone);
