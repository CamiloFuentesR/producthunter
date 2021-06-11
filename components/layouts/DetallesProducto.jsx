import styled from '@emotion/styled';
import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import useOnScreen from '../../hooks/useOnScreen';

const Producto = styled.li`
    @media (max-width: 450px){
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid grey;
    };
    @media (min-width: 1000px){
        padding: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #e1e1e1;   
    }
`;

const DescripcionProducto = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;

    @media(max-width:450px){
        flex: 5 5 300px;
        display: flex;
        flex-direction: column;
        margin: 30px;
    }
`;

const Titulo = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    &:hover{
        cursor:pointer;
    }
    @media(max-width:450px){
        font-size:1.5rem;
    }
`;

const TextoDescripcion = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
    @media(max-width:450px){
        font-size:1.4
    }
`;

const Comentarios = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-right: 2rem;
    }
    img{
        width: 2rem;
        margin-right: 2rem;
    }
    p{
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type{
            margin: 0;
        }
    }
    @media(max-width:450px){
        
    }
`;

const Votos = styled.div`
    flex: 0 0 auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;
    div{
        font-size: 2rem;
    }
    p{
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
    @media(max-width:450px){
        
    }
`;

const Imagen = styled.img`
    width: 200px;
    @media(max-width: 450px){
        width:500px;
    }
    @media(max-width:450px){
        
    }

`;


const DetallesProducto = ({
    id,
    comentarios,
    creado,
    descripcion,
    empresa,
    nombre,
    url,
    imagenUrl,
    votos
}) => {
    const [setRef, visible] = useOnScreen({ threshold: .1 });

    return (
        <>

            <Producto>
                {
                    visible ? (
                        <>
                            <DescripcionProducto>
                                <div>
                                    <Imagen src={imagenUrl} alt="" />
                                </div>
                                <div>
                                    {/* productos es el nobre de la carpeta, se debe crear */}
                                    <Link href="/productos/[id]" as={`/productos/${id}`} >
                                        <Titulo>{nombre}</Titulo>
                                    </Link>
                                    <TextoDescripcion>{descripcion.substr(0, 100) + '...'}</TextoDescripcion>
                                    <Comentarios>
                                        <div>
                                            <img src="/static/img/comentario.png" alt="img" />
                                            <p>{comentarios.length} Comentarios</p>
                                        </div>
                                    </Comentarios>
                                    <p>Publicado hace: {formatDistanceToNow(new Date(creado), { locale: es })}</p>
                                </div>
                            </DescripcionProducto>
                            <Votos>
                                <div>&#9650;</div>
                                <p>{votos}</p>
                            </Votos>
                        </>
                    )
                        :
                        <span ref={setRef}></span>

                }

            </Producto>



        </>
    )
}
export default DetallesProducto;