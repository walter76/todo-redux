import './main-layout.scss'

import React from 'react'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <article>
      <h1>Dead-Simple ToDo App</h1>
      {children}
    </article>
  )
}

MainLayout.propTypes = {
  'children': PropTypes.node.isRequired
}

export default MainLayout
