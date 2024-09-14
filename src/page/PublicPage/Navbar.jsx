import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-8 bg-slate-500 text-slate-950">
      <ul className="flex space-x-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
