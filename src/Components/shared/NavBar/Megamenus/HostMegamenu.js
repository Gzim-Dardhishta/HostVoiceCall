import React from 'react'
import { Link } from 'react-router-dom'
import { HostMenu } from '../data'

const HostMegamenu = () => {
  return (
    <Link to='/' className='host-megamenu'>
        <p className='caption'>Host using a ...</p>
        {HostMenu.map((props) => {
            return (
                <Link to='/' className='host-menu'>
                    <p>{ props.text }</p>
                    <p>{ props.icon }</p>
                </Link>
            )
        })}
    </Link>
  )
}

export default HostMegamenu