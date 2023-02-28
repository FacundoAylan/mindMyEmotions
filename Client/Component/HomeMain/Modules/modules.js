import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// este componente contine el contenedor de cada modulo , se repite codigo 
export default function Modules ({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.text}>Reconocimiento emocional</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.text}>Habilidades socioemocionales</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.text}>Salud mental</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#662483',
    height: 100,
    margin: 10,
    borderRadius: 12
  },
  text:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: '10%'
  }
}) 