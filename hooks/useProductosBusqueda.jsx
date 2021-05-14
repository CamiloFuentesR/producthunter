import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../firebase';

const useProductosBusqueda = (orden, q) => {

    const [productos, setProductos] = useState([]);
    const { firebase } = useContext(FirebaseContext);
    const [filtrar, setFiltrar] = useState([]);
    // useEffect(() => {
    //     const obtenerProductos = () => {
    //         firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
    //     }
    //     obtenerProductos();
    // }, []);

    useEffect(() => {
      /*   if (q) {
            
            obtenerProductos();
        } */
        if (q || productos) {
            
            function filtrarDatos(productos, q) {
                const filtro = productos.filter(producto => (
                    producto.nombre.toLowerCase().includes(q) ||
                    producto.descripcion.toLowerCase().includes(q)
                    ));
                    setFiltrar(filtro);
                }
                filtrarDatos(productos, q);
                const obtenerProductos = () => {
                    // firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapShot)
                    firebase.db.collection('productos').orderBy('nombre').startAt(`${q}`).endAt(`${q} \uf8ff`).onSnapshot(manejarSnapShot) //onSnapshot es para detectar cambios en tiempo real
                }
        }
    }, [q,productos]);


    function manejarSnapShot(snapshot) {
        const productos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        setProductos(productos);
    }

   /*  useEffect(() => {
        if (q || productos) {

            function filtrarDatos(productos, q) {
                const filtro = productos.filter(producto => (
                    producto.nombre.toLowerCase().includes(q) ||
                    producto.descripcion.toLowerCase().includes(q)
                ));
                setFiltrar(filtro);
            }
            filtrarDatos(productos, q);
        }

    }, [q, productos]) */

    return {
        productos,
        filtrar
    }
}

export default useProductosBusqueda;



