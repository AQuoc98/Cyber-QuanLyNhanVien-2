import React, { Component } from "react";
import Index from "./containers/index";
import { DemoStateful } from "./demo/demoStateful";
import EmployeeManagement from "./containers/EmployeeManagement";

class App extends Component {
  render() {
    return (
      <EmployeeManagement/>
      // <Index />
      // <DemoStateful/>
    );
  }
}

export default App;
