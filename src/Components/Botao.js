import React from 'react'
import './Botao.css'
import { Button } from './StyledComponentsButton'
export default function Botao({ classe }) {
  return (
    <Button className={classe} id="botao">
      Learn More
    </Button>
  )
}
