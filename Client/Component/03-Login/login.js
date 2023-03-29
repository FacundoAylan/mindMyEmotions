import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity} from "react-native";
import * as SecureStore from "expo-secure-store";
import { styles } from "./styles";


//Al elegir si es nino o adulto se guarda una flag en securestorage, con esa flag se va a saber si se va a navegar hacia la importancia de la app, que es lo que le queremos mostrar a los adultos, o si se navega a la home, que es donde los ninos van a pasar el tiempo. 


export default function Login({ navigation }) {
  const [first, setfirst] = useState("aaaaaaaaaa");

  let IS_ADULT = "IS_ADULT";

  let adultSelected = async () => {
    saveToStorage(IS_ADULT, "yes");
    navigation.navigate("sesion");
  };

  let kidSelected = () => {
    saveToStorage(IS_ADULT, "no");
    navigation.navigate("sesion");
  };

  async function saveToStorage(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => kidSelected()}>
          <Text style={styles.text}>Soy niño/a</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            adultSelected();
          }}
        >
          <Text style={styles.text}>Soy adulto</Text>
        </TouchableOpacity>
      </View>
  );
}
