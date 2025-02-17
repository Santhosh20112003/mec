import React from 'react'
import ForeignStudents from './student/ForeignStudents'
import IndianStudents from './student/IndianStudents'
import Certifications from './student/Certifications'

function Students() {
  return (
    <div>
      <ForeignStudents />
      <IndianStudents />
      <Certifications />
    </div>
  )
}

export default Students