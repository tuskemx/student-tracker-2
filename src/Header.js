import React from "react";
import { Link } from "@reach/router";

export default function Header() {
  return (
    <div>
      <h1>Student Tracker</h1>
      <Link to="/student-list">Student List</Link>
      <br />
      <Link to="/block">Block</Link>
    </div>
  );
}


