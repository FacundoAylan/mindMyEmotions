import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions, Pressable, TextInput, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get( 'window' ).height;
const windowWidth = Dimensions.get( 'window' ).width;

export default function DiaryApp() {

    const [ date1, setDate1 ] = useState( '' );
    const [ date1Changed, setDate1Changed ] = useState( false );
    const [ text1, setText1 ] = useState( '' );
    const [ text1Changed, setText1Changed ] = useState( false );

    const [ date2, setDate2 ] = useState( '' );
    const [ date2Changed, setDate2Changed ] = useState( false );
    const [ text2, setText2 ] = useState( '' );
    const [ text2Changed, setText2Changed ] = useState( false );

    const [ date3, setDate3 ] = useState( '' );
    const [ date3Changed, setDate3Changed ] = useState( false );
    const [ text3, setText3 ] = useState( '' );
    const [ text3Changed, setText3Changed ] = useState( false );

    const [ date4, setDate4 ] = useState( '' );
    const [ date4Changed, setDate4Changed ] = useState( false );
    const [ text4, setText4 ] = useState( '' );
    const [ text4Changed, setText4Changed ] = useState( false );

    const [ date5, setDate5 ] = useState( '' );
    const [ date5Changed, setDate5Changed ] = useState( false );
    const [ text5, setText5 ] = useState( '' );
    const [ text5Changed, setText5Changed ] = useState( false );


    const handleDate1Change = ( text ) => {
        setDate1( text );
        setDate1Changed( true );
    }
    const handleDate2Change = ( text ) => {
        setDate2( text );
        setDate2Changed( true );
    }
    const handleDate3Change = ( text ) => {
        setDate3( text );
        setDate3Changed( true );
    }
    const handleDate4Change = ( text ) => {
        setDate4( text );
        setDate4Changed( true );
    }
    const handleDate5Change = ( text ) => {
        setDate5( text );
        setDate5Changed( true );
    }
    const handleText1Change = ( text ) => {
        setText1( text );
        setText1Changed( true );
    }
    const handleText2Change = ( text ) => {
        setText2( text );
        setText2Changed( true );
    }
    const handleText3Change = ( text ) => {
        setText3( text );
        setText3Changed( true );
    }
    const handleText4Change = ( text ) => {
        setText4( text );
        setText4Changed( true );
    }
    const handleText5Change = ( text ) => {
        setText5( text );
        setText5Changed( true );
    }



    //Setter
    useEffect( () => {
        const saveNewText = async () => {

            if ( date1Changed ) {
                try {
                    await AsyncStorage.setItem( 'FIRST_DATE', date1 );
                    setDate1Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( date2Changed ) {
                try {
                    await AsyncStorage.setItem( 'SECOND_DATE', date2 );
                    setDate2Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( date3Changed ) {
                try {
                    await AsyncStorage.setItem( 'THIRD_DATE', date3 );
                    setDate3Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( date4Changed ) {
                try {
                    await AsyncStorage.setItem( 'FOURTH_DATE', date4 );
                    setDate4Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( date5Changed ) {
                try {
                    await AsyncStorage.setItem( 'FIFTH_DATE', date5 );
                    setDate5Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }


            if ( text1Changed ) {
                try {
                    await AsyncStorage.setItem( 'FIRST_INPUT', text1 );
                    setText1Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( text2Changed ) {
                try {
                    await AsyncStorage.setItem( 'SECOND_INPUT', text2 );
                    setText2Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( text3Changed ) {
                try {
                    await AsyncStorage.setItem( 'THIRD_INPUT', text3 );
                    setText3Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( text4Changed ) {
                try {
                    await AsyncStorage.setItem( 'FOURTH_INPUT', text4 );
                    setText4Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

            if ( text5Changed ) {
                try {
                    await AsyncStorage.setItem( 'FIFTH_INPUT', text5 );
                    setText5Changed( false );
                } catch ( error ) {
                    console.log( error );
                }
            }

        };
        saveNewText();
    }, [ date1Changed, text1Changed,
        date2Changed, text2Changed,
        date3Changed, text3Changed,
        date4Changed, text4Changed,
        date5Changed, text5Changed ] );




    //Gets dates and texts from async storage
    useEffect( () => {
        const getDatesAndTexts = async () => {
            try {
                let date1 = await AsyncStorage.getItem( 'FIRST_DATE' );
                setDate1( date1 );
                let text1 = await AsyncStorage.getItem( 'FIRST_INPUT' );
                setText1( text1 );

                let date2 = await AsyncStorage.getItem( 'SECOND_DATE' );
                setDate2( date2 );
                let text2 = await AsyncStorage.getItem( 'SECOND_INPUT' );
                setText2( text2 );

                let date3 = await AsyncStorage.getItem( 'THIRD_DATE' );
                setDate3( date3 );
                let text3 = await AsyncStorage.getItem( 'THIRD_INPUT' );
                setText3( text3 );

                let date4 = await AsyncStorage.getItem( 'FOURTH_DATE' );
                setDate4( date4 );
                let text4 = await AsyncStorage.getItem( 'FOURTH_INPUT' );
                setText4( text4 );

                let date5 = await AsyncStorage.getItem( 'FIFTH_DATE' );
                setDate5( date5 );
                let text5 = await AsyncStorage.getItem( 'FIFTH_INPUT' );
                setText5( text5 );
            } catch ( error ) {
                console.log( error );
            }
        }
        getDatesAndTexts();
    }, [] );



    return (
        <ScrollView>
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={{
                        uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/c_scale,h_1200,w_718/v1679549943/ASSETTS/diario_ujqux4.png",
                    }}
                />

                {/* DAY 1 */}
                <TextInput
                    style={styles.inputDateOne}
                    multiline={true}
                    numberOfLines={18}
                    keyboardType={'numeric'}
                    onChangeText={handleDate1Change}
                    value={date1}
                />
                <TextInput
                    style={styles.inputTextOne}
                    multiline={true}
                    numberOfLines={18}
                    onChangeText={handleText1Change}
                    value={text1}
                />
                {/* DAY 2 */}
                <TextInput
                    style={styles.inputDateTwo}
                    multiline={true}
                    numberOfLines={18}
                    keyboardType={'numeric'}
                    onChangeText={handleDate2Change}
                    value={date2}
                />
                <TextInput
                    style={styles.inputTextTwo}
                    multiline={true}
                    numberOfLines={18}
                    onChangeText={handleText2Change}
                    value={text2}
                />
                {/* DAY 3 */}
                <TextInput
                    style={styles.inputDateThree}
                    multiline={true}
                    numberOfLines={18}
                    keyboardType={'numeric'}
                    onChangeText={handleDate3Change}
                    value={date3}
                />
                <TextInput
                    style={styles.inputTextThree}
                    multiline={true}
                    numberOfLines={18}
                    onChangeText={handleText3Change}
                    value={text3}
                />
                {/* DAY 4 */}
                <TextInput
                    style={styles.inputDateFour}
                    multiline={true}
                    numberOfLines={18}
                    keyboardType={'numeric'}
                    onChangeText={handleDate4Change}
                    value={date4}
                />
                <TextInput
                    style={styles.inputTextFour}
                    multiline={true}
                    numberOfLines={18}
                    onChangeText={handleText4Change}
                    value={text4}
                />
                {/* DAY 5 */}
                <TextInput
                    style={styles.inputDateFive}
                    multiline={true}
                    numberOfLines={18}
                    keyboardType={'numeric'}
                    onChangeText={handleDate5Change}
                    value={date5}
                />
                <TextInput
                    style={styles.inputTextFive}
                    multiline={true}
                    numberOfLines={18}
                    onChangeText={handleText5Change}
                    value={text5}
                />


            </View>
        </ScrollView>
    )
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
        resizeMode: "cover",
    },
    //Day 1
    inputDateOne: {
        /*   borderColor: 'red',
          borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.11,
        height: windowHeight * 0.05,
        marginTop: windowHeight * 0.19,
        marginLeft: windowWidth * 0.06,
        borderRadius: 5,
        fontSize: 12,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    inputTextOne: {
        /*  borderColor: 'red',
         borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.15,
        height: windowHeight * 0.16,
        marginTop: windowHeight * 0.24,
        marginLeft: windowWidth * 0.01,
        marginRight: 200,
        borderRadius: 5,
        fontSize: 12,
        color: 'black',
        padding: 7,
        textAlign: 'center'
    },
    //Day 2
    inputDateTwo: {
        /* borderColor: 'red',
        borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.11,
        height: windowHeight * 0.05,
        marginTop: windowHeight * 0.19,
        marginLeft: windowWidth * 0.4,
        borderRadius: 5,
        fontSize: 12,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    inputTextTwo: {
        /* borderColor: 'red',
        borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.15,
        height: windowHeight * 0.16,
        marginTop: windowHeight * 0.24,
        marginLeft: windowWidth * 0.355,
        borderRadius: 5,
        fontSize: 12,
        color: 'black',
        padding: 7,
        textAlign: 'center'
    },
    //Day 3
    inputDateThree: {
        /* borderColor: 'red',
        borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.11,
        height: windowHeight * 0.05,
        marginTop: windowHeight * 0.19,
        marginLeft: windowWidth * 0.74,
        borderRadius: 5,
        fontSize: 12,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    inputTextThree: {
        /* borderColor: 'red',
        borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.15,
        height: windowHeight * 0.16,
        marginTop: windowHeight * 0.24,
        marginLeft: windowWidth * 0.69,
        marginRight: 200,
        borderRadius: 5,
        fontSize: 12,
        color: 'black',
        padding: 5,
        textAlign: 'center'
    },
    //Day 4
    inputDateFour: {
        /*  borderColor: 'blue',
         borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.11,
        height: windowHeight * 0.05,
        marginTop: windowHeight * 0.45,
        marginLeft: windowWidth * 0.4,
        borderRadius: 5,
        fontSize: 12,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    inputTextFour: {
        /*  borderColor: 'blue',
         borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.15,
        height: windowHeight * 0.16,
        marginLeft: windowWidth * 0.36,
        marginTop: windowHeight * 0.5,
        borderRadius: 5,
        fontSize: 12,
        color: 'black',
        padding: 5,
        textAlign: 'center'
    },
    //Day 5
    inputDateFive: {
        /* borderColor: 'blue',
        borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.11,
        height: windowHeight * 0.05,
        marginTop: windowHeight * 0.45,
        marginLeft: windowWidth * 0.72,
        borderRadius: 5,
        fontSize: 12,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    inputTextFive: {
        /* borderColor: 'blue',
        borderWidth: 2, */
        position: "absolute",
        width: windowHeight * 0.15,
        height: windowHeight * 0.16,
        marginTop: windowHeight * 0.5,
        marginLeft: windowWidth * 0.68,
        marginRight: 200,
        borderRadius: 5,
        fontSize: 12,
        color: 'black',
        padding: 5,
        textAlign: 'center'
    },


} )