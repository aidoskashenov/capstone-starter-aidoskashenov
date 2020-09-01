import React, { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";

export const Login = () => {
  return (
    <section className="box center section">

      <Formik
        initialValues={{
          email: "",
          name: "",
          pass: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required!"),
          email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
          pass: Yup.string().min(6).required("Pass is required!"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submission", values);
          setSubmitting(false);
        }}
      >
        <Form className="box">
        <h2 className="title">Login</h2>
          <div className="field">
            <label htmlFor="name" className="ml-2">
              Name
            </label>
            <div className="control mx-2 my-1">
              <Field name="name" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="email" className="ml-2">
              Email
            </label>
            <div className="control mx-2 my-1">
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="pass" className="ml-2">
              Password
            </label>
            <div className="control mx-2 my-1">
              <Field name="pass" type="password" />
              <ErrorMessage name="pass" />
            </div>
          </div>

          <button type="submit" className="button is-success ml-2 mt-2">
            Submit
          </button>
        </Form>
      </Formik>

      {/* TODO: Add 'toggle button' to switch state and show 'name input' or not */}
    </section>
  );
};
