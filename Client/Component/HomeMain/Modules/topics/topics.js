import React, { useState, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function Topics ({ navigation, route }) {

  const {index} = route.params;
  const json = useSelector((state) => state.loader.modules);
  const validate = useSelector((state) => state.loader);

  return (
    <View>
      <ScrollView>
        {
          json[index].topics.map((topic) =>{
              return (
                <TouchableOpacity key={topic} disabled={false} onPress={() => navigation.navigate('theory',{
                  json: json[index],
                  nameTheory: topic,
                  index
                })}>
                <View style={ validate[topic]? styles.container: styles.disabled }>
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