import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, Pressable, Alert, Dimensions } from "react-native";
import EditProfileData from "./editProfileData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ScrollView } from "react-native-gesture-handler";

const windowHeight = Dimensions.get( 'window' ).height;


//Este componente obtiene los datos del usuario y los renderiza, hay que cambiarlo para que funcione con useEffects en vez de set timeouts al traer los datos... Asi va a funcionar mejor. Porque asyncStorage a veces puede tardar mas tiempo del que se espera en setear o en traer los datos, asi que los settimeouts a veces no funcionan bien

//Aqui se llama al componente editProfileData para que renderice los modales que editan la informacion del usuario.

//No se puede editar correo y contrasena todavia porque no hay politica de seguridad de datos por el momento

//Al salir de la cuenta, se borra todo lo que hay en asyncStorage sea que se haya logueado con google o de otra forma

//Los avatares son renderizados dependiendo de la cantidad de actividades que el usuario ha completado, entre mas actividades esten en true, mas avatares les apareceran.

export default function Setting( { navigation } ) {

  const [ userName, setUserName ] = useState( '' )
  const [ userLastname, setUserLastname ] = useState( '' )
  const [ userAge, setUserAge ] = useState( '' )
  const [ userGender, setUserGender ] = useState( '' )
  const [ userDepartment, setUserDepartment ] = useState( '' )
  const [ userEmail, setUserEmail ] = useState( '' )
  const [ userActivities, setUserActivities ] = useState( '' )

  const [ userAsyncStorageData, setUserAsyncStorageData ] = useState( '' )


  const [ showEditPanel, setShowEditPanel ] = useState( false )
  const [ selectedPanel, setSelectedPanel ] = useState( false )
  const [ selectedAvatar, setselectedAvatar ] = useState( 'https://res.cloudinary.com/ds7h3huhx/image/upload/v1678583057/MEs/Alegr%C3%ADa_r6kb1s.png' )

  const editImage = 'https://res.cloudinary.com/ds7h3huhx/image/upload/v1678820634/ASSETTS/editLogo_mirxle.png'



  useEffect( () => {
    setTimeout( () => {
      getUserDataFromAsyncStorage()
    }, 1000 );
  }, [] )



  //state rerendering functions
  const renderNewUserName = ( newName ) => {
    setUserName( newName )
  }
  const renderNewUserLastname = ( newLastname ) => {
    setUserLastname( newLastname )
  }
  const renderNewserAge = ( newAge ) => {
    setUserAge( newAge )
  }
  const renderNewUserGender = ( newGender ) => {
    setUserGender( newGender )
  }
  const renderUserDepartment = ( newDepartment ) => {
    setUserDepartment( newDepartment )
  }

  //This function is passed to the child component and helps to stop showing the edit panel when pressing the x 
  const stopShowingEditPanel = () => { setShowEditPanel( false ) }

  //changes the state of the selected image for the avatar, its just for it to feel faster and not make a big request after setting each image
  const changeAvatarImage = ( newImage ) => { setselectedAvatar( newImage ) }

  //these set the selected edit panel to be shown, email and password still require a secure implementation
  const sendAvatarPanel = () => {
    setSelectedPanel( "EDIT_AVATAR" )
    setShowEditPanel( true )
  }
  const sendEditNamePanel = () => {
    setSelectedPanel( "EDIT_NAME" )
    setShowEditPanel( true )
  }
  const sendEditLastNamePanel = () => {
    setSelectedPanel( "EDIT_LASTNAME" )
    setShowEditPanel( true )
  }
  const sendEditAgePanel = () => {
    setSelectedPanel( "EDIT_AGE" )
    setShowEditPanel( true )
  }
  const sendEditGenderPanel = () => {
    setSelectedPanel( "EDIT_GENDER" )
    setShowEditPanel( true )
  }
  const sendEditDepartmentPanel = () => {
    setSelectedPanel( "EDIT_DEPARTMENT" )
    setShowEditPanel( true )
  }

  /*   const sendEditEmailPanel = () => {
      setselectedPanel( "EDIT_EMAIL" )
      setShowEditPanel( true )
    }
  
    const sendEditPasswordPanel = () => {
      setselectedPanel( "EDIT_PASSWORD" )
      setShowEditPanel( true )
    } */

  const getUserDataFromDbOrFromAsyncStorage = async () => {
    try {
      //si no hay datos de db, o están desactualizados, los actualiza
      if ( userEmail !== '...' ) {
        axios.get( `https://mind-my-emotions.vercel.app/Devolver_todo/?Mail=${userEmail}` ).then( async ( res ) => {

          if ( res.data.Mensaje === 'Usuario no existe' ) {
            Alert.alert( 'Tu usuario no aparece :( recarga tu informacion.' )
            return
          }

          // Aquí guardas los datos localmente y los muestras por consola
          const jsonValue = JSON.stringify( res.data );
          await AsyncStorage.setItem( 'myObject', jsonValue );
          //console.log( 'LOS DATOS DEL USUARIO EN LA DB SON:' + jsonValue )
          setTimeout( () => {
            getUserDataFromAsyncStorage()
          }, 1000 );
        } )
      }

      //si no ha cargado el usuario de asyncstorage, lo carga
      if ( userEmail === '...' ) {
        getUserDataFromAsyncStorage()
      }

      // Aquí haces la petición y esperas a que se resuelva   
    } catch ( error ) {
      // Aquí manejas el error que pueda ocurrir en la petición o en el guardado de datos
      console.error( 'the error when getting the user data is ==>  ' + error );
    }
    //console.log( userObject );
  }


  let getUserDataFromAsyncStorage = async () => {
    try {
      let retrievedJson = await AsyncStorage.getItem( 'myObject' );
      if ( retrievedJson.Mensaje !== 'Usuario no existe' || retrievedJson.Mensaje !== null ) {
        setUserAsyncStorageData( retrievedJson )
      } else {
        getUserDataFromDbOrFromAsyncStorage()
      }

      setTimeout( () => {
        setUserActivities( retrievedJson )
        console.log( 'The requested local user data from asyncStorage is   ' + retrievedJson );
        let jsonToObject = JSON.parse( retrievedJson )
        setUserName( jsonToObject?.Mensaje?.Datos_registro?.Nombre_de_usuario )
        setUserLastname( jsonToObject?.Mensaje?.Datos_registro?.Apellido_de_usuario )
        setUserAge( jsonToObject?.Mensaje?.Datos_registro?.Edad )
        setUserGender( jsonToObject?.Mensaje?.Datos_registro?.Genero )
        setUserDepartment( jsonToObject?.Mensaje?.Datos_registro?.Departamento )
        setUserEmail( jsonToObject?.Mensaje?.Datos_registro?.Mail )
        //console.log( jsonToObject.Mensaje.Datos_registro );
      }, 1000 );

    } catch ( error ) {
      console.log( error );
    }
  }


  //Removes this key from async storage, so the user has to log in again from the sesion screen. The user is navigated to the sesion.
  //I dont know if the changes of the login and logout with google can be tested on a normal server... I had to create an apk
  let logOutUser = async () => {
    try {
      //await AsyncStorage.removeItem( 'IS_LOGGED_IN' );
      await AsyncStorage.clear();
      console.log( 'user logged out from normal email and password account' )
      //Google sing out function
      const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess()
          await auth().signOut()
          console.log( 'user logged out from google' )

          await SecureStore.deleteItemAsync( 'IS_ADULT' )
            .then( () => {
              console.log( 'Value IS_ADULT deleted successfully!' );
            } )
            .catch( error => {
              console.log( 'Failed to delete value IS_ADULT:', error );
            } );

        } catch ( error ) {
          console.log( error );
        }
      }

      await signOut()

    } catch ( error ) {
      console.log( error );
    }
    navigation.navigate( 'login' )
    console.log( 'User signed out' );
  }


  //console.log( userEmail );

  if ( userName === ''
    && userLastname === ''
    && userAge === ''
    && userGender === ''
    && userDepartment === ''
    && userEmail === ''
  ) {
    getUserDataFromAsyncStorage()
  }




  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Tu Perfil</Text>


        {<TouchableOpacity
          style={styles.reloadUserButton}
          onPress={getUserDataFromDbOrFromAsyncStorage}
        >
          <Text style={styles.textReloadButton}>Recarga tu información</Text>
        </TouchableOpacity>}


        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: selectedAvatar }}
            key={Math.random()}
            onPress={sendAvatarPanel}
          />
        </View>
        <Pressable onPress={() => sendAvatarPanel()}>
          <Image
            style={styles.imageEditLogo}
            source={{ uri: editImage }}
          />
        </Pressable>

        <Pressable onPress={() => sendEditNamePanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Nombre</Text>
            <Text style={styles.textForUserData}>{userName ? userName : '...'}</Text>

            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />

          </View>
        </Pressable>

        <Pressable onPress={() => sendEditLastNamePanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Apellido</Text>
            <Text style={styles.textForUserData}>{userLastname ? userLastname : '...'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => sendEditAgePanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Edad</Text>
            <Text style={styles.textForUserData}>{userAge ? userAge : '...'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => sendEditGenderPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Género</Text>
            <Text style={styles.textForUserData}>{userGender ? userGender : '...'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => sendEditDepartmentPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Departamento</Text>
            <Text style={styles.textForUserData}>{userDepartment ? userDepartment : '...'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => setShowEditPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Correo</Text>
            <Text style={styles.textForUserData}>  {userEmail ? userEmail : '...'}</Text>
            {/*  <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            /> */}
          </View>
        </Pressable>

        <Pressable onPress={() => setShowEditPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text} >Contraseña</Text>
            <Text style={styles.textForUserData}>********</Text>
            {/* <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            /> */}
          </View>
        </Pressable>


        {showEditPanel === true && <EditProfileData
          stopShowingEditPanel={stopShowingEditPanel}
          selectedPanel={selectedPanel}
          changeAvatarImage={changeAvatarImage}
          renderNewUserName={renderNewUserName}
          renderNewUserLastname={renderNewUserLastname}
          renderNewserAge={renderNewserAge}
          renderNewUserGender={renderNewUserGender}
          renderUserDepartment={renderUserDepartment}
          userEmail={userEmail}
          userActivities={userActivities}

        />}
        <TouchableOpacity
          style={styles.button}
          onPress={() => logOutUser()}
        >
          <Text style={styles.textButton}>Salir de mi cuenta</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}

const styles = StyleSheet.create( {
  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: windowHeight,
  },
  title: {
    flex: 0,
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 36,
    fontFamily: "logo",
    color: '#662483',
  },
  avatar: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 5,
    height: 95,
    width: 95,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#662483'
  },
  informationContainer: {
    borderColor: '#662483',
    marginLeft: 16,
    borderWidth: 0,
    maxHeight: 65
  },
  text: {
    color: "#662483",
    /*  fontWeight: "800", */
    fontSize: 22,
    padding: 0,
    margin: 0,
    marginTop: 5,
    marginLeft: 30,
    fontFamily: "logo",
  },
  textForUserData: {
    color: "#8C8C8C",
    fontWeight: "400",
    fontSize: 15,
    padding: 0,
    margin: 0,
    marginTop: 5,
    marginLeft: 50,
    fontFamily: 'text',
  },
  editInfoImg: {
    position: "absolute",
    marginTop: 2,
    marginLeft: 300,
  },
  notWorkingYet: {
    color: "#8C8C8C",
    fontWeight: "800",
    fontSize: 17,
    padding: 0,
    margin: 0,
    marginTop: 5,
    marginLeft: 30,
  },
  imageEditLogo: {
    alignSelf: "center",
    marginBottom: 10,
    height: 22,
    width: 24,
  },
  imageEditLogoForTheRightSide: {
    position: "absolute",
    marginTop: 5,
    marginRight: 0,
    marginLeft: 300,
    height: 22,
    width: 24,
  },
  avatarContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  reloadImage: {
    position: "absolute",
    marginLeft: 320,
    marginTop: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: '#662483',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#662483',
    marginHorizontal: 30,
  },
  textButton: {
    fontFamily:'text',
    fontSize: 17,
    lineHeight: 23,
    letterSpacing: 2,
    color: 'white',
  },
  reloadUserButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    maxWidth: 100,
    marginLeft: 280,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: windowHeight * 0.035,
  },
  textReloadButton: {
    fontSize: 8,
    fontFamily: 'text',
  }

} );
