import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/transfer.css'

const Transferpage = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="containers">
        <h3 className='tr'>Transfer Page</h3>
        <div className="tbox">
            <p className='in'>Input The Necessary Informations</p>
            <input type="text" placeholder='Transfer Amount' className='tin'/>
            <br />
            <input type="text" placeholder='Description' className='tin2'/>
            <div className="divider"></div>
            <input type="text" name="" id=""  placeholder='Recepients Name' className='tin3'/>
            <br />
            <input type="text" name="" id="" placeholder='Recipients Account Number' className='tin4'/>
            <button className='pbtn'>Proceed</button>
        </div>
        <button className='back' onClick={() => navigate('/dash')}> Back to Dashboard</button>
    </div>
    </>
  )
}

export default Transferpage
