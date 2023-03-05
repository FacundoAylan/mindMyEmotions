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
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: "100%",
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
    borderColor: '#662483',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
    backgroundColor: 'none'
  },
  image:{
    width: '81%',
    height: 60,
    borderRadius: 12,
    resizeMode: 'stretch'
  }
})
export default Home;