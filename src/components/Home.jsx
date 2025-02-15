import React from 'react'
import Carousel from './home/Carousel'
import About from './home/About'
import Service from './home/Service'
import Locations from './home/Locations'
import References from './home/References'
import Links from './home/Links'
import Gallery from './home/Gallery'

function Home() {
    return (
        <div className="">
            <Carousel />
            <About />
            <Service />
            <Locations />
            <Gallery />
            <References />
            <Links />
        </div>
    )
}

export default Home