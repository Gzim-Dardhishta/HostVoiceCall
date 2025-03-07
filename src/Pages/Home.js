import React from 'react'
import Brands from '../Components/pages/Home/Brands'
import BussinesCommunication from '../Components/pages/Home/BussinesCommunication'
import CallCenter from '../Components/pages/Home/CallCenter'
import CloudBasedPhoneSystem from '../Components/pages/Home/CloudBasedPhoneSystem'
import Communication from '../Components/pages/Home/Communication'
import Connections from '../Components/pages/Home/Connections'
import Meetings from '../Components/pages/Home/Meetings'
import PhoneSystem from '../Components/pages/Home/PhoneSystem'
import Values from '../Components/pages/Home/Values'
import NavBar from '../Components/shared/NavBar/NavBar'
import Tools from '../Components/pages/Home/Tools'
import Reviews from '../Components/pages/Home/Reviews'
import Footer from '../Components/shared/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <NavBar />
        <CallCenter />
        <BussinesCommunication />
        <Connections />
        <PhoneSystem />
        <Meetings />
        <CloudBasedPhoneSystem />
        <Values />
        <Communication />
        <Brands />
        <Tools />
        <Reviews />
        <Footer />
    </div>
  )
}

export default Home