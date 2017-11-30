import './main-layout.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

const MainLayout = ({ children }) => {
  return (
    <article>
      <h1>Dead-Simple ToDo App</h1>
      <Router>
        {children}
      </Router>
    </article>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout
