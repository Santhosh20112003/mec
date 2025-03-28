import React from "react";
import Hero from "./degrees/Hero";
import SearchOfDegree from "./degrees/SearchOfDegree";
import DegreeOverview from "./degrees/DegreeOverview";
import Intro from "./degrees/Intro";
import { Helmet } from "react-helmet";

function ListOfDegrees() {
  return (
    <div>
      <Helmet>
        <title>Explore Degree Programs for International Students | MEC Education</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Discover comprehensive degree programs available for international students through MEC Education's overseas consultancy services for Australia, Germany, Canada, UK & New Zealand."
        />
        <link rel="canonical" href="http://mec.in/degrees" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Explore Degree Programs for International Students | MEC Education" />
        <meta property="og:description" content="Discover comprehensive degree programs available for international students through MEC Education." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Intro />
      <Hero />
      <DegreeOverview />
      <SearchOfDegree />
    </div>
  );
}

export default ListOfDegrees;
