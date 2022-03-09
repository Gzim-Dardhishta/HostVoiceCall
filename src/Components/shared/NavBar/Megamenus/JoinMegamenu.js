import React from 'react'
import { JoinMenu } from '../data'

function JoinMegamenu() {
  return (
    <div>
        {JoinMenu.map((props)=> {
            return (
                <div>
                    <p className='join'>Join a...</p>
                    <div>
                        <p>{props.text}</p>
                        <p>{props.icon}</p>
                        <p>{props.icon2}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default JoinMegamenu