import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreatePostMutation, useGetAllPostsQuery, useLogoutMutation } from '../redux/api/userSlice';
import { logout } from '../redux/features/authSlice';
import { useNavigate } from 'react-router';
import { HeartIcon, MessageSquareMore, PlusIcon, ThumbsUp } from 'lucide-react';

const Profile = () => {
  
  const [content, setContent] =  useState('');

  const [userPost, {isLoading, isSuccess: postSuccess}, ] = useCreatePostMutation();
  const { data: allPosts, refetch } = useGetAllPostsQuery();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if(postSuccess) {
      refetch();
    }
     
  }, [postSuccess, refetch])


  const handlePost = async(e) => {
    e.preventDefault();


    if(userInfo) {
      try {
      
       const post = await userPost({content}).unwrap();
       console.log(post)
      

    } catch (error) {
      console.log(error)
    }
    }else {
      throw new Error('user is not logged in');
        }
   
  }
   
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  '>
      <form onSubmit={handlePost} className='flex flex-col gap-4 mt-12' >
        <input type='text' onChange={(e) => setContent(e.target.value)} placeholder='მოგვიყევი შენი ისტორია...'
        className='w-full outline-none rounded-md px-56 shadow-lg py-4' />
        <button type='submit' className='w-full bg-[#BED754] rounded shadow-lg text-white  shadow-gray-700 p-2 font-semibold duration-500 ease hover:bg-[#6b7a26]'
        >{isLoading ? "ქვეყნდება..." : "გამოქვეყნება"}</button>
        </form>

<div >
        {allPosts && allPosts.length > 0 ? (
            allPosts.map(post => (
              <div key={post._id} className='w-[50rem] h-[15rem] bg-white mt-[3rem] rounded-md shadow-lg p-4 text-center' >
             
                <h4 className='text-xl mr-[38rem] font-semibold cursor-pointer hover:underline hover:underline-offset-8 ' >{post.username}</h4>
                <p className='mr-[40.5rem] mt-2 font-bold text-[#BED754] '>50 გამომწერი</p>
           
              
                <p className='mt-4'>
               {post.content.length > 100
                ? `${post.content.substring(0, 100)}...`
                : post.content}
</p>

<hr className='mt-4' />

   <div className='p-4 mt-4 flex items-center gap-8 justify-center '>
     <button className='flex items-center gap-4 p-2 rounded-md duration-500 ease hover:bg-gray-200'><ThumbsUp />მოწონება</button>
     <button className='flex items-center gap-4 p-2 rounded-md duration-500 ease hover:bg-gray-200'><MessageSquareMore />კომენტარი</button>
     <button className='flex items-center gap-4 p-2 rounded-md duration-500 ease hover:bg-gray-200'><HeartIcon />შენახვა</button>
  </div>
               
              </div>
            ))
          ) : (
            <p className='mt-12 text-white'>პოსტები არ არის</p>
          )}
</div>
    </div>
  )
}

export default Profile
