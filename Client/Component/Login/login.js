import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as SecureStore from 'expo-secure-store';


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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderWidth: 2,
    borderColor: '#662483',
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#662483",
  },
});
