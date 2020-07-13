import React, { Component } from 'react';

export class DemoStateful extends Component {
    name = "Dang Trung Hieu";
    hienThi(name,age){
        alert(name + age);
    }
    render() {
        var a = 5;
        var b = 7;
        return (
            <div>
                <h1>Demo Stateful (class Component)</h1>
                <p>Thí dụ về stateful component</p>
                <p>Tổng của a và b là : {a + b}</p>
                <p>Họ Tên: { this.name }</p>
                <button onClick= { () => this.hienThi('hieu',12) } className="btn btn-success">Hiển Thị</button>
                {/* <button onClick= { this.hienThi.bind(this,'cybersoft',12) } className="btn btn-success">Hiển Thị</button> */}
            </div>
        )
    }
}