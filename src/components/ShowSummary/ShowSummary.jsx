import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./showSummary.css";
import { Button } from "react-bootstrap";
import ModalForm from "../BookMovie/ModalForm/ModalForm";

const ShowSummary = () => {
  const data = useLoaderData();
  const [modalShow, setModalShow] = useState(false);
  const { name, status, image, summary, genres, premiered, language, rating } =
    data;
  return (
    <div className="container-sm py-5 summary-container ">
      <div className="img-box">
        <img className="" src={image.original} alt="" />
      </div>
      <div className="content-box">
        <h1 className="text-danger">{name}</h1>
        <div>
          <div className="d-flex gap-2">
            <span className="fw-bold ">Genres:</span>{" "}
            {genres?.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <p>
            <span className="fw-bold ">Language:</span> {language}
          </p>
          <p>
            <span className="fw-bold ">Premiered:</span> {premiered}
          </p>
          <p>
            <span className="fw-bold ">Rating:</span> {rating.average}
          </p>
          <p>
            <span className="fw-bold ">Status:</span> {status}
          </p>
          <p>
            <span className="fw-bold ">Summary:</span>{" "}
            {summary.split("<p>")[1].split("</p>").join("")}
          </p>
        </div>
        <Button
          className="book-btn"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Book Now
        </Button>
        <ModalForm
          show={modalShow}
          onHide={() => setModalShow(false)}
          showdata={data}
        ></ModalForm>
      </div>
    </div>
  );
};

export default ShowSummary;
