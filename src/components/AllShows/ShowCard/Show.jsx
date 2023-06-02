import React from "react";
import './Show.css';

const Show = ({ eachShow }) => {
  const { show } = eachShow;
  console.log(show);
  return (
    <div className="show-card shadow">
      <img src={show.image.medium} alt="" />
      <div className="card-content">
        <h1 className="fs-5 fw-bolder text-light">{show.name}</h1>
      </div>
    </div>
  );
};

export default Show;
