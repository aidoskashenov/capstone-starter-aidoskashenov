import React, { Fragment, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

export const AddReport = () => {
  return (
    <Formik
      initialValues={{
        runway: "",
        state: "",
        coverage: "",
        breakingAction: "",

        weatherATIS: "",
        significantWeather: false,

        psr: true,
        ssr: true,
        ils: true,
        dme: true,

        maintenance: "",
        militaryActivity: "",
        comments: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
       console.log('submission', values)
        // const test = {
        //   nestedObj: {
        //     runway,
        //     state,
        //     coverag
        //   }
        // }

        // runwayAPI.create()
        setSubmitting(false);
      }}
    >
      <Form>
        <div className="column is-one-third has-text-left">
          <div className="field">
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
            <div className="column is-one-third">
              <label className="label"> runway</label>
              <div className="control">
                <Field name="runway" className="input is-small" type="text" />
              </div>
              <label className="label"> state</label>
              <div className="control">
                <Field name="state" className="input is-small" type="text" />
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
              <Field
                name="weatherATIS"
                className="input is-small"
                type="text"
              />
            </div>
            <label className="label">Significant weather</label>
            <div className="control">
              <Field name="significantWeather" type="checkbox" />
            </div>

            <div className="column is-one-fifth">
              <label className="label">Equipment</label>
              <label className="label">PSR</label>
              <div className="control">
                <Field name="psr" type="checkbox" />
              </div>
              <label className="label">SSR</label>
              <div className="control">
                <Field name="ssr" type="checkbox" />
              </div>
              <label className="label">ILS</label>
              <div className="control">
                <Field name="ils" type="checkbox" />
              </div>
              <label className="label">DME</label>
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

            <button className="button is-primary mt-3" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
