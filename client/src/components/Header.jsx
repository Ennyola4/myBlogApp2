import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
     <nav className='flex justify-around bg-blue-200 text-black p-4' >
        <div className='Logo'>
            <Link to="/">Dashboard</Link>
        </div>
        <ul className='nav-links flex space-x-4'>
            <Link to="/SignUp">Sign up</Link>
            <Link to="/SignIn">Sign in</Link>

        </ul>
     </nav>
    </div>
  )
}

export default Header
