import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre</Text>
      <TextInput placeholder="nombre" style={styles.input}/>
      <Text style={styles.text}>Apellido</Text>
      <TextInput placeholder="Apellido" style={styles.input}/>
      <Text style={styles.text}>Edad</Text>
      <TextInput placeholder="Edad" style={styles.input}/>
      <Text style={styles.text}>Correo</Text>
      <TextInput placeholder="Corre" style={styles.input}/>
      <Text style={styles.text}>Contraseña</Text>
      <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.input}/>
      <TouchableOpacity style={styles.button} onPress={ () =>navigation.navigate('homeMain')}>
        <Text style={styles.text}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
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
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    padding: 0,
    margin: 0
  },
})