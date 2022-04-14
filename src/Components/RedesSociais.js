import React from 'react'
import Insta from '../assets/instagram.png'
import Face from '../assets/facebook.png'
import Tt from '../assets/twitter.png'
import './RedesSociais.css'

export default function RedesSociais() {
  return (
    <div className="redes-sociais">
      <img src={Insta} alt="Logo Instagram" />
      <img src={Face} alt="Logo Facebook" />
      <img src={Tt} alt="Logo Twitter" />
    </div>
  )
}
