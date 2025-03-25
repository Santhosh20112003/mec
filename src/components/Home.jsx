import React from 'react'
import Carousel from './home/Carousel'
import About from './home/About'
import Service from './home/Service'
import Locations from './home/Locations'
import References from './home/References'
import Links from './home/Links'
import Gallery from './home/Gallery'
import {Helmet} from "react-helmet"

function Home() {
    return (
        <div className="">
            <Helmet>
                <title>Study Abroad, Overseas Education Consultants, Get Counselling! | MEC India</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content="Study Abroad Consultants - MEC education is an Overseas Consultancy, we help students to study overseas in Australia, Germany, Canada, UK &amp; New Zealand."/>
                <link rel="canonical" href="http://mec.in" />
            </Helmet>
            <Carousel />
            <About />
            <Locations />
            <Service />
            <Gallery />
            <References />
            <Links />
        </div>
    )
}

export default Home