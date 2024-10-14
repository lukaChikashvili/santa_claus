import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreatePostMutation, useLogoutMutation } from '../redux/api/userSlice';
import { logout } from '../redux/features/authSlice';
import { useNavigate } from 'react-router';

const Profile = () => {
  
  const [content, setContent] =  useState('');

  const [userPost, {isLoading}] = useCreatePostMutation();

 
  const { userInfo } = useSelector(state => state.auth);


  const handlePost = async(e) => {
    e.preventDefault();


    if(userInfo) {
      try {
      
        const post = await userPost({content}).unwrap();
       
      

    } catch (error) {
      console.log(error)
    }
    }else {
      throw new Error('user is not logged in');
        }
   
  }
   
  return (
    <div>
      <form onSubmit={handlePost}>
        <input type='text' onChange={(e) => setContent(e.target.value)}/>
        <button type='submit'>{isLoading ? "publishing..." : "Publish"}</button>
        </form>

    </div>
  )
}

export default Profile
