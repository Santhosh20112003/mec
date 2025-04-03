import React from "react";
import { useParams } from "react-router-dom";
import Contact2 from "./contact/Contact2";
import Contact1 from "./contact2/Contact1";
import { Helmet } from "react-helmet";

function ContactMain() {
  const { id } = useParams();
  return (
    <div>
      <Helmet>
        <title>Contact Us | MEC Education Consultants</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Get in touch with MEC education consultants for personalized counselling on studying abroad in Australia, Germany, Canada, UK & New Zealand."
        />
        <link rel="canonical" href="http://mayilon.org/contact" />
        <meta
          name="keywords"
          content="Contact MEC, study abroad, overseas education consultancy, study abroad consultants, education consultancy, study abroad programs, international students, overseas education"
        />
         <meta property="og:image" content="https://mayilon.org/og/4.png" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | MEC Education Consultants" />
        <meta property="og:description" content="Get in touch with MEC education consultants for personalized counselling on studying abroad." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Contact1 id={id} />
      <Contact2 />
    </div>
  );
}

export default ContactMain;
