import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <Link to="/">Search</Link>
      </div>
      <div>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
};
