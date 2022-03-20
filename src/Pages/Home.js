import React from 'react'
import BussinesCommunication from '../Components/pages/Home/BussinesCommunication'
import CallCenter from '../Components/pages/Home/CallCenter'
import NavBar from '../Components/shared/NavBar/NavBar'

const Home = () => {
  return (
    <div>
        <NavBar />
        <CallCenter />
        <BussinesCommunication />
    </div>
  )
}

export default Home