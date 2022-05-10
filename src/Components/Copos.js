import React from 'react'
import Copo1 from '../assets/thumb1.png'
import Copo2 from '../assets/thumb2.png'
import Copo3 from '../assets/thumb3.png'
import Cafe1 from '../assets/img1.png'
import Cafe2 from '../assets/img22.png'
import Cafe3 from '../assets/img3.png'
import Logo1 from '../assets/logo.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Logo3.png'

import './Copos.css'

export default function Copos({ setarIMG, setarCor, setarLogo, setarId }) {
  function trocaAtributos(imagem, color, logo, hover) {
    setarIMG(imagem)
    setarCor(color)
    setarLogo(logo)
    setarId(hover)
  }
  return (
    <ul className="Copos">
      <li>
        <img
          src={Copo1}
          onClick={() => trocaAtributos(Cafe1, 'green', Logo1, 'verde')}
          alt="Copo Verde"
        />
      </li>
      <li>
        <img
          src={Copo2}
          onClick={() => trocaAtributos(Cafe2, 'pink', Logo2, 'rosa')}
          alt="Copo Rosa"
        />
      </li>
      <li>
        <img
          src={Copo3}
          onClick={() => trocaAtributos(Cafe3, 'violete', Logo3, 'violeta')}
          alt="Copo Violeta"
        />
      </li>
    </ul>
  )
}
