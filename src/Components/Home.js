import React from 'react'
import './Home.css'
import Cafe from '../assets/img1.png'
import Sobre from './Sobre'
import RedesSociais from './RedesSociais'
import Copos from './Copos'
import { useState } from 'react'

export default function Home() {
  const [imagem, setImagem] = useState(Cafe)
  return (
    <section className="sobre">
      <div className="extras">
        <img src={imagem} alt="Café" />
        <RedesSociais />
      </div>
      <Sobre />

      <Copos setarIMG={setImagem} />
    </section>
  )
}
