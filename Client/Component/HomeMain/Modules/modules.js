import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { validate } from "../Choice/user_modules_info";
import {Info} from '../info/info'

// este componente contine el contenedor de cada modulo , se repite codigo 
export default function Modules ({navigation}) {

  const json = useSelector((state) => state.loader.modules);

  return (
    <View style={styles.mainContainer}>

      <Text style={styles.title}>Temas</Text>
      {
        Info.map((value,index) => {
          const module = validate.filter(e => e.module === value.module)
          return(
            <TouchableOpacity key={value.module} disabled={!module[0].complete} onPress={ () => navigation.navigate('topincs',{
              json: value,
              name: value.module,
              indexModule: index,
            })}>
              <View style={module[0].complete? styles.container : styles.disabled}>
                <Text style={styles.text}>{value.module}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
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
    alignSelf: "center",
    fontSize: 27,
    marginTop: 25,
    marginBottom: 17,
    fontWeight: "800",
    color: '#662483',

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
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
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