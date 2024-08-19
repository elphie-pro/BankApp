import React from 'react'
import { useNavigate } from 'react-router-dom'


const Servicespage = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="conatiners">
      <div className="tbox">
      <p className='inn'>These are neccesary informations that can be used to acquire money</p>
      <p className='in'>Account Number: 884577956</p>
      <p className='in'>Account id: Saliu101</p>
      </div>
      <button className='back' onClick={() => navigate('/dash')}> Back to Dashboard</button>
    </div>
    </>
  )
}

export default Servicespage
