import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View, Text, Dimensions, Pressable, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get( 'window' ).height;

export default function MyMonth() {


    const [ newText, setNewText ] = useState( '' );
    const [ textChanged, setTextChanged ] = useState( false );

    const handleTextChange = ( text ) => {
        setNewText( text );
        setTextChanged( true );
    }

    const handleDeleteText = () => {
        setNewText( '' );
        setTextChanged( true );
    }

    useEffect( () => {
        const saveNewText = async () => {
            if ( textChanged ) {
                try {
                    await AsyncStorage.setItem( 'MONTH_INPUT', newText );
                    setTextChanged( false );
                } catch ( error ) {
                    console.log( error );
                }
            }
        };
        saveNewText();
    }, [ newText ] );

    useEffect( () => {
        const getNewMonthText = async () => {
            try {
                let monthInput = await AsyncStorage.getItem( 'MONTH_INPUT' );
                setNewText( monthInput );
            } catch ( error ) {
                console.log( error );
            }
        };
        getNewMonthText();
    }, [] );

    return (
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
        <ScrollView>
        <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/v1679549943/ASSETTS/mes_vs34l8.png",
                    }}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDeleteText}
                >
                    <Text style={styles.textButton}>Borrar texto</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.inputText}
                    value={newText}
                    onChangeText={handleTextChange}
                    multiline={true}
                    numberOfLines={18}
                    scrollEnabled={true}
                    maxLength={2000}
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
        height: windowHeight * 0.87,
        position: "relative",
        padding: 0
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
        width: '100%',
        height: '100%',
        borderRadius: 0,
    },
    inputText: {
        position: "absolute",
        alignSelf: 'center',
        maxWidth: 330,
        minWidth: 250,
        maxHeight: 350,
        marginTop: 190,
        marginLeft: 20,
        borderRadius: 50,
        fontSize: 16,
        fontFamily: 'text',
        color: '#662483',
        padding: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        maxWidth: 100,
        marginLeft: 280,
        borderRadius: 18,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: windowHeight * 0.01,
    },
    textButton: {
        fontSize: 10,
        fontFamily: 'text',
    }

}
)
