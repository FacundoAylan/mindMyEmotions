import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

// este componente contine el contenedor de cada modulo , se repite codigo 
export default function Modules ({navigation}) {

  const json = useSelector((state) => state.loader); 
  const modules = useSelector((state) => state.loader.modules); 

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        {
          modules.map((module,index) =>{
            return(
              <TouchableOpacity
                key={index} 
                disabled={!json[module.split(" ").join("")]}
                onPress={() => module!== 'Salud mental' ? navigation.navigate("topincs",{indexModule:index}):navigation.navigate("diary")}
              >
                <View style={json[module.split(" ").join("")] ? styles.container : styles.disabled}>
                  <Text style={styles.text}>{module}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
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
  container: {
    backgroundColor:'white',
    height: 60,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#662483'
  },
  text:{
    fontFamily: 'title',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginTop: 13,
  },
  disabled: {
    height: 60,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 6,
    borderWidth: 2,
    opacity:0.5
  }
}) 