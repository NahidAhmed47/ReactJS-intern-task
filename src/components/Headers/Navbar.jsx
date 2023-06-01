import React from "react";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="container-lg shadow ">
      <nav className="pt-2 pb-2">
        <h1 className="fs-2 fw-bolder">
          Show<span className="text-danger">Spotter</span>
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
