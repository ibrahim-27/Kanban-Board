import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { userIdAtom } from '../states/User';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

    const [userId, setUserId] = useAtom(userIdAtom);
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        lemail: '',
        lpassword: ''
    });

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const HandleLoginChange = (e) =>   {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const HandleRegisterChange = (e) =>   {
        setRegisterData({...registerData, [e.target.name]: e.target.value});
    }

    const HandleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/login', loginData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user._id);
            setUserId(res.data.user._id);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    const HandleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            let user = await axios.post('http://localhost:3000/user', registerData);
            
        } catch (error) {
            console.log(error)
        }
    }

  

  return (
    <div className='bg-theme-secondary min-h-screen'>
    <h1 className='text-4xl text-center py-6 text-white font-bold'>Kanban Board</h1>
    <div className='h-screen md:h-[500px] flex flex-col gap-2 items-center justify-center md:flex-row md:gap-0'>
        <div className='flex flex-col bg-theme-bg h-full justify-center px-16 rounded-l-md'>
            <h1 className='text-theme-secondary text-2xl text-center mb-4'>Login</h1>
            <form className='flex flex-col gap-6' action="">
                <input onChange={HandleLoginChange} className='px-2 py-1 rounded-md border-theme-secondary' type="text" placeholder="Email" name='lemail'></input>
                <input onChange={HandleLoginChange} className='px-2 py-1 rounded-md border-theme-secondary' type="password" placeholder="Password" name='lpassword'></input>
                <button onClick={HandleLoginSubmit} className='w-1/2 mx-auto bg-theme-secondary px-2 py-1 rounded-md border text-white hover:border-theme-secondary hover:text-theme-secondary hover:bg-theme-bg' type="submit">Login</button>
            </form>
        </div>
        <div className='flex flex-col bg-theme-primary h-full justify-center px-16 rounded-r-md'>
            <h1 className='text-white text-2xl text-center mb-4'>Register</h1>
            <form className='flex flex-col gap-6' action="">
                <input onChange={HandleRegisterChange} className='px-2 py-1 rounded-md' type="text" placeholder="Your Name" name='username'></input>
                <input onChange={HandleRegisterChange} className='px-2 py-1 rounded-md' type="text" placeholder="Email" name='email'></input>
                <input onChange={HandleRegisterChange} className='px-2 py-1 rounded-md' type="password" placeholder="Password" name='password'></input>
                <button onClick={HandleRegisterSubmit} className='w-1/2 mx-auto bg-theme-secondary px-2 py-1 rounded-md border text-white border-theme-secondary hover:text-theme-secondary hover:bg-theme-bg' type="submit">Register</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Auth