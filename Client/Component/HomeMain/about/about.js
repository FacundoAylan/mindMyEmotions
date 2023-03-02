import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function About () {
  return (
    <View>
      <Text style={styles.title}>MATERIAL ADICIONAL</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>CONOCE MAS SOBRE 'ME'</Text>
      </TouchableOpacity>
      <Text style={styles.title}>CONTACTOS</Text>

      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>www.instagram.com/mindmyemotions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>www.tiktok.com/@mindmyemotions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>www.twitter.com/MindMyEmotions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>www.linkedin.com/company/mindmyemotions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('choice')}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>info@mindmyemotions.com</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
  title: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 32,
  },
  button: {
    flex: 0,
    height: 40,
    width:'70%',
    backgroundColor: 'white',
    marginLeft: '15%',
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 6,
    margin: 4
  },
  text: {
    flex:0,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '4%',
    color: 'purple'
  }
})