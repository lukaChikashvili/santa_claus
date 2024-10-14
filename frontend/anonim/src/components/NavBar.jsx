import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { KeyRound, UserPlus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../redux/api/userSlice'
import { logout } from '../redux/features/authSlice'

const NavBar = () => {

  const { userInfo } = useSelector(state => state.auth);

  const [logOut] = useLogoutMutation();

  const dispatch = useDispatch();
  let navigate = useNavigate();


  const logoutHandler = async (e) => {
     e.preventDefault();

     try {
       await logOut().unwrap();
       dispatch(logout());
       navigate('/login');
       
     } catch (error) {
      console.log(error);
     }
  }



  return (
    <header className='w-full  flex items-center justify-between px-16 py-8'>
       <h1 className='text-white text-2xl font-bold hidden md:block' >მომიყევი+</h1>

       <nav className='hidden md:flex items-center gap-8 text-white font-bold text-xl ' >

        {
            userInfo ? (
              <div className='flex items-center gap-8'>
                 <p className='text-2xl text-[#BED754]'>{userInfo.username}</p>
                <button onClick={logoutHandler} className='line'>გასვლა</button>
                </div>
            ) : (
                <>
                <Link to = "/register" className='flex items-center gap-4'><UserPlus />რეგისტრაცია</Link>
                <Link to = "/login" className='flex items-center gap-4'><KeyRound />შესვლა</Link>
                </>
            )
        }

        
         
       </nav>

       
    </header>
  )
}

export default NavBar
