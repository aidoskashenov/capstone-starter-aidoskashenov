import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SingleReport.css";
import api from "api";

const singleLogAPI = api("dailylog");

export const SingleReport = () => {
  const { state } = useLocation();
  const [singleLog, setSingleLog] = useState("");
  useLocation();

  return (
    <div className="book">
      <div className="page">
        <div className="subpage">
          <ul>
            <li>Date:{state.dailylog.date}</li>
            <li>Active Runway: {state.dailylog.activeRunway}</li>
            <li>Runway Conditions</li>
            <li>Magnetic Track: {state.dailylog.rw.runway}°</li>
            <li>Phenomen: {state.dailylog.rw.runwaystate}</li>
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
            <li>MIlitary{state.dailylog.militaryActivity}</li>
            <li>Comments{state.dailylog.comments}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
