import React, { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layouts/404';
import Layout from '../../components/layouts/Layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import { Campo, InputSubmit } from '../../components/ui/Formulario';
import Boton from '../../components/ui/Boton';

const ContenedorProducto = styled.div`
    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
    }
`;

const CreadorProducto = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Producto = () => {
    //routing para obtener el id actual
    const router = useRouter();
    const { query: { id } } = router;
    const { firebase, usuario } = useContext(FirebaseContext);

    const [producto, setProducto] = useState({});
    const [error, setError] = useState(false);
    const [comentario, setComentario] = useState({});
    const [consultarDB, setConsultarDB] = useState(true);

    const isMounted = useRef(true);


    const { comentarios, creado, descripcion, empresa, nombre, url, imagenUrl, votos, creador, haVotado,imagePath } = producto;
    useEffect(() => {
         if (isMounted.current) {

        if (id && consultarDB) {

            const obtenerProducto = async () => {

                const res = await firebase.db.collection('productos').doc(id);
                const producto = await res.get();
                if (producto.exists) {
                    setProducto(producto.data());
                    setConsultarDB(false);
                    setError(false);
                } else {
                    setConsultarDB(false);
                    setError(true);
                }
            }
            obtenerProducto();
        }
    }
        return () => {
                    isMounted.current = false;
                }
    }, [id, consultarDB])

    if (Object.keys(producto).length === 0 && !error) return 'Cargando...';

    //Administrar y valida los votos
    const votarProducto = () => {
        if (!usuario) {
            return router.push('/login')
        }

        //Verificar si usuario actual ha votado
        if (haVotado.includes(usuario.uid)) return;

        //obtener y sumar un nuevo voto
        const nuevoTotal = votos + 1;

        //guardar el id del usuario que h votado
        const nuevoHaVotado = [...haVotado, usuario.uid]

        //actualizar en la bdd
        firebase.db.collection('productos').doc(id).update({
            votos: nuevoTotal,
            haVotado: nuevoHaVotado
        });

        //Actualizar el state
        setProducto({
            ...producto,
            votos: nuevoTotal
        })
        setConsultarDB(true); //hay un voo por lo tanto consultar a la BDD
    }
    //funcion para saber si ya ha comentado el usuario
    const haVotadoRes = (id) => {
        return haVotado.some(voto => voto === id)
    }

    //funciones para crear comentarios
    const comentarioChange = e => {
        setComentario({
            ...comentario,
            [e.target.name]: e.target.value
        })
    }

    const esCreador = id => {
        if (creador.id === id) {
            return true;
        }
    }

    const handleSubmitComentario = e => {
        e.preventDefault();
        if (!usuario) {
            return router.push('/login')
        }
        if(comentario.mensaje.trim() ==='') return;
        //info extra al comentario
        comentario.usuarioId = usuario.uid;
        comentario.usuarioNombre = usuario.displayName;

        //tomar copia de comentarios y agregarlos al arreglo
        const nuevosComentarios = [...comentarios, comentario]

        //actualizar bdd
        firebase.db.collection('productos').doc(id).update({
            comentarios: nuevosComentarios
        })

        //ctualizar el state
        setProducto({
            ...producto,
            comentarios: nuevosComentarios
        })
        setConsultarDB(true);

    }

    //revisar que el creador del prod sea el mismo que esta autenticado
    const puedeBorrar = () => {
        if(!usuario) return false;

        if(creador.id === usuario.uid){
            return true;
        }
    }

    // elimina un producto de la bdd
    const eliminarProducto = async () => {
        if(!usuario) return router.push('/login');
        if(creador.id !== usuario.uid){
            return router.push('/');
        }
        try {
            await firebase.db.collection('productos').doc(id).delete();
            await firebase.storage.ref(`productos/${imagePath}`).delete();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <>
                {
                    error /* && producto.length === 0 */
                        ? <Error404 />
                        :
                        <div className="contenedor">
                            <h1 css={css`
                            text-align: center;
                            margin-top: 5rem;    
                        `}>
                                {nombre}
                            </h1>
                            <ContenedorProducto>
                                <div>
                                    <p>Publicado hace: {formatDistanceToNow(new Date(creado), { locale: es })}</p>
                                    <p>Por: {creador.nombre} de {empresa}</p>
                                    <img src={imagenUrl} alt="img" />
                                    <p>{descripcion}</p>
                                    {usuario &&
                                        (
                                            <>
                                                <h2>Agrega tu comentario</h2>
                                                <form
                                                    onSubmit={handleSubmitComentario}
                                                >
                                                    <Campo>
                                                        <input
                                                            type="text"
                                                            name="mensaje"
                                                            onChange={comentarioChange}
                                                        />
                                                    </Campo>
                                                    <InputSubmit
                                                        type="submit"
                                                        value="Agregar comentario"
                                                    />
                                                </form>
                                            </>
                                        )
                                    }
                                    <h2 css={css`
                                    margin: 2rem 0;
                                `}
                                    >Comentarios</h2>
                                    {
                                        comentarios.length === 0
                                            ? 'Aún no hay comentarios'
                                            : 
                                            (
                                                <ul>
                                                    {comentarios.map((comentario, index) => (
                                                        <li
                                                            key={`${comentario.usuarioId}-${index}`}
                                                            css={css`
                                                                border: 1px solid #e1e1e1;
                                                                padding: 2rem;
                                                            `}
                                                        >
                                                            <p>
                                                                <span
                                                                    css={css`
                                                                    font-weight: bold;
                                                                    `}
                                                                >{comentario.usuarioNombre}{' '}</span>
                                                                comento:
                                                            </p>
                                                            <p>{comentario.mensaje}</p>
                                                            {
                                                                esCreador(comentario.usuarioId)
                                                                && <CreadorProducto>Es Creador</CreadorProducto>
                                                            }
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                    }
                                </div>
                                <aside>
                                    <Boton
                                        target="_blank"
                                        bgColor="true"
                                        href={url}
                                    >Visitar Url</Boton>
                                    <div
                                        css={css`
                                            margin-top: 5rem;
                                    `}>
                                        <p
                                            css={css`
                                        text-align: center;
                                    `}>{votos} votos</p>
                                        {
                                            usuario && !haVotadoRes(usuario.uid) &&
                                            <Boton
                                                onClick={votarProducto}
                                            >Votar</Boton>
                                        }
                                    </div>
                                </aside>
                            </ContenedorProducto>
                            {
                                puedeBorrar() 
                                &&
                                <Boton
                                    onClick={eliminarProducto}
                                >Eliminar Producto</Boton> 
                            }
                        </div>
                }
            </>
        </Layout>
    )
}
export default Producto;