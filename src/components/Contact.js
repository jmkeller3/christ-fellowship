import React, { Component } from "react";
import Sidebar from "./Sidebar";

export default class Contact extends Component {
  render() {
    return (
      <main>
        <div className="main">
          <h2>Contact</h2>
          <div id="connect">
            <p>Connect with us at the following places</p>
            <span>Email | Facebook | Twitter</span>
          </div>
          <div id="gathering">
            <p>Come visit with us</p>
            <p>Every Sunday: 10:30 AM</p>
          </div>
          <div id="address">
            <p>123 N Elm Dr. Lehi UT, 84043</p>
          </div>
        </div>
        <div className="sidebar">
          <Sidebar
            links={[
              { text: "Contact Church", href: "#contact" },
              { text: "Vist", href: "#visit" },
              { text: "Address", href: "#address" }
            ]}
          />
        </div>
      </main>
    );
  }
}
