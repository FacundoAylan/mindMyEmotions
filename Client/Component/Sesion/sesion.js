import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Alert } from "react-native";
import { validateEmail } from "../../Helpers/authenticationFunctions";
import { validatePassword } from "../../Helpers/authenticationFunctions";
import { validateUserAuthentication } from "../../Helpers/authenticationFunctions";
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';



export default function Sesion( { navigation } ) {
  const [ email, setEmail ] = useState( '' ); //jorge@gmail.com
  const [ password, setPassword ] = useState( '12345' );
  const [ isAdultState, setIsAdultState ] = useState( undefined )

  const [ initializing, setInitializing ] = useState( true );
  const [ user, setUser ] = useState();



  //La autenticación con google persiste aunque se cierre la app, entonces si el usuario entra a la pantalla de login, pero ya esta logueado con google, va a pasar directamente a la pantalla homemain si es niño o importance si es adulto. 
  if ( user ) {
    //1. request to see if a firebase object with that email already exists
    try {
      response = axios.post( `https://mind-my-emotions.vercel.app/Registro/google?Mail=${email}` )
        .then( async ( res ) => {
          if ( res.status ) {
            return res.data?.Mensaje
          } else {
            console.log( 'Request failed with status code:', res.status );
            Alert.alert( 'No se puedo relacionar con una base de datos al usuario de google.' )
          }
        } )
        .catch( ( error ) => {
          console.error( 'the error when querying or creating the google user on firebase was ==>  ' + error );
        } );
    } catch ( error ) {
      console.log( error );
    }

    getGoogleUserDataAndSaveItLocally()

    //Cheks if the user is an adult or not and navigates accordingly
    if ( isAdultState === 'yes' ) {
      navigation.navigate( 'importance' )
    }
    else {
      navigation.navigate( 'homeMain' )
    }
  }
  //////////////////////////////////////GOOGLE THINGS/////////////////////////////////////////////////////////////
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
      setEmail( userSignedIn.user.email )
      console.log( userSignedIn.user.email );



      /* userSignedIn.then( user => {
        console.log( user );
      } ).catch( error => {
        console.log( error );
        console.log( 69 + 'eeeerrrrooooor' );
      } )  */
    } catch ( error ) {
      console.log( error );
    }
  }


  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess()
      await auth().signOut()
    } catch ( error ) {
      console.log( 'user logged out' );
      console.log( error );
    }
  }

  if ( initializing ) return null;


  //////////////////////////////////////GOOGLE THINGS/////////////////////////////////////////////////////////////

  //Saves the user profile to be shown, if its not an adult, its a kid so the homemain should be shown
  async function getProfileSwitchValue() {
    try {
      let result = await SecureStore.getItemAsync( 'IS_ADULT' );
      //console.log( result );
      setIsAdultState( result )
    } catch ( error ) {
      console.log( error )
    }
  }
  getProfileSwitchValue()

  //Saves a flag that means that the user logged in and hasnt logged out, so the sesion login shoulnt be shown
  const saveLoggedInFlag = async () => {
    try {
      await AsyncStorage.setItem( 'IS_LOGGED_IN', 'true' );

    } catch ( error ) {
      console.log( error );
    }
  }
  //Gets the flag and checks it, if its true it means that the user is still loged in and their data is on async storage too so it navigates to other screen
  const getLoggedInFlag = async () => {
    try {
      let isLoggedInResult = await AsyncStorage.getItem( 'IS_LOGGED_IN' );
      console.log( isLoggedInResult );
      if ( isLoggedInResult === 'true' ) {
        if ( isAdultState === 'yes' ) {
          navigation.navigate( 'importance' )
        }
        else {
          navigation.navigate( 'homeMain' )
        }
      }
    } catch ( error ) {
      console.log( error );
    }

  }
  getLoggedInFlag()

  //Trae el objeto del usuario de google y lo guarda en async storage
  async function getGoogleUserDataAndSaveItLocally() {
    axios.get( `https://mind-my-emotions.vercel.app/Devolver_todo/?Mail=${email ? email : user.Mail}` )
      .then( async ( res ) => {
        console.log( res.data );
        console.log( 'aaaaaaaaaaaaaaaaaaaaaa' );
        const jsonValue = JSON.stringify( res.data );
        await AsyncStorage.setItem( 'myObject', jsonValue );
      } )
      .catch( ( error ) => {
        console.error( 'the error when getting the GOOGLE user data is ==>  ' + error );
      } );

    console.log( 'Google user information was saved on asyncStorage' );
  }

 //Trae el objeto del usuario registrado normalmente y lo guarda en async storage
  async function getUserDataObjectAndSaveItLocally() {

    axios.get( 'https://mind-my-emotions.vercel.app/Devolver_todo/', { params: { Mail: email } } )
      .then( async ( res ) => {
        const jsonValue = JSON.stringify( res.data );
        await AsyncStorage.setItem( 'myObject', jsonValue );
        //console.log( jsonValue );
      } )
      .catch( ( error ) => {
        console.error( 'the error when getting the user data is ==>  ' + error );
      } );

    //console.log( userObject );
  }



  let validateInformationAndLogIn = async () => {
    if ( validateEmail( email ) ) {
      if ( validatePassword( password ) ) {
        const validation = await validateUserAuthentication( email, password )
        if ( validation === true ) {
          //console.log( isAdultState );
          saveLoggedInFlag()
          //getting and saving the userData object 
          getUserDataObjectAndSaveItLocally()
          //defining if the profile to open is for the adult or for a child/teen
          if ( isAdultState === 'yes' ) {
            navigation.navigate( 'importance' )
          }
          else {
            navigation.navigate( 'homeMain' )
          }
        }
        else {
          alert( 'No encontramos ninguna cuenta con estos datos, revisa tus datos de ingreso y tu conexión a internet.' )
        }
      }
      else {
        alert( 'Tu contraseña parece estar mal.' )
      }
    }
    else {
      alert( 'Tu email parece estar mal.' )
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Iniciar sesión</Text>
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={() => validateInformationAndLogIn()} >
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate( "register" )}
      >
        <Text style={styles.text}>Registrarme</Text>
      </TouchableOpacity>

      {user ?
        <View>
          <Text style={{ marginTop: 20, marginHorizontal: 20, marginLeft: 20 }}> Estas logueado/a con tu cuenta de Google como {user?.displayName} </Text>
          {/* <Button title='logout' onPress={signOut} >LOG OUT</Button> */}
        </View>
        : <GoogleSigninButton style={{ alignSelf: 'center', marginTop: 40 }} onPress={onGoogleButtonPress} />}
    </View>
  );
}
//aaaaaaaaaa
const styles = StyleSheet.create( {
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: "#eaeaea",
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
  },
  title: {
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
    marginBottom: 15,
    fontWeight: '600'
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
    margin: 0,
    marginTop: 3,
    borderWidth: 2,
    borderColor: '#662483',
    marginHorizontal: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#662483',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
  },
  image: {
    width: '60%',
    height: 200,
    borderRadius: 12,
    resizeMode: 'stretch',
    marginLeft: '20%'
  },
  label: {
    color: '#662483',
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginLeft: 30,
  }
} );