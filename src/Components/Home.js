import React from 'react'
import './Home.css'
import Cafe from '../assets/img1.png'
import Sobre from './Sobre'
import RedesSociais from './RedesSociais'
import Copos from './Copos'
import { useState } from 'react'
import { About } from './StyledComponentsHome'

export default function Home({ setarLogo, setId }) {
  const [imagem, setImagem] = useState(Cafe)
  const [classe, setClasse] = useState('green')

  return (
    <About className="sobre">
      <div className="circulo" id={classe}>
        <img src={imagem} alt="Café" />
        <RedesSociais />
      </div>
      <Sobre classe={classe} />
      <Copos
        setarIMG={setImagem}
        setarCor={setClasse}
        setarLogo={setarLogo}
        setarId={setId}
      />
    </About>
  )
}
