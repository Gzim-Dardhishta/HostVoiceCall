import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import email from "../../../../assets/LogIn/email.svg"
import lock from "../../../../assets/LogIn/lock.svg"
import eye from "../../../../assets/LogIn/eye.svg"

const LogInForm = () => {

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  return (
    <div className='form-container' data-aos="flip-left">
      <h6 className='form-title'>
        <FormattedMessage id='login' defaultMessage="Log In" />
      </h6>
      <p className='welcome-text'>
        <FormattedMessage id='login-text' defaultMessage="Welcome back user, fill in the brackets your info." />
      </p>

      <form action="">
        <div className="input-container">
          <label htmlFor="">
            <FormattedMessage id='email' defaultMessage="Email" />
          </label>
          <div className="inner-input-container">
            <span className="email-icon" style={{ content: `url(${email})` }}></span>
            <input
              type="email"
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='form-input'
            />
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="">
            <FormattedMessage id='password' defaultMessage="Password" />
          </label>
          <div className="inner-input-container">
            <span className="lock-icon" style={{ content: `url(${lock})` }}></span>
            <input
              type="password"
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your email'
              className='form-input'
            />
            <span className="eye-icon" style={{ content: `url(${eye})` }}></span>
          </div>
        </div>

        <div className='agree-terms'>
          <div className='inner-row'>
            <input type='checkbox' name='keep-logged' id='keep-logged' />
            <label htmlFor='keep-logged' className='form-label-checkbox'>
              <FormattedMessage id='remember' defaultMessage="Remember me" />
            </label>
          </div>
          <Link to='/' className='link'>
            <FormattedMessage id='forgot' defaultMessage="Forgot Password?" />
          </Link>
        </div>

        <div className='button-container'>
          <button type='submit' className='submit-button'>
            <FormattedMessage id='login' defaultMessage="Log In" />
          </button>
        </div>

        <div className="signup-link">
          <p>
            <FormattedMessage id='new-text' defaultMessage="New to HostVoiceCalls?" />
          </p>
          <Link to='/SignUp'>
            <FormattedMessage id='signup' defaultMessage="Sign Up" />
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LogInForm