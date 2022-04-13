import React from 'react'
import BussinesCommunication from '../Components/pages/Home/BussinesCommunication'
import CallCenter from '../Components/pages/Home/CallCenter'
import Connections from '../Components/pages/Home/Connections'
import NavBar from '../Components/shared/NavBar/NavBar'

const Home = () => {
  return (
    <div>
        <NavBar />
        <CallCenter />
        <BussinesCommunication />
        <Connections />
    </div>
  )
}

export default Home