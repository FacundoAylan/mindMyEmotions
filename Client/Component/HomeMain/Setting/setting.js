import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
import { SvgUri } from 'react-native-svg';
import edit_info_logo from '../../../assets/edit_info_logo.svg'
import EditProfileData from "./editProfileData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setting() {

  const [ showEditPanel, setShowEditPanel ] = useState( false )
  const [ selectedPanel, setSelectedPanel ] = useState( false )
  const [ selectedAvatar, setselectedAvatar ] = useState( 'https://res.cloudinary.com/ds7h3huhx/image/upload/v1678583057/MEs/Alegr%C3%ADa_r6kb1s.png' )


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
    console.log( jsonToObject.Diccionario_de_datos_del_usuario );

  }


  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Tu Perfil</Text>

        <Button title="aindoaw" onPress={traerDatos}>aaaaaaaa</Button>

        <Image
          style={styles.avatar}
          source={{ uri: selectedAvatar }}
          key={Math.random()}
        />

        <SvgUri style={styles.editInfoImgForAvatar}
          width={25}
          height={25}
          uri={Image.resolveAssetSource( edit_info_logo ).uri}
          onPress={() => sendAvatarPanel()}
        />

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Nombre</Text>
          <Text style={styles.textForUserData}>Camila</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => sendEditNamePanel()}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Apellido</Text>
          <Text style={styles.textForUserData}>Gonzales</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => sendEditLastNamePanel()}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Edad</Text>
          <Text style={styles.textForUserData}>12 años</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => sendEditAgePanel()}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Género</Text>
          <Text style={styles.textForUserData}>Femenino</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => sendEditGenderPanel()}
          />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Ciudad</Text>
          <Text style={styles.textForUserData}>Bogotá</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => sendEditDepartmentPanel()}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.notWorkingYet}>Correo</Text>
          <Text style={styles.textForUserData}>camilita@gmail.com</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => setShowEditPanel( false )}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.notWorkingYet} >Contraseña</Text>
          <Text style={styles.textForUserData}>********</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => setShowEditPanel( false )}
          />
        </View>

        {showEditPanel === true && <EditProfileData stopShowingEditPanel={stopShowingEditPanel} selectedPanel={selectedPanel} changeAvatarImage={changeAvatarImage} />}

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
    marginTop: 20,
    marginBottom: 20,
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
  editInfoImgForAvatar: {
    position: "absolute",
    marginTop: 117,
    marginLeft: 245,
  },
  notWorkingYet: {
    color: "#8C8C8C",
    fontWeight: "800",
    fontSize: 17,
    padding: 0,
    margin: 0,
    marginTop: 5,
    marginLeft: 30,
  }
} );