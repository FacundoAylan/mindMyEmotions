import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// este componente contine el contenedor de cada modulo , se repite codigo 
export default function Modules ({navigation}) {
  return (
    <View style={styles.mainContainer}>

      <Text style={styles.title}>Temas</Text>

      <TouchableOpacity onPress={() => navigation.navigate('topincs',{
        name:'Reconocimiento emocional'
      })}>
        <View style={styles.container}>
          <Text style={styles.text}>Reconocimiento emocional</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('topincs',{
        name:'Habilidades socioemocionales'
      })}>
        <View style={styles.container}>
          <Text style={styles.text}>Habilidades socioemocionales</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('topincs',{
        name:'Salud mental'
      })}>
        <View style={styles.container}>
          <Text style={styles.text}>Salud mental</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({

  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%'
  },
  title: {
    alignSelf: "center",
    fontSize: 27,
    marginTop: 25,
    marginBottom: 17,
    fontWeight: "800",
    color: '#662483',

  },
  container: {
    backgroundColor:'white',
    height: 60,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#662483'
  },
  text:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
    fontSize: 20,
    marginTop: 13,
  }
}) 