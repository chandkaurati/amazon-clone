import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword]  = useState('')
   
    const signin = (e)=>{
        e.preventDefault()
    }

    const register  = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='login'>  
      <Link to='/'>
      <img className='login_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form action="#">
          <label htmlFor="email">Email : </label>  

          <input
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
           type="email"  placeholder='Enter your email' />

          <label htmlFor="password">Password</label>
          
          <input
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
           type="password" placeholder='Enter your password' />

          <button  type='submit' onClick={signin} className='signin_button'>sing in</button>
       
          <p>Lorem ipsum , dipisicing elit. Consequuntur repellat tempora quisquam at in eum debitis aliquid accusamus maiores tempore!</p>
        </form>
      
        <button onClick={register} className='register_button'>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login
