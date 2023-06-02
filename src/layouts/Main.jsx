import React from "react";
import Navbar from "../components/Headers/Navbar";
import AllShows from "../components/AllShows/AllShows";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
