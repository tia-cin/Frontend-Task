import React from "react";
import "./style/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
      <div>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
};
