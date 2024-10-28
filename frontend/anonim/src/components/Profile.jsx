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

  const [image, setImage] = useState(null);

  useEffect(() => {
    if(postSuccess) {
      refetch();
    }
     
  }, [postSuccess, refetch])


  const handlePost = async(e) => {
    e.preventDefault();


    if(userInfo) {
      try {
      
        const formData = new FormData();
        formData.append('content', content);

        if(image) {
          formData.append('image', image);
        }

        const post = await userPost(formData).unwrap();
        console.log(post);
      

    } catch (error) {
      console.log(error)
    }
    }else {
      throw new Error('user is not logged in');
        }
   
  }

  // upload image function
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }
   
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  '>
      <form onSubmit={handlePost} action ="/upload" encType='multipart/form-data' className='flex flex-col gap-4 mt-12' >
        <input type='text' onChange={(e) => setContent(e.target.value)} placeholder='რა გაჩუქოს სანტამ?...'
        className='w-full outline-none rounded-md px-56 shadow-lg py-4' />
       
       <input type='file' accept='image/*'  onChange={handleImageChange}/>

        <button type='submit' className='w-full bg-[#e04141] rounded shadow-lg text-white  
      p-2 font-semibold  duration-500 ease   hover:bg-[#ca5454] '
        >{isLoading ? "ქვეყნდება..." : "გამოქვეყნება"}</button>
        </form>

<div >
        {allPosts && allPosts.length > 0 ? (
            allPosts.map(post => (
              <div key={post._id} className='w-[40rem] flex flex-col  bg-white mt-[3rem] rounded-md shadow-lg p-4 text-center' >
             
             <div className='w-full flex items-center'>
                <h4 className='text-yellow-500 font-bold text-xl underline-offset-8  cursor-pointer duration-500 ease hover:underline  ' >{post.username}</h4>
               
           </div>
            

                <p className='mt-8'>
               {post.content.length > 100
                ? `${post.content.substring(0, 100)}...`
                : post.content}

              {post.image && (
                <img
                  src={`http://localhost:5000/uploads/${post.image}`} 
                  alt="Post Image"
                  className="mt-4 w-full h-screen object-cover rounded-lg mx-auto"
                />
              )}
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
            <p className='mt-12 text-white'>სიზმრები არ არის</p>
          )}
</div>
    </div>
  )
}

export default Profile
