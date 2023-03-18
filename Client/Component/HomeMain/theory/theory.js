import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Theory ({ navigation, route}) {

  const {json, nameTheory, index} = route.params;

  const theory = json.theory.filter((value) => value.nameTheory === nameTheory)

  return (
    <View>
      <Text style={styles.title}>{theory[0].title}</Text>
      <Text style={styles.description}>{theory[0].text}</Text> 
      <TouchableOpacity key={nameTheory} onPress={() => navigation.navigate("choiseTest", {json, nameTheory, index})}>
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
  description: {
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