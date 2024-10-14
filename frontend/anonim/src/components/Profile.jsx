import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreatePostMutation, useGetAllPostsQuery, useLogoutMutation } from '../redux/api/userSlice';
import { logout } from '../redux/features/authSlice';
import { useNavigate } from 'react-router';

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
    <div className='flex flex-col items-center justify-center '>
      <form onSubmit={handlePost} className='flex flex-col gap-4' >
        <input type='text' onChange={(e) => setContent(e.target.value)} placeholder='მოგვიყევი შენი ისტორია...'
        className='w-full outline-none rounded-md px-56 shadow-lg py-4' />
        <button type='submit' className='w-full bg-[#BED754] rounded shadow-lg text-white  shadow-gray-700 p-2 font-semibold duration-500 ease hover:bg-[#6b7a26]'
        >{isLoading ? "ქვეყნდება..." : "გამოქვეყნება"}</button>
        </form>

<div >
        {allPosts && allPosts.length > 0 ? (
            allPosts.map(post => (
              <div key={post._id} className='w-[50rem] h-[10rem] bg-white mt-[3rem] rounded-md shadow-lg p-4 text-center' >
                <h4 className='text-2xl' >{post.username}</h4>
                <p>
               {post.content.length > 100
                ? `${post.content.substring(0, 100)}...`
                : post.content}
</p>
                <small>{new Date(post.createdAt).toLocaleString()}</small>
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
