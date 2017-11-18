import './footer.scss'

import React from 'react'
import FilterLink from '../containers/filter-link'

const Footer = () => (
  <section>
    <p>
      Show:
      {' '}
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
      {', '}
      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
      {', '}
      <FilterLink filter='SHOW_COMPLETED'>
        Completed
      </FilterLink>
    </p>
  </section>
)

export default Footer
