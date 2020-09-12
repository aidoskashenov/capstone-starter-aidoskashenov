import React from 'react'

export const ReportList = () => {
 return <div className="card-table">
  <div className="content">
    <table className="table is-fullwidth is-striped">
      <tbody>
        <tr>
          <td width="5%">
            <i className="fa fa-bell-o"></i>
          </td>
          <td>26.09.2020 SHIFT 1</td>
          <td className="level-right">
            <a
              className="button is-small is-primary"
              href="#"
            >
              View
            </a>
          </td>
        </tr>
        <tr>
          <td width="5%">
            <i className="fa fa-bell-o"></i>
          </td>
          <td>27.09.2020 SHIFT 2</td>
          <td className="level-right">
            <a
              className="button is-small is-primary"
              href="#"
            >
              View
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
}
