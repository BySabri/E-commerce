import React from 'react'
import {Link} from 'react-router-dom' 

export default function PageNotFound() {
  return (
    <>
        <div className="container text-center">
            <h1>404-PAGE NOT FOUND</h1>
            <Link to='/' className='btn btn-warning'>Return to Home Page</Link>
        </div>
    </>
  )
}
