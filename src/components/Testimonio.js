import React from 'react'
import '../style-sheets/Testimonio.css'
import HTMLReactParser from 'html-react-parser/lib/index'

export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        src={require(`../images/testimonio-${props.image}.png`)}
        className='imagen-testimonio'
        alt={`Foto de ${props.image} <3`} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.name}</strong> en {props.country}
          </p>
          <p className='cargo-testimonio'>
          {props.position} en <strong>{props.company}</strong>
          </p>
          <p className='texto-testimonio'>"{HTMLReactParser(props.description)}"</p>
        </div>
    </div>
  )
}

//export default Testimonio