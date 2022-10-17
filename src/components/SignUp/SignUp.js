import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './SignUp.css'

const SignUp = () => {
   const[error,setError]=useState(null)
    const{createUser}=useContext(AuthContext)

    const handleSubmit=(e)=>{
          e.preventDefault();
          const form=e.target;
          const email=form.email.value;
          const password=form.password.value;
          const confirm=form.confirm.value;
        //   console.log(email,password,confirm);
        if(password.length <6){
            setError('password should be more than 6 characters')
            return
        }
        if(password!==confirm){
            setError('your password did not match')
            return

        }
        createUser(email,password)
        .then(result=>{
            const user=result.user 
            console.log(user);
            form.reset()
        })
        .then(error=>console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" placeholder='Enter Email' required />

            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" placeholder='Enter Password' required />

            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="" placeholder='Confirm Password' required />

            </div>
            <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <small><p>Already have an account?<Link to='/login'>Login</Link></p></small>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;