import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { SvgUri } from 'react-native-svg';
import edit_info_logo from '../../../assets/edit_info_logo.svg'
import EditProfileData from "./editProfileData";

export default function Setting() {

  const [ showEditPanel, setShowEditPanel ] = useState( false )
  const [ selectedPanel, setselectedPanel ] = useState( "false" )

  const stopShowingEditPanel = () => {
    setShowEditPanel( false )
  }

  const sendEditNamePanel = () => {
    setselectedPanel( "EDIT_NAME" )
    setShowEditPanel( true )
  }









  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Tu Perfil</Text>
        
        <View style={styles.avatar}></View>

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
            onPress={() => setShowEditPanel( true )}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Edad</Text>
          <Text style={styles.textForUserData}>12 años</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => setShowEditPanel( true )}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Género</Text>
          <Text style={styles.textForUserData}>Femenino</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => setShowEditPanel( true )}
          />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Ciudad</Text>
          <Text style={styles.textForUserData}>Bogotá</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => setShowEditPanel( true )}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Correo</Text>
          <Text style={styles.textForUserData}>camilita@gmail.com</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => setShowEditPanel( true )}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.text}>Contraseña</Text>
          <Text style={styles.textForUserData}>********</Text>
          <SvgUri style={styles.editInfoImg}
            width={25}
            height={25}
            uri={Image.resolveAssetSource( edit_info_logo ).uri}
            onPress={() => setShowEditPanel( true )}
          />
        </View>

        {showEditPanel === true && <EditProfileData stopShowingEditPanel={stopShowingEditPanel} selectedPanel={selectedPanel} />} 

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height:90,
    width: 90,
    borderRadius: 50,
    backgroundColor: '#662483'
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
});
