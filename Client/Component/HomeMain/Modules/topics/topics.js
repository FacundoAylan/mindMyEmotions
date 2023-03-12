import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {validate} from '../../Choice/user_modules_info';

export default function Topics ({ navigation, route }) {
  const { json, name, indexModule } = route.params; 
  const jsonTopic = validate.filter((value) => value.module === name);
  
  return (
    <View>
      {
        jsonTopic[0].topics.map(topic =>{
            return (
              <TouchableOpacity key={topic.name} disabled={!topic.complete} onPress={() => navigation.navigate('theory',{
                json,
                nameTheory: topic.name,
                name,
                indexModule,
              })}>
              <View style={ topic.complete? styles.container: styles.disabled }>
                <Text style={styles.text}>{topic.name}</Text>
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