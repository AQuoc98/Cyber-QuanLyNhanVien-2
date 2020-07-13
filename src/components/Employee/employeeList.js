import React, { Component } from "react";

class EmployeeList extends Component {
  handleDelete = id => {
    console.log("dad");
    this.props.deleteEmployee(id);
  };

  handleUpdate = mode => {
    this.props.setMode(mode);
  };
  render() {
    const { data = [] } = this.props;
    return (
      <table className="table table-bordered table-hover myTable">
        <thead className="text-primary">
          <tr>
            <th className="nowrap">
              <span className="mr-1">Mã nhân viên</span>
              <i className="fa fa-arrow-up" id="SapXepTang" />
              <i className="fa fa-arrow-down" id="SapXepGiam" />
            </th>
            <th>Họ và tên nhân viên</th>
            <th>Email</th>
            <th>Ngày vào làm</th>
            <th>Chức vụ</th>
            <th>
              <em className="fa fa-cog" />
            </th>
          </tr>
        </thead>
        <tbody id="tableDanhSach" className="text-dark">
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.startedAt}</td>
                <td>{item.position}</td>
                <td>
                  <button
                    onClick={() => this.handleUpdate("update")}
                    data-toggle="modal"
                    data-target="#myModal"
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => this.handleDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default EmployeeList;
