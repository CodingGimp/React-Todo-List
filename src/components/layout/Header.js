import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='text-center mb-3 bg-dark text-light' >
            <h1>Todo List</h1>
            <Link className='page-item active' to='/'>Home</Link> | <Link className='text-light' to='/about'>About</Link>
        </header>
    )
}
