
import React from 'react'
import Logo from '../images/StarWars-Logo-Clearbg.png'


function Header() {
  return (
    <header style={{ justifyContent: "center", textAlign: "center", paddingTop: "50px", marginBottom: "50px" }}>
      <img src={Logo} alt="Star Wars Logo" height={200}/>
    </header>
  )
}

export default Header
