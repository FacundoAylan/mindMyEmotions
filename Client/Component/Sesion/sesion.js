import React, { useState } from "react";
import { Image,StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { validateEmail } from "../../Helpers/authenticationFunctions";
import { validatePassword } from "../../Helpers/authenticationFunctions";
import { validateUserAuthentication } from "../../Helpers/authenticationFunctions";
import * as SecureStore from 'expo-secure-store';

export default function Sesion({navigation}) {
  const [ email, setEmail ] = useState( 'jorge@gmail.com' );
  const [ password, setPassword ] = useState( '12345' );
  const [ isAdultState, setIsAdultState ] = useState( undefined )


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



  let validateInformationAndLogIn = async () => {

    if ( validateEmail( email ) ) {
      if ( validatePassword( password ) ) {

        const validation = await validateUserAuthentication( email, password )

        if ( validation === true ) {
          //console.log( isAdultState );
          if ( isAdultState === 'yes' ) {
            navigation.navigate( 'importance' )
          }
          else {
            navigation.navigate( 'homeMain' )
          }
        }
        else {
          alert( 'No encontramos ninguna cuenta con estos datos, revisa tus datos de ingreso.' )
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
      {/* <Image
        style={styles.image}
        source={{
          uri: "https://i.ibb.co/dGpDhhL/mind-My-Emotion2.png",
        }}
      /> */}
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
      <TouchableOpacity style={styles.button} onPress={() => /* validateInformationAndLogIn() === false */
        navigation.navigate( 'homeMain' )} >
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("register")}
      >
        <Text style={styles.text}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
    borderWidth:2,
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
    borderWidth:2,
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
  image:{
    width: '60%',
    height: 200,
    borderRadius: 12,
    resizeMode: 'stretch',
    marginLeft:'20%'
  },
  label: {
    color: '#662483',
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginLeft: 30,
  }
});
