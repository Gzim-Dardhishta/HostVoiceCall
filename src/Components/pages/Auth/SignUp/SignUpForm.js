import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import person from '../../../../assets/SignUp/person.svg'
import email from '../../../../assets/SignUp/email.svg'
import lock from '../../../../assets/SignUp/lock.svg'
import eye from '../../../../assets/SignUp/eye.svg'
import suggest from '../../../../assets/SignUp/key.svg'

const SignUpForm = () => {

    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    return (
        <div className='signup-form-container' data-aos="fade-right">
            <h6 className='form-title'>
                <FormattedMessage id='login' defaultMessage="Sign Up" />
            </h6>
            <p className='welcome-text'>
                <FormattedMessage id='text' defaultMessage="Fill the brackets down below with your information" />
            </p>

            <form action="" className='signup-form'>
                <div className="name-input-container">
                    <div className="name">
                        <label htmlFor="">
                            <FormattedMessage id='name' defaultMessage="Name" />
                        </label>
                        <div className="inner-input-container">
                            <span className="person-icon" style={{ content: `url(${person})` }}></span>
                            <input
                                type="name"
                                name='name'
                                placeholder='Enter your name'
                                className='form-input'
                            />
                        </div>
                    </div>
                    <div className="last-name">
                        <label htmlFor="">
                            <FormattedMessage id='last-name' defaultMessage="Last name" />
                        </label>
                        <div className="inner-input-container">
                            <span className="person-icon" style={{ content: `url(${person})` }}></span>
                            <input
                                type="name"
                                name='name'
                                placeholder='Enter your last name'
                                className='form-input'
                            />
                        </div>
                    </div>
                </div>

                <div className="email">
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
                </div>

                <div className="password-input-container">
                    <div className="password">
                        <label htmlFor="">
                            <FormattedMessage id='password' defaultMessage="Password" />
                        </label>
                        <div className="inner-input-container">
                            <span className="lock-icon" style={{ content: `url(${lock})` }}></span>
                            <input
                                type="password"
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                className='form-input'
                            />
                            <span className="eye-icon" style={{ content: `url(${eye})` }}></span>
                        </div>
                    </div>
                    <div className="confirm-password">
                        <label htmlFor="">
                            <FormattedMessage id='confirm-pass' defaultMessage="Confirm Password" />
                        </label>
                        <div className="inner-input-container">
                            <span className="lock-icon" style={{ content: `url(${lock})` }}></span>
                            <input
                                type="password"
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Confirm your password'
                                className='form-input'
                            />
                            <span className="eye-icon" style={{ content: `url(${eye})` }}></span>
                        </div>
                    </div>
                </div>

                <Link to='/' className="suggest-password">
                    <span className="suggest-icon" style={{ content: `url(${suggest})` }}></span>
                    <p>
                        <FormattedMessage id='suggest' defaultMessage="Suggest password" />
                    </p>
                </Link>

                <div className='agree-terms'>
                    <div className='inner-row'>
                        <input type='checkbox' name='agreed' id='agreed' />
                        <label htmlFor='agreed-check' className='form-label-checkbox'>
                            <FormattedMessage id='agree' defaultMessage="I agree to HostVoiceCall  " /> 
                            <Link to='/'><FormattedMessage id='agree-terms' defaultMessage="Terms & Conditions" /></Link>
                        </label>
                    </div>
                </div>

                <div className='button-container'>
                    <button type='submit' className='submit-button'>
                        <FormattedMessage id='signup' defaultMessage="Sign Up" />
                    </button>
                </div>

                <div className="login-link">
                    <p>
                        <FormattedMessage id='acc-text' defaultMessage="Already have an account?" />
                    </p>
                    <Link to='/LogIn'>
                        <FormattedMessage id='login' defaultMessage="Log In" />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm