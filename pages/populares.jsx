import React from 'react';
import DetallesProducto from '../components/layouts/DetallesProducto';
import Layout from '../components/layouts/Layout';
import {css} from '@emotion/react';
import useProductos from '../hooks/useProductos';

const Populares = () => {

    const {productos} = useProductos('votos');

    return (
        <div>
            <Layout>
                <div className="listado-productos">
                    <div className="contenedor">
                        {
                            productos.length > 0
                            ?
                        <ul className="bg-white">
                            {productos.map(producto => (
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
export default Populares;