import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, Pressable } from "react-native";
import EditProfileData from "./editProfileData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setting() {

  const [ userName, setUserName ] = useState( '' )
  const [ userLastname, setUserLastname ] = useState( '' )
  const [ userAge, setUserAge ] = useState( '' )
  const [ userGender, setUserGender ] = useState( '' )
  const [ userDepartment, setUserDepartment ] = useState( '' )
  const [ userEmail, setUserEmail ] = useState( '' )

  const [ showEditPanel, setShowEditPanel ] = useState( false )
  const [ selectedPanel, setSelectedPanel ] = useState( false )
  const [ selectedAvatar, setselectedAvatar ] = useState( 'https://res.cloudinary.com/ds7h3huhx/image/upload/v1678583057/MEs/Alegr%C3%ADa_r6kb1s.png' )

  const editImage = 'https://res.cloudinary.com/ds7h3huhx/image/upload/v1678820634/ASSETTS/editLogo_mirxle.png'

  useEffect( () => {
    traerDatos()
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

  let traerDatos = async () => {
    let retrievedJson = await AsyncStorage.getItem( 'myObject' );
    let jsonToObject = JSON.parse( retrievedJson )
    setUserName( jsonToObject.Mensaje.Datos_registro.Nombre_de_usuario )
    setUserLastname( jsonToObject.Mensaje.Datos_registro.Apellido_de_usuario )
    setUserAge( jsonToObject.Mensaje.Datos_registro.Edad )
    setUserGender( jsonToObject.Mensaje.Datos_registro.Genero )
    setUserDepartment( jsonToObject.Mensaje.Datos_registro.Departamento )
    setUserEmail( jsonToObject.Mensaje.Datos_registro.Mail )
    //console.log( jsonToObject.Mensaje.Datos_registro );
  }





  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Tu Perfil</Text>


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
            <Text style={styles.textForUserData}>{userName ? userName : '???????'}</Text>

            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />

          </View>
        </Pressable>

        <Pressable onPress={() => sendEditLastNamePanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Apellido</Text>
            <Text style={styles.textForUserData}>{userLastname ? userLastname : '???????'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => sendEditAgePanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Edad</Text>
            <Text style={styles.textForUserData}>{userAge ? userAge : '???????'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => sendEditGenderPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Género</Text>
            <Text style={styles.textForUserData}>{userGender ? userGender : '???????'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => sendEditDepartmentPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>Departamento</Text>
            <Text style={styles.textForUserData}>{userDepartment ? userDepartment : '???????'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => setShowEditPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.notWorkingYet}>Correo</Text>
            <Text style={styles.textForUserData}>  {userEmail ? userEmail : '???????'}</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
          </View>
        </Pressable>

        <Pressable onPress={() => setShowEditPanel()}>
          <View style={styles.informationContainer}>
            <Text style={styles.notWorkingYet} >Contraseña</Text>
            <Text style={styles.textForUserData}>********</Text>
            <Image
              style={styles.imageEditLogoForTheRightSide}
              source={{ uri: editImage }}
            />
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

        />}



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
    minHeight: '100%'
  },
  title: {
    flex: 0,
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: '#662483'
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
    borderColor: "purple",
    marginLeft: 16,
    borderWidth: 0,
    maxHeight: 65
  },
  text: {
    color: "#662483",
    fontWeight: "800",
    fontSize: 17,
    padding: 0,
    margin: 0,
    marginTop: 5,
    marginLeft: 30,
  },
  textForUserData: {
    color: "#8C8C8C",
    fontWeight: "400",
    fontSize: 15,
    padding: 0,
    margin: 0,
    marginTop: 5,
    marginLeft: 50,
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
    height: 26,
    width: 28,
  },
  imageEditLogoForTheRightSide: {
    position: "absolute",
    marginTop: 5,
    marginRight: 0,
    marginLeft: 300,
    height: 26,
    width: 28,
  },
  avatarContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },

} );