import React, { useEffect } from "react";
import { Image, Text, StyleSheet, View, Dimensions, Pressable, Linking, TouchableOpacity } from "react-native";

const windowHeight = Dimensions.get( 'window' ).height;
const windowWidth = Dimensions.get( 'window' ).width;

export default function Diary( { navigation } ) {

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
            uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/v1679724033/ASSETTS/Midiariodegratitud_lcauo1.png",
          }}
        />
      </Pressable>

      <TouchableOpacity
        style={styles.button}
        onPress={navigateToDiary}
      >
        <Text style={styles.text}>Abrir diario</Text>
      </TouchableOpacity>



      <Pressable onPress={() => Linking.openURL( 'https://open.spotify.com/playlist/774cDGhJLsU1dUFf9rtvjg?si=9603a7d0f22d4fbc&nd=1' )} >
        <Image
          style={styles.spotifyImage}
          source={{
            uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/c_scale,w_356/v1679724279/ASSETTS/Spotify_Logo_RGB_Green_fwntlm.png",
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
    fontFamily: 'text',
    //fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
  },
  image: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 20,
    width: windowWidth * 0.50,
    height: windowHeight * 0.4,
    borderRadius: 20,
  },
  spotifyImage: {
    position: "absolute",
    alignSelf: "center",
    marginTop: windowHeight * 0.3,
    width: windowWidth * 0.35,
    height: windowHeight * 0.052,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 2,
    marginHorizontal: 50,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: windowHeight * 0.45,
  }
}
)

