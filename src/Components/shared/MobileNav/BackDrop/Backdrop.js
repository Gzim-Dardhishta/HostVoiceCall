import React from 'react';
import './backdrop.scss';

function Backdrop(props) {
  return (
    <div className='nav-backdrop' onClick={props.click}></div>
  )
}

export default Backdrop