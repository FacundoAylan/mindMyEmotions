import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View, Text, Dimensions, Pressable, TextInput, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get( 'window' ).height;

export default function MyMonth() {


    const [ newText, setNewText ] = useState( '' );
    const [ textChanged, setTextChanged ] = useState( false );

    const handleTextChange = ( text ) => {
        setNewText( text );
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
        <ScrollView>
        <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/v1679549943/ASSETTS/mes_vs34l8.png",
                    }}
                />

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
    );
}

const styles = StyleSheet.create( {
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
        color: '#662483',
        padding: 20,
    },
}
)