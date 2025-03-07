import React, {useState} from 'react'
import Toolbar from './Toolbar/Toolbar'
import Backdrop from './BackDrop/Backdrop'
import Sidebar from './Sidebar/Sidebar';
import './MobileNav.scss';


function MobileNav() {


    const [openSideDrawer, setOpenSideDrawer] = useState(false);
    function showDrawer(){
        setOpenSideDrawer(!openSideDrawer);
    }

    function backdropClickHandler(){
        setOpenSideDrawer(false);
    }

    let sideDrawer;
    let backdrop;

    if(openSideDrawer){
        sideDrawer = <Sidebar click={backdropClickHandler} />
        backdrop = <Backdrop click={backdropClickHandler} />
    }

  return (
    <div className='mobile-nav'>
        <Toolbar drawerClickHandler={showDrawer} iconHandler={openSideDrawer} />
        {sideDrawer}
        {backdrop}
    </div>
  )
}

export default MobileNav