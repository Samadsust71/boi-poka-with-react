import React from 'react'
import {Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className='flex flex-col justify-center items-center space-y-4 text-center min-h-screen' >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}><button className='btn btn-outline'>Go Back to Home</button></Link>
    </div>
  )
}

export default ErrorPage
