import React from 'react'
import './Home.css'
import Cafe from '../assets/img1.png'
import Sobre from './Sobre'

export default function Home() {
  return (
    <section className="sobre">
      <div className="extras">
        <img src={Cafe} alt="Café" />
      </div>
      <Sobre />
    </section>
  )
}
