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
    <div>
        <form onSubmit={handleRegister}>
       <input type='text' value={username} placeholder='username...' onChange={(e) => setUsername(e.target.value)} />
       <input type='email' value ={email} placeholder='email..' onChange={(e) => setEmail(e.target.value)} />
       <input type='password' value = {password} placeholder='password..' onChange={(e) => setPassword(e.target.value)}  />

       <button type='submit'>{isLoading ? "registering.." : "register"}</button>
       </form>

    </div>
  )
}

export default Register
