import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Tên nhân viên"
          id="searchName"
        />
        <div className="input-group-prepend">
          <span className="input-group-text" id="btnTimNV">
            <i className="fa fa-search" />
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
