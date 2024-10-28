import React, { useState } from 'react'
import { useLoginMutation } from '../redux/api/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../redux/features/authSlice';
import { useNavigate } from 'react-router';



const Login = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   




    const [login, {isLoading}] = useLoginMutation();
  
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/profile');
            
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='w-full flex items-center justify-between px-36 mt-[5rem] '>

    <div>


    </div>

<div className='w-[35%] flex flex-col gap-8  '>
    <h1 className='text-4xl text-white font-bold'>სისტემაში შესვლა</h1>
     
     
    <span className='w-full h-[1.4px] bg-yellow-500'></span>
      <form onSubmit={handleLogin} className='flex flex-col gap-8 '>
   
     <input type='email' value ={email} placeholder='ელ-ფოსტა..' onChange={(e) => setEmail(e.target.value)} className='p-2 rounded outline-none shadow' />
     <input type='password' value = {password} placeholder='პაროლი..' onChange={(e) => setPassword(e.target.value)} className='p-2 rounded outline-none shadow' />

     <button type='submit' className='w-full bg-yellow-500 rounded shadow-lg text-white  shadow-gray-700 p-2 font-semibold duration-500 ease hover:bg-[#6b7a26]'>{isLoading ? "იტვირთება.." : "შესვლა"}</button>
     </form>
     </div>

     

  </div>
  )
}

export default Login
