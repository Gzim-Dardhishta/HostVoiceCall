import React from 'react'
import { Link } from 'react-router-dom';
import { JoinMenu } from '../data'

function JoinMegamenu() {
  return (
    <div className='join-megamenu'>
        <p className='caption'>Join a...</p>
        {JoinMenu.map((props)=> {
            return (
                <Link to='/' className='join-type'>
                    <p>{props.text}</p>
                    <div className='icons'>
                        <p className={` ${props.class}`}>{props.icon}</p>
                        <p>{props.icon2}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default JoinMegamenu;