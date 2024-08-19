import React from 'react'
import '../css/dash.css'
import { useNavigate } from 'react-router-dom'

const sidecards = () => {
  const navigate = useNavigate()
  return (
    <div className="contain">
            <div className="bal">
            <div className="balcon">
              <p className='bb'>Available Balance:</p> 
             <p className='money'>$10,000,000</p>
             <p className='sel'>Select An Option:</p>
              <button className='trans' onClick={()=>{
                navigate('/transfer')
              }}>Transfer</button>
              <br />
              <button className='with' onClick={()=>{
                navigate('/withdraw')
              }}>Withdraw</button>
              <br />
              <button className='add' onClick={()=>{
                navigate('/add')
              }}>Add Money</button>
            </div>
        </div>  
        <div className="bal2">
          <div className="balcon2">
            <p className='ad'>Additional Services:</p>
            <button className='air'>Airtime</button>
              <br />
              <button className='int'>Internet</button>
              <br />
              <button className='bet'>Betting</button>
              <br />
              <button className='ele'>Electricity</button>
              <br />
              <button className='tran'>Transportation</button>
          </div>
          </div> 
    </div>
  )
}

export default sidecards
