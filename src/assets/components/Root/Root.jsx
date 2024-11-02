import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Root = () => {
  return (
    <div className='w-11/12 mx-auto mt-6'>
     <NavBar/>
     <Outlet/>
     <ToastContainer/>
    </div>
  )
}

export default Root
