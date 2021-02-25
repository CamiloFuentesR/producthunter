import React, { useContext, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
// import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layouts/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import firebase, { FirebaseContext } from '../firebase';

//Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearProducto from '../validacion/validarCrearProducto';

import Error404 from '../components/layouts/404'
import { Loading } from '../components/layouts/Loading';

const STATE_INICIAL = {
    nombre: '',
    empresa: '',
    url: '',
    descripcion: '',

}

const NuevoProducto = () => {

    const [urlImagen, setUrlImagen] = useState('');

    const [error, setError] = useState(false);
    const { valores, errores, handleSubmit, handleChange, handleBlur,setLoading,loading } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto)
    const { nombre, empresa, imagenUrl, url, descripcion } = valores;
    //hook de routing para redireccionar
    const router = useRouter();
    //contex con las operaciones crud de firebase
    const { usuario, firebase } = useContext(FirebaseContext);
    const handleFile = e => {
        if (e.target.files[0]) {
            setUrlImagen(e.target.files[0])
        }
    }

    const handleUpload = async () => {
        const uploadTask = await firebase.storage.ref(`productos/${urlImagen.lastModified}${urlImagen.name}`).put(urlImagen);
        const downloadURL = await uploadTask.ref.getDownloadURL();
        return downloadURL
      }

    // Solo se ejecuta cuando esta validado el formulario grax al customHooks
    async function crearProducto() {

        //si el usuario no esta autenticado
        if (!usuario) {
            return router.push('/login')
        }

        //crear el obj de nuevo producto
        const producto = {
            nombre,
            empresa,
            imagenUrl: await handleUpload(),
            imagePath: urlImagen.lastModified + urlImagen.name,
            url,
            descripcion,
            votos: 0,
            comentarios: [],
            creado: Date.now(),
            creador: {
                id: usuario.uid,
                nombre: usuario.displayName
            },
            haVotado : []
        }
        //insertarlo en la bdd
        await firebase.db.collection('productos').add(producto);
        setLoading(false)
        return router.push('/');
    }

    
    return (
        <div>
            <Layout>
                {!usuario ? <Error404/> : (
                    loading ? <Loading/>
                    :
                <>
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                            @media(max-width: 360px){
                                font-size: 2rem;
                                margin-top: 2rem;
                            }
                        `}
                    >Nuevo Producto</h1>
                    <Formulario
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <fieldset>
                            <legend>Informacion General</legend>
                            <Campo>
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    autoComplete="off"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            {errores.nombre && <Error>{errores.nombre}</Error>}
                            <Campo>
                                <label htmlFor="empresa">Empresa</label>
                                <input
                                    type="text"
                                    id="empresa"
                                    autoComplete="off"
                                    placeholder="Tú empresa"
                                    name="empresa"
                                    value={empresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            {errores.empresa && <Error>{errores.empresa}</Error>}
                            <Campo>
                                <label htmlFor="imagen">Imagen</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="image"
                                    name="image"
                                    onInput={(e) => handleFile(e)}
                                />
                            </Campo>
                            {errores.imagenUrl && <Error>{errores.imagenUrl}</Error>}

                            <Campo>
                                <label htmlFor="url">Url</label>
                                <input
                                    type="url"
                                    id="url"
                                    autoComplete="off"
                                    placeholder="Url de tu producto"
                                    name="url"
                                    value={url}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            {errores.url && <Error>{errores.url}</Error>}
                        </fieldset>
                        <fieldset>
                            <legend>Sobre tu Producto</legend>
                            <Campo>
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea
                                    id="descripcion"
                                    autoComplete="off"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            {errores.descripcion && <Error>{errores.descripcion}</Error>}
                        </fieldset>
                        <InputSubmit
                            type="submit"
                            value="Crear Producto"
                        />
                    </Formulario>
                </>
                ) }
            </Layout>
        </div>
    )
}
export default NuevoProducto;