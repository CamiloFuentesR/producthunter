import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DetallesProducto from '../components/layouts/DetallesProducto';
import Layout from '../components/layouts/Layout';
import useProductos from '../hooks/useProductos';
import {css} from '@emotion/react';

const Buscar = () => {


    //recibiendo el parametro de busqueda desde la url
    const router = useRouter();
    const {query: {q}} = router;
    
    //todos los productos
    const { productos} = useProductos('votos');
    const [resultado, setResultado] = useState([]);
    // const {productos} = useProductosBusqueda('votos',q);


    useEffect(() => {
        //transformar toda la busqueda en minuscula
        if(q)
        {const busqueda = q.toLowerCase();
        const filtro = productos.filter(producto=> (
            producto.nombre.toLowerCase().includes(busqueda) ||
            producto.descripcion.toLowerCase().includes(busqueda)
            ));

        setResultado(filtro);
        }
    }, [q, productos])

    return (
        <div>
                    <Layout>
                <div className="listado-productos">
                    <div className="contenedor">
                        {
                            resultado.length > 0
                            ?
                        <ul className="bg-white">
                            {resultado.map(producto => (
                                <DetallesProducto
                                    key={producto.id}
                                    {...producto}
                                />
                            ))}
                        </ul>
                        :
                        <p css={css`
                            text-align: center;
                        `}>No hay productos para mostrar</p>
                        }
                    </div>
                </div>
             </Layout>
        </div>
    )
}
export default Buscar; 