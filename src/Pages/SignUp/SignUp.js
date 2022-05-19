import React from 'react'
import NavBar from '../../Components/shared/NavBar/NavBar';
import Footer from '../../Components/shared/Footer/Footer';
import SignUpComponent from '../../Components/pages/Auth/SignUp/SignUpComponent';

const SignUp = () => {
  return (
    <div>
        <NavBar />
        <SignUpComponent />
        <Footer />
    </div>
  )
}

export default SignUp