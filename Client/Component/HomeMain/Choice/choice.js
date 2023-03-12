import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Choice({ navigation, route }) {
  const { name, nameTheory, practice } = route.params;
  const json = practice.filter((value) => value.nameTheory === nameTheory);
  const validate = (answer) => {
    return (json[0].answer === answer
    ? navigation.navigate("topincs", {
        name: name,
      })
    : console.log('Respuesta incorrecta'));
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{json[0].title}</Text>
      <Text style={styles.textContainer}>{json[0].text}</Text>
      {json[0].questions.map((value) => {
        return (
          <TouchableOpacity
            onPress={() => validate(value.charAt(0))}
          >
            <View style={styles.container}>
              <Text style={styles.textContainer}>{value}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
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
    backgroundColor: "#E0ECFF",
    height: 60,
    margin: 10,
  },
  textContainer: {
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    color: "purple",
  },
});
