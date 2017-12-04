import './register.scss'

import React from 'react'

import MainLayout from './main-layout'

const Register = () => {
  let username
  let password

  return (
    <MainLayout>
      <form onSubmit={(e) => {
        e.preventDefault()

        console.log(username.value)
        console.log(password.value)
      }}>
        <input
          className='register'
          ref={node => { username = node }}
          placeholder='Username'
          autoFocus
        /><br />
        <input
          className='register'
          ref={node => { password = node }}
          type='password'
          placeholder='Password'
        /><br />
        <div className='error' />
        <button className='register' type='submit'>Register</button>
      </form>
    </MainLayout>
  )
}

export default Register
