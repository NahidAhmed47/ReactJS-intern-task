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
          <div className="d-flex gap-2">
            {show.genres?.map((name, index) => (
              <p key={index}>{name}{show.genres.length > 1 && ','}</p>
            ))}
          </div>
          <p className="fs-6 text-danger">Click for Details</p>
        </div>
      </div>
    </Link>
  );
};

export default Show;
