import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/logs.css'
import { toast } from 'react-toastify'

const Createpage = () => {
  const[user, setUser] = useState('')
  const[pass, setPass] = useState('')
  const[email, setEmail] = useState('')
  const[account, setAccount] = useState('')
  const[deposit, setDeposit] = useState('')
  const navigate = useNavigate()
const isValid = () => {
  let isProceed = true
  let errmessage = 'Please enter all the neccesary information'
  if(user === '' || user === null){
    isProceed = false
    errmessage
  }
  if(pass === '' || pass === null){
    isProceed = false
    errmessage
  }
  if(email === '' || email === null){
    isProceed = false
    errmessage
  }
  if(deposit === '' || deposit === null){
    isProceed = false
    errmessage
  }
  if(!isProceed) {
    toast.warning(errmessage)
  }
  return isProceed 
}

  const handleSubmit = (e) => {
    e.preventDefault()
    let resobj = {user, pass, email, account, deposit}
    if(isValid()) {

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers:{'content-type' : 'Application.json'},
      body: JSON.stringify(resobj)
    }).then((res) => {
      toast.success('Registered Successfully')
      navigate('/login')
    }).catch((err) => {
      toast.error('Registration Failed')
    })
   }
  }

  return (
    <>
    <div className="containerr">
       
        <form onSubmit={handleSubmit}> 
          <p className='tit'>Create An Account</p>
           <input type="text" placeholder='Username'  className='inp'value={user} onChange={(e) => {
          setUser(e.target.value)
        }}/>
        <br />
        <input type="password" name="" placeholder='Password'  id="" className='inp2' value={pass} onChange={(e) => {
          setPass(e.target.value)
        }}/>
        <br />
        <input type="email" name="" placeholder="Email" id=""  className='inp3' value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} />
        <br />
        <select name="" id="" className='inp4' value={account} onChange={(e) => {
          setAccount(e.target.value)
        }} >
          <option value="" disabled>Account Type?</option>
          <option value="Personal Account">Personal Account</option>
          <option value="Work Account">Work Account</option>
          <option value="Savings Account">Savings Account</option>
        </select>
        <input type="text" placeholder='Deposit (Min 5000)' className='inp5' value={deposit} onChange={(e) => {
          setDeposit(e.target.value)
        }} />
        <button className="btnnn" > 
          Create Account
        </button>
        <div className="ac">
        <p className='dont'>Already Have An Account? <Link to='/login' className='lin'>Click Here</Link></p>
        </div>
        </form>
       
      </div>
    </>
  )
}

export default Createpage
