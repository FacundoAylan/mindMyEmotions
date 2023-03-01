import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { validateEmail } from "../../Helpers/authenticationFunctions";
import { validatePassword } from "../../Helpers/authenticationFunctions";
import { validateUserAuthentication } from "../../Helpers/authenticationFunctions";

export default function Sesion({navigation}) {
  const [ email, setEmail ] = useState( 'testemail@gmail.com' );
  const [ password, setPassword ] = useState( '98dhjwa9hioadk.' );


  let validateInformationAndLogIn = () => {

    if ( validateEmail( email ) ) {
      if ( validatePassword( password ) ) {

        const validation = validateUserAuthentication()

        if ( validation ) {
          navigation.navigate( 'homeMain' )
        }
        else {
          alert( 'pon bien los datos1' )
        }
      }
      else {
        alert( 'pon bien los datos2' )
      }
    }
    else {
      alert( 'pon bien los datos3' )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Correo electrónico" 
        onChangeText={setEmail}
        value={email}  
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password} 
      />
      <TouchableOpacity style={styles.button} onPress={() => validateInformationAndLogIn()} >
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('register')}>
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
  },
  title: {
    fontSize:30,
    justifyContent: 'center',
    textAlign: 'center'
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
    margin: 1,
    marginTop:20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'blue',
    marginTop: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
