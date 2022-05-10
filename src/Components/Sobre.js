// import React, { useState } from 'react'
import Botao from './Botao'
import './Sobre.css'
import { Center } from './StyledHeader'

export default function Sobre({ classe }) {
  // const [id, setId] = useState('green')
  return (
    <Center className="center">
      <div className="texto-sobre">
        <h1 className="apresentacao">
          It`s not just Coffee
          <br /> It`s <span className={classe}>Starbucks</span>
        </h1>
        <p className="paragrafo">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing
        </p>
        <Botao classe={classe} />
      </div>
    </Center>
  )
}
