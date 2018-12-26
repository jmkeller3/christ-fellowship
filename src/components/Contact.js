import React, { Component } from "react";
import Sidebar from "./Sidebar";

export default class Contact extends Component {
  render() {
    return (
      <main>
        <div className="main">
          <h2>Contact</h2>
        </div>
        <div className="sidebar">
          <Sidebar links={["Contact Church", "Vist", "Address"]} />
        </div>
      </main>
    );
  }
}
