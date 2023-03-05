import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Choice({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Practica</Text>
      <Text>
        Estas en una reunión familiar con tus seres queridos, y notas que cada
        vez empiezan a hablar más y más duro, hasta el punto en el que se
        empiezan a enojar y a gritar. ¿Qué haces?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>a. Respuesta, respuesta, respuesta, respuesta, respuesta.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>b. Respuesta, respuesta, respuesta, respuesta, respuesta.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>c. Respuesta, respuesta, respuesta, respuesta, respuesta.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>d. Respuesta, respuesta, respuesta, respuesta, respuesta.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 32,
    color: "purple",
  },
  container: {
    backgroundColor:'#E0ECFF',
    height: 60,
    margin: 10,
  },
  textContainer:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'purple',
    size: '100%',
    marginTop: '5%'
  },
});
