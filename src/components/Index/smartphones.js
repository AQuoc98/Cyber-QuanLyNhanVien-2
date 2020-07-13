import React, { Component } from "react";
import SmartphoneItem from "./smartphone-item";
const products = [
  {
    id: "sp_1",
    name: "iphoneX",
    price: "30.000.000 VNÄ•",
    screen: "screen_1",
    backCamera: "backCamera_1",
    frontCamera: "frontCamera_1",
    img: "./img/sp_iphoneX.png",
    desc:
      "iPhone X features a new all-screen design. Face ID, which makes your face your password"
  },
  {
    id: "sp_2",
    name: "Note 7",
    price: "20.000.000 VNÄ•",
    screen: "screen_2",
    backCamera: "backCamera_2",
    frontCamera: "frontCamera_2",
    img: "./img/sp_note7.png",
    desc:
      "The Galaxy Note7 comes with aperfectly symmetrical design for good reason"
  },
  {
    id: "sp_3",
    name: "Vivo",
    price: "10.000.000 VNÄ•",
    screen: "screen_3",
    backCamera: "backCamera_3",
    frontCamera: "frontCamera_3",
    img: "./img/sp_vivo850.png",
    desc:
      "A young global smartphone brandfocusing on introducing perfect sound quality"
  },
  {
    id: "sp_4",
    name: "Blacberry",
    price: "15.000.000 VNÄ•",
    screen: "screen_4",
    backCamera: "backCamera_4",
    frontCamera: "frontCamera_4",
    img: "./img/sp_blackberry.png",
    desc:
      "BlackBerry is aline of smartphones, tablets, and services originally designed"
  }
];

export default class smartphones extends Component {
  state = {
    childrenName: ""
  };

  getProductName = name => {
    this.setState({
      childrenName: name
    });
  };

  renderItem = () => {
    let productComponents = products.map((prod, i) => {
      return (
        <div key={i} className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <SmartphoneItem phone={prod} getProductName={this.props.getName} />
        </div>
      );
    });
    return productComponents;
  };

  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">{this.renderItem()}</div>
      </section>
    );
  }
}
