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
        <link rel="canonical" href="https://www.mayilon.org/list-of-degrees" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="https://mayilon.org/og/2.png" />
        <meta property="og:title" content="Explore Degree Programs for International Students | MEC Education" />
        <meta property="og:description" content="Discover comprehensive degree programs available for international students through MEC Education." />
        <meta name="keywords" content="list of degrees, Indian universities, degree programs, Bachelor's degrees, Master's degrees, PhD programs, professional certifications, engineering degrees, medical degrees, arts degrees, science degrees, commerce degrees, MBA programs, technical certifications, vocational courses, distance learning programs, university certifications, diploma courses, degree overview, higher education India" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mayilon.org/list-of-degrees" />
      </Helmet>
      <Intro />
      <Hero />
      <DegreeOverview />
      <SearchOfDegree />
    </div>
  );
}

export default ListOfDegrees;
