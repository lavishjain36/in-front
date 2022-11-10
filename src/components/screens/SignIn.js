import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn=()=> {
  const [name,setName]=useState("");
  const [password,serPassword]=useState("");
  const [email,setEmail]=useState("");


  return (
    <div className='mycard'>
      <div className="card auth-card input-field">
      <h2>Instagram</h2>
       <input 
       type="text"
       placeholder='email'
       value={name}
       />
       <input
       type="text"
       placeholder='password'
       />
         <button className="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action">
         Submit
         </button>
         <h5>
            <Link to="/signup">Don't Have an account?</Link>
          </h5>
      </div>
    </div>
  )
}

export default SignIn