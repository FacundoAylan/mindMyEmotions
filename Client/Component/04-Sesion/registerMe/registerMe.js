import React, { useState, useEffect } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import { Data } from "./city";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { styles } from "./styles";

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
  const [isAdultState, setIsAdultState] = useState(undefined);
  //const [ userCreated, setUserCreated ] = useState( undefined )

  const data = Data;
  const [form, setform] = useState({
    Mail: "str",
    Edad: "int",
    Nombre_de_usuario: "str",
    Apellido_de_usuario: "str",
    Contrasenia: "str",
    Genero: "str",
    Departamento: "str",
  });

  const expresiones = {
    name: /^[a-zA-Z ]{3,16}$/,
    lastName: /^[a-zA-Z ]{3,16}$/,
    age: /^[0-9]{1,3}$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    password: /.{7,16}/,
  };

  async function getProfileSwitchValue() {
    try {
      let result = await SecureStore.getItemAsync("IS_ADULT");
      //console.log( result );
      setIsAdultState(result);
    } catch (error) {
      console.log(error);
    }
  }

  /*   const getUserObject = async () => {
      //Gets the user data from asyncStorage
      let createdUser = await AsyncStorage.getItem( 'myObject' );
      if ( createdUser !== null ) {
        setUserCreated( createdUser )
      }
    } */

  useEffect(() => {
    getProfileSwitchValue();
    //getUserObject()
  }, []);

  const getLoggedInFlagAndNavigate = async () => {
    try {
      if (isAdultState !== "") {
        let isLoggedInResult = await AsyncStorage.getItem("IS_LOGGED_IN");
        let createdUser = await AsyncStorage.getItem("myObject");
        if (createdUser !== undefined && createdUser !== null) {
          //console.log( createdUser );
          if (isLoggedInResult === "true") {
            if (isAdultState === "yes") {
              navigation.navigate("importance");
            }
            if (isAdultState === "no") {
              navigation.navigate("homeMain");
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  getLoggedInFlagAndNavigate();

  const saveLoggedInFlag = async () => {
    try {
      await AsyncStorage.setItem("IS_LOGGED_IN", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const postObjectToCreateNewUser = async () => {
    try {
      axios.post("https://mind-my-emotions.vercel.app/Registro/", form);
    } catch (error) {
      console.log("Error in postObjectToCreateNewUser  " + error);
    }
  };

  const validate = async () => {
    if (
      expresiones.name.test(form.Nombre_de_usuario) &&
      expresiones.lastName.test(form.Apellido_de_usuario) &&
      expresiones.age.test(form.Edad) &&
      form.Genero !== "" &&
      form.Departamento !== "" &&
      expresiones.email.test(form.Mail) &&
      expresiones.password.test(form.Contrasenia)
    ) {
      try {
        //Posts the new user when the data is valid
        postObjectToCreateNewUser();

        //gets the new user data object from the db and saves it on asyncStorage
        //It has a setTimeout because making this call usually results on the user not being created yet. It takes between 1 second and 2 seconds to create the user on the db. So I think 3 secs its the sweetspot... This can be achieved with retries with Axios, but that's too much for now.
        setTimeout(() => {
          getUserDataObjectAndSaveItLocally();
        }, 2000);

        //changes the log in flag to true, which means that the user is now logged in and their data object is in asyncStorage
        saveLoggedInFlag();

        if (isAdultState === "yes") {
          //console.log( 'navigating to importance' );
          navigation.navigate("importance");
        }
        if (isAdultState === "no") {
          //console.log( 'navigating to homeMain' );
          navigation.navigate("homeMain");
        }
      } catch (error) {
        console.log("ERROR in RegisterMe fn validate " + error);
      }
    } else {
      Alert.alert(
        "Falta llenar algo, revisa bien los datos que nos proporcionas."
      );
    }
  };

  const getUserDataObjectAndSaveItLocally = async () => {
    try {
      // Aquí haces la petición y esperas a que se resuelva
      axios
        .get(
          `https://mind-my-emotions.vercel.app/Devolver_todo/?Mail=${form.Mail}`
        )
        .then(async (res) => {
          // Aquí guardas los datos localmente y los muestras por consola
          const jsonValue = JSON.stringify(res.data);
          await AsyncStorage.setItem("myObject", jsonValue);
          //console.log( 'LOS DATOS DEL USUARIO EN LA DB SON:' + jsonValue )
        });
      console.log(2);
    } catch (error) {
      // Aquí manejas el error que pueda ocurrir en la petición o en el guardado de datos
      console.error("the error when getting the user data is ==>  " + error);
    }
    //console.log( userObject );
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior="position">
        <ScrollView>
      <View style={styles.container}>
          <KeyboardAvoidingScrollView>
            <Text style={styles.text}>Nombre</Text>
            <TextInput
              placeholder="Nombre (Ej. Laura)"
              style={styles.input}
              onChangeText={(nombre) =>
                setform({ ...form, Nombre_de_usuario: nombre })
              }
            />
            <Text style={styles.text}>Apellido</Text>
            <TextInput
              placeholder="Apellido (Ej. Vargas)"
              style={styles.input}
              onChangeText={(apellido) =>
                setform({ ...form, Apellido_de_usuario: apellido })
              }
            />
            <Text style={styles.text}>Edad</Text>
            <TextInput
              placeholder="Edad (Ej. 12)"
              style={styles.input}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(edad) => setform({ ...form, Edad: parseInt(edad) })}
            />
            <Text style={styles.text}>Genero</Text>
            <SelectList
              placeholder="Género"
              search={false}
              setSelected={(gender) => setform({ ...form, Genero: gender })}
              data={["Masculino", "Femenino", "Otro"]}
              save="value"
              inputStyles={styles.selectInput1}
              fontFamily="title"
              boxStyles={styles.selectBox}
              dropdownStyles={styles.selectDropdown}
            />
            <Text style={styles.text}>Departamento</Text>

            <SelectList
              placeholder={"Departamento"}
              setSelected={(dep) => setform({ ...form, Departamento: dep })}
              data={data}
              save="value"
              fontFamily="title"
              boxStyles={styles.selectBox}
              inputStyles={styles.selectInput}
              dropdownStyles={styles.selectDropdown}
            />

            <Text style={styles.text}>Correo</Text>
            <TextInput
              placeholder="Correo (Ej. laurav123@gmail.com)"
              style={styles.input}
              onChangeText={(correo) => setform({ ...form, Mail: correo })}
            />
            <Text style={styles.text}>Contraseña. </Text>
            <TextInput
              placeholder="De 6 a 15 caracteres"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(contraseña) =>
                setform({ ...form, Contrasenia: contraseña })
              }
            />
            <TouchableOpacity style={styles.button} onPress={() => validate()}>
              <Text style={styles.textButton}>Registrarse</Text>
            </TouchableOpacity>
          </KeyboardAvoidingScrollView>
      </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}
