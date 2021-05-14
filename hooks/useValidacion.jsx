import React, { useEffect, useState } from 'react'
import useIsMounted from 'react-is-mounted-hook';

const useValidacion = (stateInicial, validar, fn) => {
    const [valores, setValores] = useState(stateInicial);
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);
    const [loading, setLoading] = useState(false)
    const isMounted = useIsMounted();

    useEffect(() => {

        if (submitForm && isMounted) {
            //object.keys es para ver si un objeto esta vacio o tiene algo
            const noErrores = Object.keys(errores).length === 0;
            if (noErrores) {
                fn(); //igul  la funcion que se ejecuta en el componente
                setLoading(true);
            }
            setSubmitForm(false);
        }
    }, [errores,isMounted])

    //Funcion que se ejecuta conforme el usuario escribe algo
    const handleChange = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        });
    }

    //cambios en tiempo real
    const handleBlur = (e) => {
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
    }

    //Funcion que se ejecuta cuando el usuario ejecuta el submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(true);
    }

    return {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur,
        setLoading,
        loading
    }
}

export default useValidacion;