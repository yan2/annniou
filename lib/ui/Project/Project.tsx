import * as React from 'react'

import './Project.scss'

const Project = (props) => {
  const { heading } = props

  return (
    <div className="d735 container">
      <h1 className="display-1">{heading}</h1>
    </div>
  )
}

export default Project
