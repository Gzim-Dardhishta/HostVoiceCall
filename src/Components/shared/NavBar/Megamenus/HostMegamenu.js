import React from 'react'
import { HostMenu } from '../data'

const HostMegamenu = () => {
  return (
    <div className='host-megamenu'>
        <p className='caption'>Host using a ...</p>
        {HostMenu.map((props) => {
            return (
                <div className='host-menu'>
                    <p>{ props.text }</p>
                    <p>{ props.icon }</p>
                </div>
            )
        })}
    </div>
  )
}

export default HostMegamenu