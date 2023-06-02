import React from "react";
import "./Show.css";
import { Link } from "react-router-dom";

const Show = ({ eachShow }) => {
  const { show } = eachShow;
  return (
    <Link to={`shows/${show.id}`}>
      <div className="show-card shadow">
        <img src={show.image.medium} alt="" />
        <div className="card-content">
          <h1 className="fs-5 fw-bolder text-light">{show.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Show;
