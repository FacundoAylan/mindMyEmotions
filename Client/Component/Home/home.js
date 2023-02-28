import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Home ({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos a mind My Emotions</Text>
      <TouchableOpacity style={styles.button}         
        onPress={()=> navigation.navigate('login')}>
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'blue',
    marginTop: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})
export default Home;