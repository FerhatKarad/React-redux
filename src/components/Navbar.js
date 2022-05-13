import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className='container'>
                    <Link to='/' className='navbar-brand'> Redux Toolkit Example</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/counter' className='nav-link'> Counter</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/counter-redux' className='nav-link'> Counter-Redux</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/employees' className='nav-link'> Employees</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/userlist' className='nav-link'> UserList</Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        </div>
    )
}
