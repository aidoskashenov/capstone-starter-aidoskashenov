import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "api";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { useHistory, useLocation } from "react-router-dom";

import auth from "auth";

import * as Yup from "yup";

export const Registration = ({ register }) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body has-text-centered">
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            pass: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("FirstName is required!"),
            lastName: Yup.string().required("LastName is required!"),
            email: Yup.string()
              .email("Invalid email address!")
              .required("Email is required!"),
            pass: Yup.string().min(6).required("Pass is required!"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("submission", values);
            try {
              const jsonRes = await api(values);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <Form className="box">
            <h2 className="title">Registration</h2>
            <div className="field">
              <label htmlFor="firstName" className="is-ml-2">
                First Name
              </label>
              <div className="control mx-2 my-1">
                <Field name="firstName" type="text" />
                <p className="help is-danger">
                  <ErrorMessage name="firstName" />
                </p>
              </div>
            </div>
            <div className="field">
              <label htmlFor="lastName" className="ml-2">
                Last Name
              </label>
              <div className="control mx-2 my-1">
                <Field name="lastName" type="text" />
                <p className="help is-danger">
                  <ErrorMessage name="lastBame" />
                </p>
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="ml-2">
                Email
              </label>
              <div className="control mx-2 my-1">
                <Field name="email" type="email" />
                <p className="help is-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
            </div>

            <div className="field">
              <label htmlFor="pass" className="ml-2">
                Password
              </label>
              <div className="control mx-2 my-1">
                <Field name="pass" type="password" />
                <p className="help is-danger">
                  <ErrorMessage name="pass" />
                </p>
              </div>
            </div>

            <button type="submit" className="button is-primary ml-2 mt-2">
              Submit
            </button>
          </Form>
        </Formik>

        {/* TODO: Add 'toggle button' to switch state and show 'name input' or not */}
      </div>
    </section>
  );
};

Registration.propTypes = { register: PropTypes.func };
