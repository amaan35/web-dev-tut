import React from 'react'

const ProjectFields = (name, email, index) => {
  return (
    <div className='dataVal'>
          <h4>{name}</h4>
          <h4>{email}</h4>
          <button>Remove</button>
    </div>
    )
}

export default ProjectFields