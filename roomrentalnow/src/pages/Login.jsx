import React from 'react'
import './Login.css'


const login = () => {
  return (
    <>
    <div className="wrapper">
    <div className="container c1 w-[320px] md:w-[400px]">
      <h1 className="text-[30px]" style={{ color: "rgba(70, 131, 180, 0.902)" }}>Log In</h1>
      <br /><br /><br /><br />
      
      <form className='text-center text-[16px]'>
        <label for="name">Username:</label><br /><br />
        <input
          type="text"
          id="name"
          className='border-1'
        />
        <br /><br /><br />

        <label for="password">Password:</label><br /><br />
        <input
          type="password"
          id="password"
          className='border-1'
        />
        <br /><br />

        <button type="submit">Log In</button>
      </form>
    </div>
    </div>
  </>
  )
}
export default login