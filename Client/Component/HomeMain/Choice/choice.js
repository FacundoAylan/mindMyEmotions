import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import  {validate}  from "./user_modules_info";

export default function Choice({ navigation, route }) {
  const {json, nameTheory, name, indexModule } = route.params;
  var indexChoise=0;
  const practice = json.practice.filter((value, index) =>{ 
    if(value.nameTheory === nameTheory){
      indexChoise= index+1;
      return(true)
    }
  })

  // Arreglar esta cosa horrible no tenia tiempo
  const validateDate = (answer) => {
    if(practice[0].answer === answer){
      validate.map((value) => {
        if(value.module === name){
          if(value.topics.length === indexChoise){
            try{
              validate[indexModule+1].complete = true;
              return (
                navigation.navigate("homeMain")
              )
            }catch(error){
              console.log(error)
            }
          }else{
            try{
              value.topics[indexChoise].complete= true;
              return (
                navigation.navigate("topincs", {
                  json: json,
                  name: name,
                  indexModule: indexModule,
                 })
              )
            }catch(error){
              console.log(error)
            }
            }
        }
      })
    }else{
       Alert.alert('Respuesta incorrecta')
    }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{practice[0].title}</Text>
      <Text style={styles.textContainer}>{practice[0].text}</Text>
      {practice[0].questions.map((value) => {
        return (
          <TouchableOpacity
            onPress={() => validateDate(value.charAt(0))}
            key={value}
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
