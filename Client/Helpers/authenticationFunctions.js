import axios from 'axios';


export const validateEmail = ( email ) => {

    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test( email )

}

export const validatePassword = ( password ) => {

    return /^.{10,25}$/i.test( password )

}

export const validateUserAuthentication = ( email, password ) => {


    return true
    /*
    post para verificar email y password
    
    axios.post( loginUrl, email, password )
         .then( ( response ) => {
             console.log( response.data ); // handle success response
         } )
         .catch( ( error ) => {
             console.error( error ); // handle error response
         } );
  */


}