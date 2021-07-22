import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useDispatch, useSelector} from 'react-redux';

export default function ObtenerCategorias() {

    const [cat, setCat] = React.useState([]);

    const fetchData = async () => {
        const retornoCategoria = await axios.get('http://localhost:3000/categoria')
            if (retornoCategoria === 200) {
                console.log(retornoCategoria.cat);
                setCat(retornoCategoria.cat.response);
            }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    const listaCategoria = cat.map((cat) => {
      return (
        <div classname="idCategoria" key={cat.id}>
            <div className="nombreCategoria">{cat.nombre}</div>
        </div>
      )
    })

    return (
          <div className = 'ejemplo'>
            <h1>Aca deberian estar las categorias</h1>
            {listaCategoria}
          </div>
        );
}