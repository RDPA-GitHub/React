import React from "react";
import PropTypes, { element } from 'prop-types';
import { ElementoLista } from "./ElementoLista";

// TIPO DE EXPORTACION NORMAL (Enable)

export const Lista = ({data}) => {
  return (
    <ul className="list-group my-2">
     {
      data.map((Elemento, Posicion, Arreglo) => {
         return <ElementoLista text = {Elemento} key = {Posicion} />
      })
     }
    </ul>
  );
}

// Datos por defectos
Lista.defaultProps = {
  data: ['Javascript', 'VbScript']
}


// Validacion de Datos, en este caso Array
Lista.propTypes = {
  data: PropTypes.array.isRequired
}

/* 
  TIPO DE EXPORTACION POR DEFAULT (Disable)
    export default Lista; */