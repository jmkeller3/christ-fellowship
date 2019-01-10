import React from "react";

import "./Sidebar.css";

export default function Sidebar(props) {
  const links = props.links.map(link => (
    <li key={link.text}>
      <a href={link.href}>{link.text}</a>
    </li>
  ));

  return props.links !== undefined ? (
    <div className="sidebar-links">
      <ul>{links}</ul>
    </div>
  ) : null;
}
