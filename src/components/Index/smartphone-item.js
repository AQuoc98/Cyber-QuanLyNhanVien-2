import React, { Component } from "react";

export default class smartphoneItem extends Component {
  state = {
    showDesc: true
  };
  toggleDescription = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  render() {
    //destructuring
    const { phone = {} } = this.props;
    const { name, desc, img } = phone;
    return (
      <div className="container">
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src={img}
            alt="Card"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center" style={{ color: "black" }}>
            <h4 className="card-title text-center">{name}</h4>

            {this.state.showDesc && (
              <p
                className="card-text"
                //  style={{display: this.state.showDesc ? 'block' : 'none' }}
              >
                {desc}
              </p>
            )}

            <button
              className="btn btn-primary"
              onClick={this.toggleDescription}
            >
              Detail
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.getProductName(name)}
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
