import React, { useState } from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Router from 'next/router';

const InputText = styled.input`
    border: 1px solid  var(--gris3);
    padding: 1rem;
    min-width: 300px;
    @media(max-width:450px){
        min-width:130px;
        max-width:130px;
        font-size: 10px;

    }
`;

const InputSubmit= styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top:1px;
    background-color: white;
    border: none;
    text-indent: -9999px;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 450px){
        height: 2rem;
        width: 1.9rem;
        background-size: 2.7rem;
    }
`;


const Buscar = () => {

    const [busqueda, setBusqueda] = useState('');

    const buscarProducto = e => {
        e.preventDefault();
        if(busqueda.trim() ==='') return;

        //redireccionar a buscar pasando el parametro por url
        Router.push({
            pathname: '/buscar',
            query: {
                q:busqueda
            }
        })

    }

    return (
        <form 
            onSubmit={buscarProducto}
            css={css`
                position:relative;
                @media(max-width:360){
                    position:fixed;
                }
            `}
        >
            <InputText 
                type="text" 
                placeholder="Buscar productos"
                onChange={e=> setBusqueda(e.target.value)}
            />
            <InputSubmit type="submit">Buscar</InputSubmit>
        </form>
    );
}

export default Buscar;