import React, { useContext, useEffect, useState } from 'react'
import useIsMounted from 'react-is-mounted-hook';
import { FirebaseContext } from '../firebase';

const useProductos = orden => {

    const [productos, setProductos] = useState([]);
    const {firebase} = useContext(FirebaseContext);
    const isMount = useIsMounted()
    useEffect(() => {
        if(isMount){
            const obtenerProductos = () => {
                firebase.db.collection('productos').orderBy(orden,'desc').onSnapshot(manejarSnapShot)//onSnapshot es para detectar cambios en tiempo real
            }
            obtenerProductos();
        }
        isMount(false)
    }, [isMount]);
    
    function manejarSnapShot(snapshot) {
        const productos = snapshot.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        });
        setProductos(productos);
    }

    return {
        productos
    }
}

export default useProductos;



