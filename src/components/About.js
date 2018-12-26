import React, { Component } from "react";
import Sidebar from "./Sidebar";

export default class About extends Component {
  render() {
    return (
      <main>
        <div className="main">
          <h2>About</h2>
        </div>
        <div className="sidebar">
          <Sidebar
            links={["About the Church", "About the Elders", "About Lehi, UT"]}
          />
        </div>
      </main>
    );
  }
}
