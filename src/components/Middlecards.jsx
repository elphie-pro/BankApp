import React from 'react'
import '../css/dash.css'
import { useNavigate, useLoaderData, useParams } from 'react-router-dom'
// import usersData from '../user.json'
import { useState, useEffect } from 'react'

const Middlecards = () => {
  const users = useLoaderData()
  const {id} = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  console.log(users)
  return (
   <>
   <div className="box">
    <h1 className='title'>Welcome Back {users.username}</h1>
    <p className='new'>Welcome back to your dashboard! Our finance news section is designed to keep you informed and empowered. Stay updated with top headlines, featuring the latest significant financial news, including updates on major companies, economic policies, and global developments. Trending stories highlight what’s currently driving the market's narrative.
Our market updates provide real-time data on key stock market indices such as the S&P 500, Dow Jones, and NASDAQ, giving you a quick snapshot of market performance. Check current prices of essential commodities like gold, oil, and silver, and stay informed about the latest forex rates for major currency pairs to assist with foreign currency dealings and international investments.
Economic indicators offer a broader understanding of the financial landscape. Find updates on interest rates, including central bank decisions that influence borrowing costs and investment returns. Keep track of inflation data with recent statistics on price changes affecting purchasing power and savings. Stay informed about employment figures, such as unemployment rates and job creation numbers, reflecting the labor market's strength and consumer spending potential.
Our personal finance tips section provides practical advice to help you manage your money effectively. Discover saving tips, investment advice, and budgeting strategies to maintain a solid personal budget. Your financial well-being is our priority, and we’re here to support you every step of the way.</p>
   </div>
   <div className="box2">
    <p className='titt'>Account Details</p>
    <p className='hol'>Account Holder: {users.username}</p> 
    <p className='hol'>Account Type: {users.account}</p>
    <p className='hol'>Account Number: {users.id}</p>
     <p className='hol'>Account Email: {users.email}</p>

    <button className='det' onClick={() => navigate('/edit')}>Edit Details</button>
   </div>
   </>

  )
}


export default Middlecards
