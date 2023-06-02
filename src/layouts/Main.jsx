import React from "react";
import Navbar from "../components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Main = () => {
  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Main;
