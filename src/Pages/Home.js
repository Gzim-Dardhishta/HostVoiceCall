import React from 'react'
import BussinesCommunication from '../Components/pages/Home/BussinesCommunication'
import CallCenter from '../Components/pages/Home/CallCenter'
import CloudBasedPhoneSystem from '../Components/pages/Home/CloudBasedPhoneSystem'
import Communication from '../Components/pages/Home/Communication'
import Connections from '../Components/pages/Home/Connections'
import Meetings from '../Components/pages/Home/Meetings'
import PhoneSystem from '../Components/pages/Home/PhoneSystem'
import Values from '../Components/pages/Home/Values'
import NavBar from '../Components/shared/NavBar/NavBar'

const Home = () => {
  return (
    <div>
        <NavBar />
        <CallCenter />
        <BussinesCommunication />
        <Connections />
        <PhoneSystem />
        <Meetings />
        <CloudBasedPhoneSystem />
        <Values />
        <Communication />
    </div>
  )
}

export default Home