import React from 'react'
import { JoinMenu } from '../data'

function JoinMegamenu() {
  return (
    <div className='join-megamenu'>
        <p className='caption'>Join a...</p>
        {JoinMenu.map((props)=> {
            return (
                <div className='join-type'>
                    <p>{props.text}</p>
                    <div className='icons'>
                        <p className={` ${props.class}`}>{props.icon}</p>
                        <p>{props.icon2}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default JoinMegamenu;