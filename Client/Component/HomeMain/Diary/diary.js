import React, { useEffect } from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export default function Diary( { navigation } ) {

  useEffect(()=> {
    setTimeout(() => {
      navigation.navigate("introduction")
    }, 1000); 
  },[])

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://res.cloudinary.com/dafvcjkfo/image/upload/q_10/v1679251238/diary_njhrtu.png",
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create( {
  container: {
    height: windowHeight,
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
    resizeMode: 'stretch'
  }
} )

