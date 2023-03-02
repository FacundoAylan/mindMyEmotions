import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Setting() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Perfil</Text>
        
        <View style={styles.avatar}></View>

        <Text style={styles.text}>Nombre</Text>
        <TextInput placeholder="nombre" style={styles.input} />
        <Text style={styles.text}>Apellido</Text>
        <TextInput placeholder="Apellido" style={styles.input} />
        <Text style={styles.text}>Edad</Text>
        <TextInput placeholder="Edad" style={styles.input} />
        <Text style={styles.text}>Correo</Text>
        <TextInput placeholder="Corre" style={styles.input} />
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
  },
  avatar: {
    marginLeft:'40%',
    height:90,
    width: 90,
    borderRadius: 50,
    backgroundColor: 'purple'
  },
  input: {
    justifyContent: "center",
    textAlign: "center",
    height: 40,
    borderColor: "purple",
    borderWidth: 2,
    margin: 1,
    marginTop: 2,
    borderRadius: 6,
  },
  text: {
    color: "purple",
    padding: 0,
    margin: 0,
    marginTop: 5,
  },
});
