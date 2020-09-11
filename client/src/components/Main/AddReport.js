import React, { Fragment, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";

export const AddReport = () => {
  return (
    <Formik
      initialValues={{
        runway: "",
        runwaystate: "",
        coverage: "",
        breakingAction: "",

        weatherATIS: "",
        significantWeather: false,

        psr: false,
        ssr: false,
        ils: false,
        dme: false,

        maintenance: "",
        militaryActivity: "",
        comments: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submission", values);
        // const test = {
        //   runway: {
        //     runway,
        //     runwaystate,
        //     coverag
        //   },

        // }

        // runwayAPI.create()
        setSubmitting(false);
      }}
    >
      <Form>
        <h1 className="title has-text-centered mt-4">Insert new Log</h1>
        <div className="container has-text-left">
          {/* <div className="control">
              <label className="radio">
                <Field type="radio" name="answer" />
                05
              </label>
              <label className="radio">
                <Field type="radio" name="answer" />
                23
              </label>
            </div> */}

          <label className="label">Runway Conditions</label>
          <div className="field is-grouped">
            <label className="label mr-2"> runway</label>
            <div className="control">
              <Field name="runway" className="input is-small" type="text" />
            </div>
            <label className="label"> runwaystate</label>
            <div className="control">
              <Field
                name="runwaystate"
                className="input is-small"
                type="text"
              />
            </div>
            <label className="label"> coverage</label>
            <div className="control">
              <Field name="coverage" className="input is-small" type="text" />
            </div>
            <label className="label"> breaking action</label>
            <div className="control">
              <Field
                name="breakingAction"
                className="input is-small"
                type="text"
              />
            </div>
          </div>
          <label className="label">Weather ATIS</label>
          <div className="control">
            <Field name="weatherATIS" className="input is-small" type="text" />
          </div>
          <label className="label">Significant weather</label>
          <div className="control">
            <Field name="significantWeather" type="checkbox" />
          </div>

          <div className="field is-grouped">
            <label className="label mr-4">Equipment</label>
            <label className="label mr-2">PSR</label>
            <div className="control">
              <Field name="psr" type="checkbox" />
            </div>
            <label className="label mr-2">SSR</label>
            <div className="control">
              <Field name="ssr" type="checkbox" />
            </div>
            <label className="label mr-2">ILS</label>
            <div className="control">
              <Field name="ils" type="checkbox" />
            </div>
            <label className="label mr-2">DME</label>
            <div className="control">
              <Field name="dme" type="checkbox" />
            </div>
          </div>

          <label className="label">Maintenance</label>
          <div className="control">
            <Field name="maintenance" className="textarea" type="textarea" />
          </div>
          <label className="label">Military Activity</label>
          <div className="control">
            <Field
              name="militaryActivity"
              className="textarea"
              type="textarea"
            />
          </div>
          <label className="label">Comments</label>
          <div className="control">
            <Field name="comments" className="textarea" type="textarea" />
          </div>

          <Link className="button is-primary mt-3" type="submit" to="/Four04">
            Submit
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
