import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'



const Root = () => {
  return (
    <div className='w-11/12 mx-auto mt-6'>
     <NavBar/>
     <Outlet/>
    </div>
  )
}

export default Root
