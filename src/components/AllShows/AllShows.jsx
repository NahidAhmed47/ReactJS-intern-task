import React, { useEffect, useState } from "react";
import Show from "./ShowCard/Show";

const AllShows = () => {
  const [allShowsData, setAllShowsData] = useState([]);
  useEffect(() => {
    const loadShowData = async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const showsData = await res.json();
      console.log(showsData);
      setAllShowsData(showsData);
    };
    loadShowData();
  }, []);
  console.log(allShowsData[0]?.show?.image?.original);
  return (
    <div className="container-lg my-5 d-flex justify-content-between">
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {allShowsData?.map((show, index) => <Show key={index} eachShow={show}></Show>)}
      </div>
    </div>
  );
};

export default AllShows;
