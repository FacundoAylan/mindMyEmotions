import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { SelectList } from 'react-native-dropdown-select-list';
import { Data } from "./city";
import axios from 'axios';

// {
//  name: "Facundo", mas de 3 caracteres y menos que 16
// lastName: "Aylan", mas de 3 caracteres y menos que 16
// email: "",
// password: "Testing193!", mayuscula,letras,numero y simbolo
// age: "",
// gender: "",
// city: "",
// });

export default function Register({ navigation }) {

  const data = Data;
  const [form, setform] = useState({
    Mail:'str',
    Edad: 'int',
    Nombre_de_usuario: 'str',
    Apellido_de_usuario: 'str',
    Contrasenia:'str',
    Genero: 'str',
    Ciudad: 'str',
  });

  const expresiones = {
    name: /^[a-zA-Z ]{3,16}$/,
    lastName: /^[a-zA-Z ]{3,16}$/,
    age: /^[0-9]{1,3}$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  };

  const validate = () => {
    if (
      expresiones.name.test(form.Nombre_de_usuario) &&
      expresiones.lastName.test(form.Apellido_de_usuario) &&
      expresiones.age.test(form.Edad) &&
      form.Genero!== '' &&
      form.Ciudad !== '' &&
      expresiones.email.test(form.Mail) &&
      expresiones.password.test(form.Contrasenia)
    ) {
      let res = axios.post( 'https://vercel-three-nu.vercel.app/docs#/default/Registra_Datos_de_Usuario_Registro__post', form );
      console.log(form)
    } else {
      Alert.alert("falta completar");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingScrollView>
        <Text style={styles.text}>Nombre</Text>
        <TextInput
          placeholder="nombre"
          style={styles.input}
          onChangeText={(nombre) => setform({ ...form, Nombre_de_usuario: nombre })}
        />
        <Text style={styles.text}>Apellido</Text>
        <TextInput
          placeholder="Apellido"
          style={styles.input}
          onChangeText={(apellido) => setform({ ...form, Apellido_de_usuario: apellido })}
        />
        <Text style={styles.text}>Edad</Text>
        <TextInput
          placeholder="Edad"
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(edad) => setform({ ...form, Edad: parseInt(edad) })}
        />
        <Text style={styles.text}>gender</Text>
        <SelectList
          placeholder='genero'
          search={false}
          setSelected={(gender) => setform({ ...form, Genero: gender })}
          data={['masculino', 'femenino', 'otro']}
          save="value"
          boxStyles={{
            borderColor: "purple",
            borderWidth: 2,
            height: 44,
            borderRadius: 6,
          }}
          inputStyles={{ fontSize: 13 }}
          dropdownStyles={{
            borderColor: "purple",
            borderWidth: 2,
            borderRadius: 6,
          }}
        />
        <Text style={styles.text}>Cuidad</Text>

        <SelectList
          placeholder={'ciudad'}
          setSelected={(city) => setform({ ...form, Ciudad: city })}
          data={data}
          save="value"
          boxStyles={{
            borderColor: "purple",
            borderWidth: 2,
            height: 44,
            borderRadius: 6,
          }}
          inputStyles={{ fontSize: 13 }}
          dropdownStyles={{
            borderColor: "purple",
            borderWidth: 2,
            borderRadius: 6,
          }}
        />
          
        <Text style={styles.text}>Correo</Text>
        <TextInput
          placeholder="Corre"
          style={styles.input}
          onChangeText={(correo) => setform({ ...form, Mail: correo })}
        />
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(contraseña) =>
            setform({ ...form, Contrasenia: contraseña })
          }
        />
        <TouchableOpacity style={styles.button} onPress={() => validate()}>
          <Text style={styles.text}>Registrarme</Text>
        </TouchableOpacity>
      </KeyboardAvoidingScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    overflow: "scroll",
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
