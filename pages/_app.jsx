//archivo pricial con la conf de la app
import App from 'next/app';
import firebase,{FirebaseContext} from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';

//debe ser diferente a App que viene por default
const MyApp = (props) => {

    //para mantener la info de inicio de sesion?
    const usuario = useAutenticacion();
    const {Component,pageProps} = props;
    
    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <Component {...pageProps}/>

        </FirebaseContext.Provider>
    )
}

export default MyApp;