import React from "react";

export const ReportList = ({ dailylog }) => {
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
                    <td>{item.date ? item.date : null}</td>
                    <td className="level-right">
                      <a className="button is-small is-primary" href="#">
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
