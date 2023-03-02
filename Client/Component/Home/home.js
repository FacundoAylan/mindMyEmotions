import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Home ({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.ibb.co/Vw9v0p5/mind-My-Emotion.png",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#f29100',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 12,
    elevation: 3,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'purple',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'purple',
    backgroundColor: 'none'
  },
  image:{
    width: '96%',
    height: 100,
    borderRadius: 12,
    resizeMode: 'stretch'
  }
})
export default Home;