import React from 'react';
import DetallesProducto from '../components/layouts/DetallesProducto';
import Layout from '../components/layouts/Layout';
import {css} from '@emotion/react';
import useProductos from '../hooks/useProductos';
import Head from 'next/head';
const Home = () => {
 
    const { productos } = useProductos('creado');

    return (
        <div>

        <Head>
            <title>Product Hunter</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

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
export default Home;