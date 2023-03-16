import React, { useState, useEffect } from 'react';
import Navigation from './Component/Navigation/navigation';
import { Provider } from 'react-redux'
import { store } from './redux/store/index'
import 'expo-dev-client'
/* import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
 */
export default function App() {
  //react native google auth with firebase configuration tutorial here = https://www.youtube.com/watch?v=d_Vf41Sb0v0
  // Set an initializing state whilst Firebase connects

  /*const [ initializing, setInitializing ] = useState( true );
  const [ user, setUser ] = useState( {} );

   GoogleSignin.configure( {
    webClientId: '673592098328-0ee3uc8qm0c49hdfp35stvt7m7kl6avr.apps.googleusercontent.com',
  } );


  // Handle user state changes
  function onAuthStateChanged( user ) {
    setUser( user );
    if ( initializing ) setInitializing( false );
    console.log( 2 );
  }

  useEffect( () => {
    const subscriber = auth().onAuthStateChanged( onAuthStateChanged );
    console.log( 1 );
    return subscriber; // unsubscribe on unmount
  }, [] );

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play

    try {
      await GoogleSignin.hasPlayServices( { showPlayServicesUpdateDialog: true } );
      console.log( 3 );
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      console.log( 4 );
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential( idToken );
      console.log( 5 );
      // Sign-in the user with the credential
      //return auth().signInWithCredential( googleCredential );
      const userSignedIn = await auth().signInWithCredential( googleCredential )
      userSignedIn.then( user => {
        console.log( user );
        console.log( 6 );
      } ).catch( error => {
        console.log( error );
        console.log( 69 + 'eeeerrrrooooor' );
      } )
    } catch ( error ) {
      console.log( error );
    }
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess()
      await auth().signOut()
    } catch ( error ) {
      console.log( 7 + 'logout' );
      console.log( error );
    }
  }

  if ( initializing ) return null;

  if ( !user ) {
    return (
      <Provider store={store}>
        <GoogleSigninButton onPress={onGoogleButtonPress} />
        <Navigation />
      </Provider>
    );
  } */


  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

/* 
Ya tengo que el usuario entre y se guarde en firebase, y puede hacer logout. 


1. Que el boton funcione en el componente de sesion
2. Que cuando entre con google se busque si existe el usuario, si no existe, se crea con los datos de google. 
3. 
*/