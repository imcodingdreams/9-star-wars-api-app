
import React from 'react'
//import Logo from '../images/star-wars-black-logo-clear.png'
import Logo from '../images/StarWars-Logo-Clearbg.png'


function Header() {
  return (
    <header style={{ justifyContent: "center", textAlign: "center", paddingTop: "50px", marginBottom: "50px" }}>
      {/* <logo /> */}
      <img src={Logo} alt="Star Wars Logo" height={200}/>
    
      {/* <h4 style={{ textAlign: "center", marginTop: "50px", marginBottom: "70px", backgroundImage: "url(src/images/StarWars-Logo-Clearbg.png)" }}>Star Wars</h4> */}
    </header>
  )
}

export default Header
