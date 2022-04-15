import React from 'react'
import './Botao.css'
export default function Botao({ classe }) {
  return (
    <div>
      <button className={classe} id="botao">
        Learn More
      </button>
    </div>
  )
}
