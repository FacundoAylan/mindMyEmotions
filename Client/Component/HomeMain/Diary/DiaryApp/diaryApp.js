import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native";


export default function DiaryApp() {

    const blablabla = () => {
        console.log( 'clicked' )
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={blablabla}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/v1679549943/ASSETTS/diario_ujqux4.png",
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
        width: 395,
        height: 650,
        borderRadius: 0,
    }
} )