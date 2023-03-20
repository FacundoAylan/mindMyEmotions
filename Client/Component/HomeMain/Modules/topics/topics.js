import React, { useState, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function Topics ({ navigation, route }) {

  const {indexModule} = route.params;
  const json = useSelector((state) => state.loader.json);
  const validate = useSelector((state) => state.loader);

  return (
    <View>
      <ScrollView>
        {
          json[indexModule].topics.map((topic, indexChoise) =>{
              return ( 
                <TouchableOpacity key={topic} disabled={!validate[topic.split(" ").join("")]} onPress={() => navigation.navigate('theory',{
                  json: json[indexModule],
                  nameTheory: topic,
                  indexModule,
                  nameNext: indexChoise+1<json[indexModule].topics.length? json[indexModule].topics[indexChoise+1].split(" ").join(""): '',
                  nameModule: json[indexModule+1].module.split(" ").join("")
                })}>
                <View style={ validate[topic.split(" ").join("")]? styles.container: styles.disabled }>
                  <Text style={styles.textButton}>{topic}</Text>
                </View>
              </TouchableOpacity>
              )
            })
          }
        </ScrollView>
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
  textButton:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'purple',
    fontSize: 20,
    marginTop: '10%'
  },
  disabled: {
    backgroundColor:'white',
    height: 100,
    margin: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'purple',
    opacity:0.5
  }
})