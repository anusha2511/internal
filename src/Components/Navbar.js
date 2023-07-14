import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-info navbar-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/">
                    Education website 
                    
                </Link>
                
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/menu">
                                Work It
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">
                                Portfolio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">
                                Tutorials
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;