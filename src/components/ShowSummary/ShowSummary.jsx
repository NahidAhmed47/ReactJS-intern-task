import React from "react";
import { useLoaderData } from "react-router-dom";
import "./showSummary.css";

const ShowSummary = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, status, image, summary } = data;
  // TODO: extra tag remove from summary data
  // let summaryOrganized;
  // if (summary.includes("<p>") && summary.includes("<b>") === false) {
  //   summaryOrganized = summary.split("<p>")[1].split("</p>").join("");
  // } else if (summary.includes("<b>")) {
  //   summaryOrganized = summary.split("<p>")[1].split("</p>").split("<b>");
  // } else {
  //   summaryOrganized = summary;
  // }
  // console.log(summaryOrganized);
  return (
    <div className="container-sm py-5 summary-container">
      <div className="img-box">
        <img className="" src={image.original} alt="" />
      </div>
      <div className="content-box">
        <h1>{name}</h1>
        <div>
          <p>Status: {status}</p>
          <p>Summary: {summary}</p>
        </div>
        <button className="book-btn">Book Movie</button>
      </div>
    </div>
  );
};

export default ShowSummary;
