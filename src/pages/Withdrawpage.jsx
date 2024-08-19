import React from 'react'
import '../css/transfer.css'
import { useNavigate } from 'react-router-dom'

const Withdrawpage = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="containers">
        <h3 className='tr'>Withdraw Page</h3>
        <div className="tbox">
            <p className='in'>Input The Necessary Informations</p>
            <input type="text" placeholder='Withdraw Amount' className='tin'/>
            <br />
            <input type="text" placeholder='Description' className='tin2'/>
            <button className='pbtnn'>Proceed</button>
        </div>
        <button className='back' onClick={() => navigate('/dash')}> Back to Dashboard</button>
    </div>
    </>
  )
}

export default Withdrawpage
