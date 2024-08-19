import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/logs.css'
import '../css/transfer.css'
import { toast } from 'react-toastify'

const Editpage = () => {
  const[user, setUser] = useState('')
  const[pass, setPass] = useState('')
  const[email, setEmail] = useState('')
  const[account, setAccount] = useState('')
  const navigate = useNavigate()
  const handle = () => {
    toast.success('Details Updated Succesfully')
    setTimeout(() => {
    navigate('/login')
    }, 500)
  }
  return (
    <>
    <div className="containerrr">
        <form> 
          <p className='tit'>Update Your Account Details</p>
           <input type="text" placeholder='New Username' required className='inp'value={user} onChange={(e) => {
          setUser(e.target.value)
        }}/>
        <br />
        <input type="password" name="" placeholder='New Password' required id="" className='inp2' value={pass} onChange={(e) => {
          setPass(e.target.value)
        }}/>
        <br />
        <input type="email" name="" placeholder="New Email" id=""  className='inp3' value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} required/>
        <br />
        <select name="" id="" className='inp4' value={account} onChange={(e) => {
          setAccount(e.target.value)
        }} required>
          <option value="" disabled> New Account Type?</option>
          <option value="Personal Account">Personal Account</option>
          <option value="Work Account">Work Account</option>
          <option value="Savings Account">Savings Account</option>
        </select>
        <button className="btnnn" onClick={handle} > 
          Update Details
        </button>
        </form>
        <button className='backk' onClick={() => navigate('/dash')}> Back to Dashboard</button>
      </div>
    </>
  )
}

export default Editpage
