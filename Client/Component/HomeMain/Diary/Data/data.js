import React, { useEffect } from "react";
import { Image, StyleSheet, View, Dimensions, TextInput, ScrollViewBase, ScrollView } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Data( { navigation } ) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://res.cloudinary.com/dafvcjkfo/image/upload/q_100/v1679262554/Documento_A4_formas_curvas_Hoja_de_papel_formas_abstractas_multicolor_plcg3l.png",
          }}
        />
        <TextInput style={styles.Name}>Mi nombre es</TextInput>
        <TextInput
          style={styles.inputName}
          maxLength={10}
        />
        <TextInput style={styles.Age}>Mi edad es</TextInput>
        <TextInput
          style={styles.inputAge}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput style={styles.Text}>Lo que mas feliz me hace es</TextInput>
        <TextInput
          style={styles.inputText}
          multiline={true} // Permitir varias líneas
          numberOfLines={4} // Mostrar hasta cuatro líneas
        />
        <Image
          style={styles.imageMind}
          source={{
            uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/c_fit,g_center,w_1188,x_0/v1679012928/MME%20logos/Mind_My_Emotions_znokgz.png",
          }}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create( {
  container: {
    height: windowHeight * 0.93,
    position: "relative",
    padding:0
  },
  Name: {
    position: "absolute",
    width: windowWidth * 0.5,
    marginTop: windowHeight * 0.15,
    marginLeft: windowWidth * 0.1,
    fontSize: 22,
    color: 'black',
    maxHeight: 85,
  },
  inputName: {
    position: "absolute",
    width: windowWidth * 0.5,
    backgroundColor: 'pink',
    marginTop: windowHeight * 0.2,
    marginLeft: windowWidth * 0.05,
    borderRadius: 50,
    fontSize: 24,
    color: 'black',
    maxHeight: 85,
    padding:30
  },
  Age: {
    position: "absolute",
    width: windowWidth * 0.5,
    marginTop: windowHeight * 0.35,
    marginLeft: windowWidth * 0.6,
    fontSize: 22,
    color: 'black',
    maxHeight: 85,
  },
  inputAge: {
    position: 'absolute',
    zIndex: 3,
    maxWidth:'30%',
    minWidth:'30%',
    backgroundColor: 'pink',
    marginTop: windowHeight * 0.4,
    marginLeft: windowWidth * 0.6,
    borderRadius: 50,
    fontSize: 25,
    color: 'white',
    height: 70,
    paddingLeft:33
  },
  Text: {
    position: "absolute",
    width: windowWidth * 1,
    marginTop: windowHeight * 0.5,
    marginLeft: windowWidth * 0.15,
    fontSize: 22,
    color: 'black',
    maxHeight: 85,
  },
  inputText: {
    position: "absolute",
    maxWidth: 250,
    minWidth: 250,
    backgroundColor: 'pink',
    marginTop: windowHeight * 0.55,
    marginLeft: windowWidth * 0.19,
    borderRadius: 12,
    fontSize: 25,
    color: 'white',
    maxHeight: 120,
    padding:10,
    zIndex: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageMind: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'stretch',
    marginTop: windowHeight * 0.33
  }
} )

