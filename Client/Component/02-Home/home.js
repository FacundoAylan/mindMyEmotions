import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { loadInfo } from '../../redux/actions/index';
import {Info} from '../HomeMain/info/info'
import * as Font from 'expo-font';

export default function Home( { navigation } ) {

/*Esto sirve para poder cargar la tipografia correctamente*/
  const loadFont = async () => {
    await Font.loadAsync({
      'title': require('../../assets/fonts/title.ttf'),
      'text': require('../../assets/fonts/text.ttf'),
      'logo': require('../../assets/fonts/logo.ttf'),
    });
  };
  const dispatch = useDispatch();

  /*Esto se encarga de:
   1- Cargar la tipografia. 
   2- Cargar toda la informacion a utilizar.
   3- Luego se 2 segundo te direcciona al componente login
  */
  useEffect(()=> {
    loadFont();
    dispatch(loadInfo(Info));
    setTimeout(() => {
      navigation.navigate("login")
    }, 4000); 
  },[])


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/home.png')}
      />
    </View>
  );
}
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    height: "100%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 12,
  }
} )
