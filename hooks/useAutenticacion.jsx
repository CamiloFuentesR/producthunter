import React, { useEffect, useState } from 'react';
import useIsMounted from 'react-is-mounted-hook';
import firebase from '../firebase';


//hooks para mantener la autenticacion en el state
const  useAutenticacion = () => {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
    const isMount = useIsMounted()

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {
            if(usuario && isMount) {
                setUsuarioAutenticado(usuario);
            }else {
                setUsuarioAutenticado(null);
            }
        });
        return () => unsuscribe();
    }, [isMount])
    return usuarioAutenticado;

}

export default useAutenticacion;