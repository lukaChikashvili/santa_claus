import React from 'react'
import { Link } from 'react-router-dom'
import { KeyRound, UserPlus } from 'lucide-react'

const NavBar = () => {
  return (
    <header className='w-full  flex items-center justify-between px-16 py-8'>
       <h1 className='text-white text-2xl font-bold'>მომიყევი+</h1>

       <nav className='flex items-center gap-8 text-white font-bold text-xl' >

          <Link to = "/register" className='flex items-center gap-4'><UserPlus />რეგისტრაცია</Link>
          <Link to = "/login" className='flex items-center gap-4'><KeyRound />შესვლა</Link>
       </nav>
    </header>
  )
}

export default NavBar
