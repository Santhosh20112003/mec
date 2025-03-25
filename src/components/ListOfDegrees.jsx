import React from "react";
import Hero from "./degrees/Hero";
import SearchOfDegree from "./degrees/SearchOfDegree";
import DegreeOverview from "./degrees/DegreeOverview";
import Intro from "./degrees/Intro";

function ListOfDegrees() {
  return (
    <div>
      <Intro />
      <Hero />
      <DegreeOverview />
      <SearchOfDegree />
    </div>
  );
}

export default ListOfDegrees;
