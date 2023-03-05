import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register({ navigation }) {
  const [form, setform] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    city: "",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        onChangeText={(nombre) => setform({ ...form, name: nombre })}
      />
      <Text style={styles.text}>Apellido</Text>
      <TextInput
        placeholder="Apellido"
        style={styles.input}
        onChangeText={(apellido) => setform({ ...form, lastName: apellido })}
      />
      <Text style={styles.text}>Edad</Text>
      <TextInput
        placeholder="Edad"
        style={styles.input}
        onChangeText={(edad) => setform({ ...form, age: edad })}
      />
      <Text style={styles.text}>Correo</Text>
      <TextInput
        placeholder="Correo"
        style={styles.input}
        onChangeText={(correo) => setform({ ...form, email: correo })}
      />
      <Text style={styles.text}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(contraseña) =>
          setform({ ...form, password: contraseña })
        }
      />
      <TouchableOpacity
        style={styles.button}
        // onPress={ () =>navigation.navigate('homeMain')}
        onPress={() =>
          Alert.alert(
            `${form.name},${form.lastName},${form.age},${form.email},${form.password}`
          )
        }
      >
        <Text style={styles.textButton} >Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
  },
  input: {
    justifyContent: "center",
    textAlign: "center",
    height: 40,
    borderColor: "#662483",
    borderWidth: 2,
    margin: 1,
    marginTop: 2,
    borderRadius: 6,
    marginHorizontal: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#662483",
    marginHorizontal: 30,
  },
  text: {
    color: "#662483",
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginLeft: 30,
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
  },
});
