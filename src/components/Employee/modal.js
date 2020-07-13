import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      name: "",
      email: "",
      password: "",
      startedAt: "",
      position: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNewEmployee(this.state);
  };

  render() {
    const { mode = "" } = this.props;
    return (
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0">
              <h2 id="header-title">
                {mode === "add" ? "Add Employee" : "Edit Employee"}
              </h2>
            </header>
            <form role="form" onSubmit={this.handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                    <input
                      type="msnv"
                      name="_id"
                      onChange={this.handleChange}
                      id="msnv"
                      className="form-control input-sm"
                      placeholder="Mã số nhân viên"
                    />
                  </div>
                  <span className="sp-thongbao" id="tbMaNV" />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-address-book" />
                      </span>
                    </div>
                    <input
                      type="name"
                      name="name"
                      onChange={this.handleChange}
                      id="name"
                      className="form-control input-sm"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <span className="sp-thongbao" id="tbTen" />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope" />
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      id="email"
                      className="form-control input-sm"
                      placeholder="Email"
                    />
                  </div>
                  <span className="sp-thongbao" id="tbEmail" />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-key" />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      id="password"
                      className="form-control input-sm"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <span className="sp-thongbao" id="tbMatKhau" />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-calendar" />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="startedAt"
                      onChange={this.handleChange}
                      id="datepicker"
                      className="form-control"
                      placeholder="Ngày làm"
                    />
                  </div>
                  <span className="sp-thongbao" id="tbNgay" />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-briefcase" />
                      </span>
                    </div>
                    <select
                      className="form-control"
                      name="position"
                      onChange={this.handleChange}
                      id="chucvu"
                    >
                      <option>Chọn chức vụ</option>
                      <option>Sếp</option>
                      <option>Trưởng phòng</option>
                      <option>Nhân viên</option>
                    </select>
                  </div>
                  <span className="sp-thongbao" id="tbChucVu" />
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer" id="modal-footer">
                {mode === "add" ? (
                  <button
                    id="btnThemNV"
                    type="sumbit"
                    className="btn btn-success"
                  >
                    Thêm người dùng
                  </button>
                ) : (
                  <button
                    id="btnCapNhatNV"
                    type="sumbit"
                    className="btn btn-success"
                    
                  >
                    Cập nhật
                  </button>
                )}

                <button
                  id="btnDong"
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
