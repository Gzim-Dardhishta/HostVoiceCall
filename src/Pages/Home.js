import React from 'react'
import BussinesCommunication from '../Components/pages/Home/BussinesCommunication'
import CallCenter from '../Components/pages/Home/CallCenter'
import Connections from '../Components/pages/Home/Connections'
import Meetings from '../Components/pages/Home/Meetings'
import PhoneSystem from '../Components/pages/Home/PhoneSystem'
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
    </div>
  )
}

export default Home