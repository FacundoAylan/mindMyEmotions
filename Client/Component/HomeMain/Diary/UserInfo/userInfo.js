import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Dimensions, TextInput, Text, ScrollViewBase, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const windowHeight = Dimensions.get( 'window' ).height;
const windowWidth = Dimensions.get( 'window' ).width;

export default function UserInfo( { navigation } ) {


  const [ newNameText, setNewNameText ] = useState( '' );
  const [ nameChanged, setNameChanged ] = useState( false );

  const [ newAgeText, setNewAgeText ] = useState( '' );
  const [ ageChanged, setAgeChanged ] = useState( false );

  const [ newText, setNewText ] = useState( '' );
  const [ textChanged, setTextChanged ] = useState( false );

  const handleNameChange = ( text ) => {
    setNewNameText( text );
    setNameChanged( true );
  }
  const handleAgeChange = ( text ) => {
    setNewAgeText( text );
    setAgeChanged( true );
  }
  const handleHappinessChange = ( text ) => {
    setNewText( text );
    setTextChanged( true );
  }

  const handleDeleteText = () => {
    setNewNameText( '' );
    setNameChanged( true );
    setNewAgeText( '' );
    setAgeChanged( true );
    setNewText( '' );
    setTextChanged( true );
  }

  useEffect( () => {
    const saveNewText = async () => {
      if ( nameChanged ) {
        try {
          await AsyncStorage.setItem( 'MY_NAME_IS', newNameText );
          setNameChanged( false );
        } catch ( error ) {
          console.log( error );
        }
      }
      if ( ageChanged ) {
        try {
          await AsyncStorage.setItem( 'MY_AGE_IS', newAgeText );
          setAgeChanged( false );
        } catch ( error ) {
          console.log( error );
        }
      }
      if ( textChanged ) {
        try {
          await AsyncStorage.setItem( 'MY_HAPPINESS_IS', newText );
          setTextChanged( false );
        } catch ( error ) {
          console.log( error );
        }
      }
    };
    saveNewText();
  }, [ newText, newNameText, newAgeText ] );

  useEffect( () => {
    const getNewNameText = async () => {
      try {
        let nameInput = await AsyncStorage.getItem( 'MY_NAME_IS' );
        setNewNameText( nameInput );
      } catch ( error ) {
        console.log( error );
      }
    };
    getNewNameText();
    const getNewAgeText = async () => {
      try {
        let ageInput = await AsyncStorage.getItem( 'MY_AGE_IS' );
        setNewAgeText( ageInput );
      } catch ( error ) {
        console.log( error );
      }
    };
    getNewAgeText();
    const getNewHappinessText = async () => {
      try {
        let happinessInput = await AsyncStorage.getItem( 'MY_HAPPINESS_IS' );
        setNewText( happinessInput );
      } catch ( error ) {
        console.log( error );
      }
    };
    getNewHappinessText();
  }, [] );


  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/dafvcjkfo/image/upload/q_100/v1679262554/Documento_A4_formas_curvas_Hoja_de_papel_formas_abstractas_multicolor_plcg3l.png",
            }}
          />
          <Text style={styles.Name}>Mi nombre es:</Text>
          <TextInput
            style={styles.inputName}
            maxLength={10}
            value={newNameText}
            onChangeText={handleNameChange}
          />
          <Text style={styles.Age}>Mi edad es:</Text>
          <TextInput
            style={styles.inputAge}
            keyboardType="numeric"
            maxLength={2}
            value={newAgeText}
            onChangeText={handleAgeChange}
          />
          <Text style={styles.Text}>Lo que más me hace feliz es:</Text>
          <TextInput
            style={styles.inputText}
            multiline={true} // Permitir varias líneas
            numberOfLines={4} // Mostrar hasta cuatro líneas
            value={newText}
            onChangeText={handleHappinessChange}
          />
          <Image
            style={styles.imageMind}
            source={{
              uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/c_fit,g_center,w_1188,x_0/v1679012928/MME%20logos/Mind_My_Emotions_znokgz.png",
            }}
          />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create( {
  mainContainer: {
    height: windowHeight * 0.87,
  },
  container: {
    height: windowHeight,
    position: "relative",
    
  },
  Name: {
    position: "absolute",
    maxWidth: windowWidth * 0.7,
    marginTop: windowHeight * 0.16,
    marginLeft: windowWidth * 0.1,
    fontSize: 25,
    color: 'black',
    maxHeight: 85,
    fontFamily: 'logo'
  },
  inputName: {
    position: "absolute",
    width: windowWidth * 0.5,
    backgroundColor: '#FFE8E8',
    marginTop: windowHeight * 0.22,
    marginLeft: windowWidth * 0.05,
    borderRadius: 50,
    fontSize: 18,
    color: 'black',
    maxHeight: 85,
    padding: 20,
    textAlign: 'center',
    fontFamily: 'text',
  },
  Age: {
    position: "absolute",
    maxWidth: windowWidth * 0.5,
    marginTop: windowHeight * 0.33,
    marginLeft: windowWidth * 0.58,
    fontSize: 25,
    color: 'black',
    maxHeight: 85,
    fontFamily: 'logo',
  },
  inputAge: {
    position: 'absolute',
    zIndex: 3,
    maxWidth: '30%',
    minWidth: '30%',
    backgroundColor: '#FFE8E8',
    marginTop: windowHeight * 0.385,
    marginLeft: windowWidth * 0.6,
    borderRadius: 50,
    fontSize: 18,
    color: 'black',
    height: 70,
    paddingLeft: 33,
    fontFamily: 'text',
  },
  Text: {
    position: "absolute",
    width: windowWidth * 1,
    marginTop: windowHeight * 0.5,
    marginLeft: windowWidth * 0.1,
    fontSize: 25,
    color: 'black',
    maxHeight: 85,
    fontFamily: 'logo',
  },
  inputText: {
    position: "absolute",
    maxWidth: 250,
    minWidth: 250,
    backgroundColor: '#FFE8E8',
    marginTop: windowHeight * 0.55,
    marginLeft: windowWidth * 0.19,
    borderRadius: 12,
    fontSize: 18,
    color: 'black',
    maxHeight: 120,
    padding: 10,
    zIndex: 3,
    textAlign: 'center',
    fontFamily: 'text',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageMind: {
    position: 'absolute',
    alignSelf: "center",
    width: '45%',
    height: '25%',
    borderRadius: 12,
    resizeMode: 'stretch',
    marginTop: windowHeight * 0.67
  }
} )

