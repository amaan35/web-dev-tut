import React from 'react'
import propTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
      {props.name} has age {props.age}
    </div>
  )
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

export default Student
