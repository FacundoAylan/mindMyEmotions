import React, { useEffect } from "react";
import { Image, StyleSheet, View, Dimensions, Pressable, Linking } from "react-native";

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
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
  },
  image: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 0,
    width: windowWidth * 1.1,
    height: windowHeight * 0.7,
    borderRadius: 20,
  },
  spotifyImage: {
    position: "absolute",
    alignSelf: "center",
    marginTop: windowHeight * 0.78,
    width: windowWidth * 0.35,
    height: windowHeight * 0.052,

  }
}
)

