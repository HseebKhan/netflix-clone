import React from "react";
import requests from "../Requests";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";

function Homescreen() {
  return (
    <div className="homeScreen">
      {/*Nav */}
      <Nav />

      {/*Banner */}
      <Banner />

      {/*Row */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default Homescreen;
