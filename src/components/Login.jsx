import React from 'react'
import '../css/logs.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const[user, setUser] = useState('')
  const[pass, setPass] = useState('')
  const navigate = useNavigate()

  const isValid= () => {
   let isProceed = true
   let errormessage = 'Input neccesary Information'
    if (user === '' || user === null) {
      isProceed = false
      errormessage
    }
    if (pass === '' || pass === null) {
      isProceed = false
      errormessage
    }

    if(!isProceed) {
      toast.warning(errormessage)
    }

    return isProceed
  }

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (isValid()) {
        ///implentation
        // console.log('proceed');
        fetch("http://localhost:3000/user" + user).then((res) => {
            if(!result.ok) {
              throw new error()
            }
            return res.json();
        }).then((resp) => {
            //console.log(resp)
            if (Object.keys(resp).length === 0) {
                toast.error('Please Enter valid username');
            } else {
                if (resp.pass === pass) {
                    toast.success('Success');
                    navigate('/dash')
                }else{
                    toast.error('Please Enter valid credentials');
                }
            }
        }).catch((err) => {
            toast.error('Login Failed due to :' + err.message);
        });
    }
}

  return (
    <>
      <div className="container">
        <p className='tit'>Login </p>
        <form action="" onSubmit={ProceedLogin}>
            <input type="text" placeholder='Username'  className='inp'value={user} onChange={(e) => {
          setUser(e.target.value)
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
