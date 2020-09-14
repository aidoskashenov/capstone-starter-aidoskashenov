import React from "react";

export const ReportList = ({ dailylog }) => {
  // const renderDailylogs = (dailylog) => {
  //   if (dailylog) {
  //     dailylog.map((log) => {

  //       return (
  //         <tr>
  //           <td width="5%">
  //             <i className="fa fa-bell-o"></i>
  //           </td>
  //           <td>{log.date ? log.date : null}</td>
  //           <td className="level-right">
  //             <a className="button is-small is-primary" href="#">
  //               View
  //             </a>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   }
  // };

  return (
    <div className="card-table">
      <div className="content">
        <table className="table is-fullwidth is-striped">
          <tbody>
            {dailylog
              ? dailylog.map((item) => (
                  <tr>
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
