import React from 'react'
// import Logo from '../assets/logo.png'
// import './Header.css'
import { Topo, Center, Menu } from './StyledHeader'

export default function Header({ logo, id }) {
  return (
    <Topo>
      <Center className="center">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Menu className="menu" id={id}>
          <a>Home</a>
          <a> Sobe</a>
          <a>Menu</a>
          <a>Contato</a>
        </Menu>
      </Center>
    </Topo>
  )
}
