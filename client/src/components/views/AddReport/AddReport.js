import React, { Fragment, useState, useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import api from "api";

export const AddReport = () => {
  const [rw, setRw] = useState("05");
  const dailylogAPI = api("dailylog");

  console.log(rw);

  // Dispatch 'init' to update all of the initial todos...if any
  return (
    <Formik
      initialValues={{
        rw: rw,
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
      onSubmit={async (values, { setSubmitting }) => {
        const dailylogAPI = api("dailylog");
        const dailylog = {
          date: new Date().toISOString(),
          rw: values.rw,
          rw: {
            runway: values.runway,
            runwaystate: values.runwaystate,
            coverage: values.coverage,
            breakingAction: values.breakingAction,
          },
          weatherATIS: values.weatherATIS,
          significantWeather: values.significantWeather,
          equipment: {
            psr: values.psr,
            ssr: values.ssr,
            ils: values.ils,
            dme: values.dme,
          },
          maintenance: values.maintenance,
          militaryActivity: values.militaryActivity,
          comments: values.comments,
        };
        const res = await dailylogAPI.create({ dailylog });

        // dailylogAPI.create()
        setSubmitting(false);
      }}
    >
      <Form>
        <h1 className="title has-text-centered mt-4">Insert new Log</h1>
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <label className="label mt-3 mb-3 mr-3">Runway</label>
              <div className="field ">
                <div className="control">
                  <label className="radio">
                    <Field
                      type="radio"
                      label="05"
                      checked={rw === "05"}
                      value="05"
                      onClick={() => setRw("05")}
                    />
                    05
                  </label>
                  <label className="radio">
                    <Field
                      type="radio"
                      label="23"
                      checked={rw === "23"}
                      value="23"
                      onClick={() => setRw("23")}
                    />
                    23
                  </label>
                </div>

                <label className="label mt-3 mb-3">Runway Conditions</label>
                <div className="field is-grouped">
                  <label className="label mr-2"> Runway</label>
                  <div className="control">
                    <Field
                      name="runway"
                      className="input is-small"
                      type="text"
                    />
                  </div>
                  <label className="label mr-1">
                    {" "}
                    Runway
                    <br />
                    state
                  </label>
                  <div className="control">
                    <Field
                      name="runwaystate"
                      className="input is-small"
                      type="text"
                    />
                  </div>
                  <label className="label mr-1"> Coverage</label>
                  <div className="control">
                    <Field
                      name="coverage"
                      className="input is-small"
                      type="text"
                    />
                  </div>
                  <label className="label mr-1"> Breaking action</label>
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
                <div className="field">
                  <label className="label mt-3">Maintenance</label>
                  <div className="control">
                    <Field
                      name="maintenance"
                      className="textarea"
                      type="textarea"
                    />
                  </div>
                  <label className="label mt-3">Military Activity</label>
                  <div className="control">
                    <Field
                      name="militaryActivity"
                      className="textarea"
                      type="textarea"
                    />
                  </div>
                  <label className="label mt-3">Comments</label>
                  <div className="control">
                    <Field
                      name="comments"
                      className="textarea"
                      type="textarea"
                    />
                  </div>
                </div>

                <button
                  className="button is-primary mt-3"
                  type="submit"
                  to="/Four04"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
