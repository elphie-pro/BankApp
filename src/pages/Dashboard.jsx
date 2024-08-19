import React from 'react'
import Sidecards from '../components/Sidecards'
import Middlecards from '../components/Middlecards'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const {id} = useParams()
  return (
    <>
    <Sidecards />
    <Middlecards userId={id}/>
    </>
  )
}

const userLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/user/${id}`)
  const data = await res.json()
  return data;
};
export {Dashboard as default, userLoader}
