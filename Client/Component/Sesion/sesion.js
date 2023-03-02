import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Sesion({navigation}) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.ibb.co/dGpDhhL/mind-My-Emotion2.png",
        }}
      />
      <Text style={styles.title}>----Iniciar sesión----</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("homeMain")}
      >
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
    margin: 0,
    marginTop:5,
    borderWidth:2,
    borderColor: 'purple'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 20,
    borderWidth:2,
    borderColor: 'purple'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'purple',
  },
  image:{
    width: '60%',
    height: 200,
    borderRadius: 12,
    resizeMode: 'stretch',
    marginLeft:'20%'
  },
  label: {
    color: 'purple',
    padding: 0,
    margin: 0,
    marginTop: 5
  }
});
