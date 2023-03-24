import React, { useEffect } from "react";
import { Image, StyleSheet, View, Dimensions, Pressable } from "react-native";

//const windowHeight = Dimensions.get('window').height;

export default function Diary( { navigation } ) {

  useEffect( () => {
    /*     setTimeout(() => {
          navigation.navigate("introduction")
        }, 1000);  */
  }, [] )


  const navigateToDiary = () => {
    console.log( 'clicked' );
    navigation.navigate( "introduction" )
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToDiary}>
        <Image
          style={styles.image}
          source={{
            uri: "https://res.cloudinary.com/dafvcjkfo/image/upload/q_10/v1679251238/diary_njhrtu.png",
          }}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    //height: windowHeight,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
  },
  image: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 50,
    width: 140,
    height: 200,
    borderRadius: 20,
  }
} )

