import React from 'react'
import Carousel from './home/Carousel'
import About from './home/About'
import Service from './home/Service'
import Locations from './home/Locations'

function Home() {
    return (
        <div className="">
            <Carousel />
            <About />
            <Service />
            <Locations />
        </div>
    )
}

export default Home