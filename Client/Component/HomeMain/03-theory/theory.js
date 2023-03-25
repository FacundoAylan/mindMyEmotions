import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Theory ({ navigation, route}) {

  const {json, nameTheory, indexModule, nameNext, nameModule} = route.params;

  const theory = json.theory.filter((value) => value.nameTheory === nameTheory)

  return (
    <View>
      <Text style={styles.title}>{theory[0].title}</Text>
      <Text style={styles.description}>{theory[0].text}</Text> 
      <TouchableOpacity key={nameTheory} onPress={() => navigation.navigate(nameTheory === "Test de inteligencia emocional" ? "choiseTest":"choice", {json, nameTheory, indexModule, nameNext, nameModule})}>
        <View style={styles.container}>
          <Text style={styles.data}>Ingresar</Text>
        </View>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'title',
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'purple',
    fontSize: 30
  },
  description: {
    fontFamily: 'text',
    flex:0,
    justifyContent: 'center',
    textAlign: 'center'
  },
  container: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor:'#662483',
    backgroundColor:'white',
    height: 60,
    margin: 10,
  },
  data:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
    marginTop: '5%'
  },
})