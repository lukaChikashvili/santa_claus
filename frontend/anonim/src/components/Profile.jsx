import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../redux/api/userSlice';
import { logout } from '../redux/features/authSlice';
import { useNavigate } from 'react-router';

const Profile = () => {
  
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
    <div>
       profile
  {userInfo && <h1>{userInfo.username}</h1> }
  <button onClick={logoutHandler}>logout</button>

    </div>
  )
}

export default Profile
