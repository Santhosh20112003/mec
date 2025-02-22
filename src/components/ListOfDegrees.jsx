import React from 'react'
import Hero from './degrees/Hero'
import SearchOfDegree from './degrees/SearchOfDegree'
import DegreeOverview from './degrees/DegreeOverview'

function ListOfDegrees() {
  return (
    <div>
      <Hero />
      <DegreeOverview />
      <SearchOfDegree />
    </div>
  )
}

export default ListOfDegrees