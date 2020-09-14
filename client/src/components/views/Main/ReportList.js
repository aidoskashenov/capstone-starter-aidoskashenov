import React from "react";

import { Link, useHistory, useLocation } from "react-router-dom";

export const ReportList = ({ dailylog }) => {
  const history = useHistory();

  const handleClick = (dailylog) => {
    history.push("/singlereport", {dailylog});
  };

  return (
    <div className="card-table">
      <div className="content">
        <table className="table is-fullwidth is-striped">
          <tbody>
            {dailylog
              ? dailylog.map((item, i) => (
                  <tr key={i}>
                    <td width="5%">
                      <i className="fa fa-bell-o"></i>
                    </td>
                    <td>{item.date}</td>
                    <td className="level-right">
                      <a
                        to="/singlereport"
                        onClick={() => handleClick(item)}
                        className="button is-small is-primary"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
