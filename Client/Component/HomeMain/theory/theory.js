import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Theory ({ navigation, route }) {
  const {name,nameTopic, theory, practice} = route.params;
  const json = theory.filter(value => value.nameTheory === nameTopic)
  return (
    <View>
      <Text style={styles.title}>{json[0].title}</Text>
      <Text style={styles.text}>{json[0].text}</Text> 
      <TouchableOpacity onPress={() => navigation.navigate("choice", {
        name: name,
        nameTheory: nameTopic,
        practice: practice
      })}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>ingresar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'purple',
    fontSize: 30
  },
  text: {
    flex:0,
    justifyContent: 'center',
    textAlign: 'center'
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
})