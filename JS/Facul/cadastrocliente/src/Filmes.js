import { Rating } from 'primereact/rating'
import React from 'react'

export const Filmes = (props) => {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <p>Genero: {props.genero}</p>
      <p>Popularidade: {props.popularidade}</p>
      <Rating value={props.popularidade} stars="10" cancel={false} readOnly></Rating>
    </div>
  )
}
