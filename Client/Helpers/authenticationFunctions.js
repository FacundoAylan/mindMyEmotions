import axios from 'axios';

export const validateEmail = ( email ) => {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test( email )
}
export const validatePassword = ( password ) => {
    return /^.{5,25}$/i.test( password )
}
export const validateUserAuthentication = ( email, password ) => {
    // post para verificar email y password
    let objLoginData = {
        Mail: email,
        Contrasenia: password,
    }
    let res = axios.post( 'https://mind-my-emotions.vercel.app/Login/', objLoginData )
        .then( ( response ) => {

            if ( response.data?.Mensaje === "Usuario y/ contraseña ingresados correctamente" ) {
                console.log( "Usuario autenticado correctamente" );
            }
            if ( response.data?.Mensaje !== "Usuario y/ contraseña ingresados correctamente" ) {
                console.log( "No se pudo autenticar el usuario" );
            }
            if ( response.data?.Mensaje === "Usuario y/ contraseña ingresados correctamente" ) {
                return true
            }
            if ( response.data?.Mensaje !== "Usuario y/ contraseña ingresados correctamente" ) {
                return false
            }
        } )
        .catch( ( error ) => {
            console.error( error );
        } );

    return res

}