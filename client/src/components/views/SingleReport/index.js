import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./SingleReport.css";
import api from "api";
import image05 from "./image05.png";
import image23 from "./image23.png";

const singleLogAPI = api("dailylog");

export const SingleReport = () => {
  const { state } = useLocation();

  const history = useHistory();

  const handleKeyPress = (event) => {
    event.preventDefault();
    history.push("/main");
  };

  console.log(state.dailylog.activeRunway);

  return (
    <div className="book" onMouseDown={handleKeyPress}>
      <div className="page">
        <div className="subpage">
          <ul>
            <li>
              Date: {state.dailylog.date}
              <img
                src={state.dailylog.activeRunway === "05" ? image05 : image23}
                alt="Runway 05"
              />
            </li>

            <li>Active Runway: {state.dailylog.activeRunway}</li>
            <li>
              {state.dailylog.activeRunway === "05"
                ? "Magnetic track 051°"
                : "Magnetic track 231°"}
            </li>
            <li>Runway Conditions</li>
            <li>Phenomenon: {state.dailylog.rw.runwaystate}</li>
            <li>Coverage: {state.dailylog.rw.coverage}%</li>
            <li>Breaking Action: {state.dailylog.rw.breakingAction}</li>
            <li>ATIS information: {state.dailylog.weatherATIS}</li>
            <li>
              significantWeather:
              {state.dailylog.significantWeather ? "✔️" : "❌"}
            </li>
            <li>Equipment</li>
            <li>PSR: {state.dailylog.equipment.psr ? "✔️" : "❌"}</li>
            <li>SSR: {state.dailylog.equipment.ssr ? "✔️" : "❌"}</li>
            <li>ILS: {state.dailylog.equipment.ils ? "✔️" : "❌"}</li>
            <li>DME: {state.dailylog.equipment.dme ? "✔️" : "❌"}</li>
            <li>Maintenance: {state.dailylog.maintenance}</li>
            <li>MIlitary: {state.dailylog.militaryActivity}</li>
            <li>Comments: {state.dailylog.comments}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
