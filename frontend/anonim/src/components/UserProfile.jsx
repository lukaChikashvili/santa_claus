import { BookA, Pencil } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateProfileMutation } from '../redux/api/userSlice';
import { setCredentials } from '../redux/features/authSlice';

const UserProfile = () => {
   
    const { userInfo } = useSelector(state => state.auth);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [profileUpdate] = useUpdateProfileMutation();


     const dispatch = useDispatch();

     useEffect(() => {
        setUsername(userInfo.username);
        setEmail(userInfo.email)
   }, [userInfo.email, userInfo.username]);



    const handleProfileUpdate = async(e) => {
        e.preventDefault();

        
            try {
             
                const res = await profileUpdate({_id: userInfo._id, username, email, password}).unwrap();
                dispatch(setCredentials({...res}))
               
    
    
            } catch (error) {
                console.log(error);
            }
        
       

    }


  return (
    <div className='px-16 py-12'>
        <div className='flex items-center justify-between'>
        <h1 className='text-white font-bold text-4xl'>{userInfo.username}</h1>
        <div className='flex items-center gap-12'>
        <p className='flex items-center gap-4 text-white line cursor-pointer' ><BookA /> ჩემი პოსტები</p>
        <p className='flex items-center gap-4 text-white line cursor-pointer' ><Pencil /> რედაქტირება</p>
        </div>
        </div>
        <hr className='mt-4'/>

        <form className='flex flex-col gap-8 w-1/2 mt-12' onSubmit={handleProfileUpdate}>
        <input type='text' value = {username}  placeholder='სახელი...' onChange={(e) => setUsername(e.target.value)} className='p-2 rounded outline-none shadow'/>
       <input type='email'  value = {email}  placeholder='ელ-ფოსტა..'  onChange={(e) => setEmail(e.target.value)} className='p-2 rounded outline-none shadow' />
       <input type='password' value = {password}  placeholder='პაროლი..' onChange={(e) => setPassword(e.target.value)} className='p-2 rounded outline-none shadow' />
       <button type='submit' className='w-full bg-[#BED754] rounded shadow-lg text-white  shadow-gray-700 p-2 font-semibold duration-500 ease hover:bg-[#6b7a26]'>რედაქტირება</button>
        </form>
    </div>
  )
}

export default UserProfile
