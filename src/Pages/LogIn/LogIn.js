import React from 'react'
import NavBar from '../../Components/shared/NavBar/NavBar';
import Footer from '../../Components/shared/Footer/Footer'
import LogInComponent from '../../Components/pages/Auth/LogIn/LogInComponent';

const LogIn = () => {
  return (
    <div>
        <NavBar />
        <LogInComponent />
        <Footer />
    </div>
  )
}

export default LogIn