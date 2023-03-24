import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { loadInfo } from '../../redux/actions/index';
import {Info} from '../HomeMain/info/info'

export default function Home( { navigation } ) {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadInfo(Info));
    setTimeout(() => {
      navigation.navigate("login")
    }, 2000); 
  },[])


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/c_fit,g_center,w_1188,x_0/v1679012928/MME%20logos/Mind_My_Emotions_znokgz.png",
        }}
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
    /* backgroundColor: 'none', */
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'stretch'
  }
} )
