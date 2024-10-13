import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useRegisterMutation } from '../redux/api/userSlice';
import { setCredentials } from '../redux/features/authSlice';


const Register = () => {
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [register, {isLoading}] = useRegisterMutation();


 


    const handleRegister = async (e) => {
       e.preventDefault();

       try {
          
           const res = await register({username, email, password}).unwrap();
           dispatch(setCredentials({...res}));
           navigate('/login');



       } catch (error) {
         console.log('can not register')
       }
    }

  return (
    <div className='w-full flex items-center justify-between px-36 mt-[5rem]'>

      <div>

      </div>

<div className='w-[35%] flex flex-col gap-8 '>
      <h1 className='text-4xl text-white font-bold'>რეგისტრაცია</h1>
      <span className='w-full h-[1.4px] bg-[#BED754]'></span>
        <form onSubmit={handleRegister} className='flex flex-col gap-8 '>
       <input type='text' value={username} placeholder='სახელი...' onChange={(e) => setUsername(e.target.value)} className='p-2 rounded outline-none shadow'/>
       <input type='email' value ={email} placeholder='ელ-ფოსტა..' onChange={(e) => setEmail(e.target.value)} className='p-2 rounded outline-none shadow' />
       <input type='password' value = {password} placeholder='პაროლი..' onChange={(e) => setPassword(e.target.value)} className='p-2 rounded outline-none shadow' />

       <button type='submit' className='w-full bg-[#BED754] rounded shadow-lg text-white  shadow-gray-700 p-2 font-semibold duration-500 ease hover:bg-[#6b7a26]'>{isLoading ? "იტვირთება.." : "რეგისტრაცია"}</button>
       </form>
       </div>
    </div>
  )
}

export default Register
