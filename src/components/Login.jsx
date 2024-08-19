import React from 'react'
import '../css/logs.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const[username, setUsername] = useState('')
  const[pass, setPass] = useState('')
  const navigate = useNavigate()

  const isValid = () => {
    if (username === "" || pass === "") {
      toast.warning("Please provide both username and password");
      return false;
    }
    return true;
  };


  const proceedLogin = (e) => {
    e.preventDefault();

    if (!isValid()) return;

  
    fetch("http://localhost:3000/user")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch username data");
        }
        return res.json();
      })
      .then((data) => {
        // Find username by email
        const user = data.find((u) => u.username === username);
        if (user) {
          // Check if password matches
          if (user.pass === pass) {
            toast.success("Login successful");
            navigate("/dash");
          } else {
            toast.error("Incorrect password");
          }
        } else {
          toast.error("Username not found");
        }
      })
      .catch((err) => {
        toast.error("Login failed: " + err.message);
      });
  };

  return (
    <>
      <div className="container">
        <p className='tit'>Login </p>
        <form action="" onSubmit={proceedLogin}>
            <input type="text" placeholder='Username'  className='inp'value={username} onChange={(e) => {
          setUsername(e.target.value)
        }}/>
        <br />
        <input type="password" name="" placeholder='Password'  id="" className='inp2' value={pass} onChange={(e) => {
          setPass(e.target.value)
        }}/>
        <br />
        <Link to='/create' className='forgot'>Forgot Password?</Link>
        <button className="btnn"  > 
          Login 
        </button>
        <div className="ac">
        <p className='dont'>Don't Have An Account? <Link to='/create' className='lin'>Click Here</Link></p>
        </div>
        </form>
      </div>
    </>
  )
}

export default Login
