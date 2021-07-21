import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useDispatch, useSelector} from 'react-redux';

export default function ObtenerCategorias() {

    const [cat, setCat] = React.useState([]);

    const fetchData = async () => {
        const retornoCategoria = await axios.get('//insertar ruta')
            if (retornoCategoria === 200) {
                console.log(retornoCategoria);
                setCat(retornoCategoria.data.response);
            }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    const listaCategoria = data.map((cat) => {

    })
  return (
          <div className = 'container'>
            {listaCategoria}
          </div>
        );
}


export default function Listado() {

        const respuesta = await axios.get('http://localhost:4000/libro');
    
     