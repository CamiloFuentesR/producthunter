import Link from "next/link";
import styled from "@emotion/styled";
import { useContext } from "react";
import { FirebaseContext } from "../../firebase";

const Container = styled.div`
    @media(max-width: 450px){
        display:flex;
        flex-wrap: wrap;
    }
    @media(min-width: 450px){
        display:flex;
        flex-direction: row;
    }
`

const Nav = styled.nav`
@media(min-width: 1000px){
    padding-left: 2rem;
    display: flex;
    flex-direction: row;
    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            margin-right: 0;
        }
    };
};

    @media(max-width: 450px){
        width: 100%;
        padding-left: .1rem;
        display: flex;
        flex-direction:row;
        a{
        font-size: 1.2rem;
        margin-left: 5px;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;
        &:last-of-type{
            margin-right: 0;
        }
    }
    }
`;

const Navegacion = () => {

    const { usuario } = useContext(FirebaseContext);

    return (
        <Nav>
            <Container>
                <Link href="/">
                    <a>Inicio</a>
                </Link>
            </Container>
            <Container>
                <Link href="/populares">
                    <a>Populares</a>
                </Link>
            </Container>
            <Container>
                {usuario && (
                    <Link href="/nuevo-producto">
                        <a>Nuevo Producto</a>
                    </Link>
                )}
            </Container>
        </Nav>
    );
}

export default Navegacion;