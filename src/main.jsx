import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import ShowSummary from "./components/ShowSummary/ShowSummary";
import AllBookings from "./components/AllBookings/AllBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'shows/:id',
        element: <ShowSummary></ShowSummary>,
        loader: ({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path: 'bookings',
        element: <AllBookings></AllBookings>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
