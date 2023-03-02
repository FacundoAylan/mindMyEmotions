import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// este componente contine el contenedor de cada modulo , se repite codigo 
export default function Modules ({navigation}) {
  return (
    <View>

      <Text style={styles.title}>Módulos de aprendizaje</Text>

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
  title: {
    flex:0,
    justifyContent:'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'purple'
  },
  container: {
    backgroundColor:'white',
    height: 100,
    margin: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'purple'
  },
  text:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'purple',
    fontSize: 20,
    marginTop: '10%'
  }
}) 