import { BookA, Pencil } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
   
    const { userInfo } = useSelector(state => state.auth);



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

        <form className='flex flex-col gap-8 w-1/2 mt-12'>
        <input type='text' value = {userInfo.username}  placeholder='სახელი...'  className='p-2 rounded outline-none shadow'/>
       <input type='email'  value = {userInfo.email}  placeholder='ელ-ფოსტა..'  className='p-2 rounded outline-none shadow' />
       <input type='password' value = {userInfo.password}  placeholder='პაროლი..' className='p-2 rounded outline-none shadow' />
       <button type='submit' className='w-full bg-[#BED754] rounded shadow-lg text-white  shadow-gray-700 p-2 font-semibold duration-500 ease hover:bg-[#6b7a26]'>რედაქტირება</button>
        </form>
    </div>
  )
}

export default UserProfile
