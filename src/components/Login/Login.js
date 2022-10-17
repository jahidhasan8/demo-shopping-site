import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Login.css'
const Login = () => {
    const{signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from =location.state?.from?.pathname || '/'
    const handleSubmit=(e)=>{
        e.preventDefault();
          const form=e.target
          const email=form.email.value 
          const password=form.password.value
          console.log(email,password);

          signIn(email,password)
          .then(result=>{
            const user=result.user 
            console.log(user);
            form.reset()
            navigate(from,{replace:true})

          })
          .catch(error=>console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}  >
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" placeholder='Enter Email' required />

            </div>
            <div className="form-control">
                <label htmlFor="email">Password</label>
                <input type="password" name="password" id="" placeholder='Enter Password' required />

            </div>
            <input className='btn-submit' type="submit" value="Login" />
            </form>
            <small><p>New to ema john<Link to='/signup'>Create a new account</Link></p></small>
        </div>
    );
};

export default Login;