import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <h1>{props.titulo}</h1>
            <Image src={props.imagem} alt='drone view'/>
            <Description>{props.descricao}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem