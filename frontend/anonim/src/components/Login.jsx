import React, { useState } from 'react'
import { useLoginMutation } from '../redux/api/userSlice';
import { useDispatch } from 'react-redux';
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
    <div>
      login
      <form onSubmit={handleLogin}>
      
       <input type='email' value ={email} placeholder='email..' onChange={(e) => setEmail(e.target.value)} />
       <input type='password' value = {password} placeholder='password..' onChange={(e) => setPassword(e.target.value)}  />

       <button type='submit'>{isLoading ? "loging in.." : "log in"}</button>
       </form>
    </div>
  )
}

export default Login
