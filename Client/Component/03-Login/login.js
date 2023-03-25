import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { styles } from "./styles";

export default function Login({ navigation }) {
  const [ first, setfirst ] = useState( 'aaaaaaaaaa' )

  let IS_ADULT = 'IS_ADULT'

  let adultSelected = async () => {
    saveToStorage( IS_ADULT, 'yes' )
    navigation.navigate( "sesion" );
  }

  let kidSelected = () => {
    saveToStorage( IS_ADULT, 'no' )
    navigation.navigate( "sesion" );
  }

  async function saveToStorage( key, value ) {
    await SecureStore.setItemAsync( key, value );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          kidSelected()
        }
      >
        <Text style={styles.text}>Soy niño/a</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          adultSelected()
        }}
      >
        <Text style={styles.text}>Soy adulto</Text>
      </TouchableOpacity>
    </View>
  );
}



