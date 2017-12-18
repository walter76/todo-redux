import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <div class='ui text container'>
      <h1 class='ui header'>Dead-Simple ToDo App</h1>
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout
