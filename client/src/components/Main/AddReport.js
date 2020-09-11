import React, { Fragment } from "react";

export const AddReport = () => {
  return (
    <Fragment>
      <h1 className="has-text-centered title mt-4">Insert Log</h1>
      <form>
        <div className="column is-one-third has-text-left">
          <div className="field">
            <label className="label">Runway</label>
            <div className="control">
              <input className="input is-small" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Runway Conditions</label>
            <div className="control">
              <input className="input is-small" type="text" />
            </div>
          </div>
        </div>
        <div className="column is-one-third has-text-left">
          <div className="field">
            <label className="label">ATIS information</label>
            <div className="control">
              <input className="input is-small" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Significant weather presence</label>
            <div className="control">
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
        </div>
        <div className="column is-one-third has-text-left">
          <div className="field">
            <label className="label">Eqipment</label>
            <div className="control">
              <input className="input is-small" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Military Activity</label>
            <div className="control">
              <input className="input is-small" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Maintenance</label>
            <div className="control">
              <textarea className="textarea is-medium"></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Adjacent Sector</label>
            <div className="control">
              <textarea className="textarea is-medium"></textarea>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
