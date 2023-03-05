import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Info } from '../../info/info';

export default function Topics ({ navigation, route }) {
  const {name} = route.params;
  const json = Info.filter((value) => value.module === name);
  return (
    <View>
      {
        json[0].topics.map(topic =>{
            return (
              <TouchableOpacity onPress={() => navigation.navigate('theory',{
                name: name,
                nameTopic: topic,
                theory: json[0].theory,
                practice: json[0].Practice
              })}>
              <View style={styles.container}>
                <Text style={styles.text}>{topic}</Text>
              </View>
            </TouchableOpacity>
            )
          })
        }
    </View>
  );
};

const styles = StyleSheet.create( {
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