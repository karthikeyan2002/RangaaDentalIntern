import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";


const validate = (values) => {};

const Formtwo = () => {
  const formik = useFormik({
    initialValues: {},
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-blue-300 shadow-md rounded p-10 mb-4 flex flex-col my-2"
      >

      </form>
    </div>
  );
};

export default Formtwo;
