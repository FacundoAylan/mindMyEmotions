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
    name: "",
    lastName: "",
    age: "",
    gender: "",
    city: "",
    email: "",
    password: "",
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
      expresiones.name.test(form.name) &&
      expresiones.lastName.test(form.lastName) &&
      expresiones.age.test(form.age) &&
      expresiones.gender !== '' &&
      form.city !== '' &&
      expresiones.email.test(form.email) &&
      expresiones.password.test(form.password)
    ) {
      Alert.alert("todo correcto");
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
        <Text style={styles.text}>gender</Text>
        <SelectList
          placeholder='genero'
          search={false}
          setSelected={(gender) => setform({ ...form, gender: gender })}
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
          setSelected={(city) => setform({ ...form, city: city })}
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "purple",
  },
  text: {
    color: "purple",
    padding: 0,
    margin: 0,
    marginTop: 5,
  },
});
