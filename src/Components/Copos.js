import React from 'react'
import Copo1 from '../assets/thumb1.png'
import Copo2 from '../assets/thumb2.png'
import Copo3 from '../assets/thumb3.png'
import Cafe1 from '../assets/img1.png'
import Cafe2 from '../assets/img22.png'
import Cafe3 from '../assets/img3.png'
import './Copos.css'

export default function Copos({ setarIMG }) {
  function trocaImg(imagem) {
    setarIMG(imagem)
  }
  return (
    <ul className="Copos">
      <li>
        <img src={Copo1} onClick={() => trocaImg(Cafe1)} />
      </li>
      <li>
        <img src={Copo2} onClick={() => trocaImg(Cafe2)} />
      </li>
      <li>
        <img src={Copo3} onClick={() => trocaImg(Cafe3)} />
      </li>
    </ul>
  )
}
