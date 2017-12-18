import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div>
    <h2 className='ui header'>Welcome!</h2>
    <p>This is the most simple fully functional todo application I was able to
    think of. Have fun!</p>
    <p>Feel free to either <Link to='/login'>Login</Link> or
    <Link to='/register'>Sign up!</Link></p>
  </div>
)

export default HomePage
