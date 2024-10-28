import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { KeyRound, UserPlus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../redux/api/userSlice'
import { logout } from '../redux/features/authSlice'
import stick from '../assets/stick.png'
import gift from '../assets/gift.png'
import bell from '../assets/bell.png'

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
    <header className='w-full  flex items-center justify-between px-12 py-8'>
       <h1 className='text-white text-2xl font-bold cursor-pointer hidden md:block' onClick={() => navigate("/profile")}>
          <img src = {gift} className='w-16 absolute top-2' />
         <span className='ml-20'>მაჩუქე.ge</span> 
       </h1>

       <nav className='hidden md:flex items-center gap-4 text-white font-bold text-xl ' >

        {
            userInfo ?  (
              <div className='flex items-center gap-8'>
                 <p className='text-xl text-white cursor-pointer line flex items-center gap-4' onClick={() => navigate('/userProfile')}><img className='w-8' src={bell} />{userInfo.username}</p>
                <button onClick={logoutHandler} className='line'>გასვლა</button>
                </div>
            ) : (
                <>
                <Link to = "/register" className='flex items-center gap-4'><img src={stick} className='w-12'/>რეგისტრაცია</Link>
                <Link to = "/login" className='flex items-center gap-4'><img src={stick} className='w-12'/>შესვლა</Link>
                </>
            )
        }

        
         
       </nav>

       
    </header>
  )
}

export default NavBar
