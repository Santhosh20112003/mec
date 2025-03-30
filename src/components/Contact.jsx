import React from "react";
import Contact1 from "./contact/Contact1";
import Contact2 from "./contact/Contact2";
import { Helmet } from "react-helmet";

function Contact() {
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
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | MEC Education Consultants" />
        <meta property="og:description" content="Get in touch with MEC education consultants for personalized counselling on studying abroad." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Contact1 />
      <Contact2 />
    </div>
  );
}

export default Contact;
