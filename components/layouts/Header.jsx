import React, { useContext } from 'react'

import Link from 'next/link';
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'
import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
  
    @media(max-width: 450px){
    width: 100%;
    margin: 0 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    };

    max-width: 1200px;
    width: 95%auto;
    margin: 0 auto;
    @media(min-width: 768px){
        width: 95%;
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.a`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    @media(max-width:350px){
        font-size: 4rem;
        margin-right: 5px;
    }
    @media(min-width:350px)and (max-width:450px){
        font-size: 4rem;
        margin-right: 5px
    }
    @media(min-width:1000px){
        margin-right: 2rem;
    }
`;

const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
                width: 100%;
                @media(min-width:1000px){
                    width: 100%;
                }
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                    @media(max-width: 350px){
                        display: flex;
                        flex-direction: row;
                        align-content: space-around;
                        flex-wrap: wrap;
                        width: 100%;     
                    }
                    display: flex;
                    align-items: center;
                    width: 100%;
                    
                    `}
                >
                    <Logo>P</Logo>
                    <Buscar />
                    <Navegacion />
                </div>
                <div
                    css={css`
                        @media(min-width:450px){
                            width: 40%;
                            display: flex;
                            align-items: center;
                            margin: -10px 20px;
                            justify-content: space-between !important;
                        }
                        @media(max-width: 450px){
                            width: 95%;
                            display: flex;
                            margin: 0px 0px;
                            /* align-items: center; */
                            justify-content: flex-end !important;
                        }
                        `}
                >
                    {usuario ? (
                        <>
                            <p
                                css={css`
                            width: 80%;
                            text-align: center;
                            @media(max-width: 450px){
                                width: 50%;
                                text-align:start;
                                margin-left: 5px;
                            }
                            `}
                            >Hola: {usuario.displayName}
                            </p>
                            <Boton
                                bgColor={true}
                                onClick={() => firebase.cerrarSesion()}
                                >Cerrar Sesión
                            </Boton>
                        </>
                    )
                    :
                    <>
                            <Link href="/login" >
                                <Boton
                                    bgColor={true}
                                    css={css`
                                    @media(max-width: 450px){
                                        margin-left:72%;
                                        align-items: center;
                                    };
                                    @media(max-width: 400px){
                                        margin-left:69%;
                                        align-items: center;
                                    };
                                    @media(max-width: 362px){
                                        margin-left:64%;
                                        align-items: center;
                                    };
                                `}>Login
                                </Boton>
                            </Link>
                            <Link href="/crear-cuenta" css={css`
                                @media(max-width: 450px){
                                };
                            `}>
                                <Boton>
                                    Crear Cuenta
                                </Boton>
                            </Link>
                        </>
                    }
                </div>
            </ContenedorHeader>
        </header>
    );
}

export default Header;