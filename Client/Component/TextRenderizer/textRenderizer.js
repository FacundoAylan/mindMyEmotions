import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";


export default function TextRenderizer( { title, text } ) {

    return (

        <View style={styles.mainContainer}>
            <Text style={styles.titleContainer}>
                {title}
            </Text>

            <View style={styles.textContainer}>
                <ScrollView>
                    <Text style={styles.text}>
                        {text}
                    </Text>
                </ScrollView>

            </View>



        </View>
    )
}


const styles = StyleSheet.create( {

    mainContainer: {
        borderLeftWidth: 5,
        borderLeftColor: '#f29100',
        borderRightWidth: 5,
        borderRightColor: '#662483',
        minHeight: "92.6%",
    },
    titleContainer: {
        fontSize: 25,
        alignSelf: "center",
        color: "#662483",
        fontWeight: 'bold',
        marginTop: 20,
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 12,
        marginTop: 30,
        maxHeight: 450,
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
        fontWeight: "normal",
        color: "black",
        paddingHorizontal: 15,
    },

} );
