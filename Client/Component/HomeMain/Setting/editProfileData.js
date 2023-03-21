import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { Data } from "../../registerMe/city";
import { MES_IMAGES } from '../../../Helpers/constants';
import { ScrollView, SectionList } from 'react-native';
import axios from 'axios';

export default function EditProfileData( {
    stopShowingEditPanel,
    selectedPanel,
    changeAvatarImage,
    renderNewUserName,
    renderNewUserLastname,
    renderNewserAge,
    renderNewUserGender,
    renderUserDepartment,
    userEmail
} ) {
    const [ newName, setNewName ] = useState( "" )
    const [ newLastName, setNewLastName ] = useState( "" )
    const [ newAge, setNewAge ] = useState( "" )
    const [ newGender, setNewGender ] = useState( "" )
    const [ newDepartamento, setNewDepartamento ] = useState( "" )
    /*     const [ newEmail, setNewEmail ] = useState( "" )
        const [ newPassword, setNewPassword ] = useState( "" )
        const [ oldEmail, setOldEmail ] = useState( "" ) */


    let selectNewAvatarAndSendItToTheDb = async ( newAvatarLink ) => {
        console.log( 'clicked' );
        changeAvatarImage( newAvatarLink )

        await axios.post( `https://mind-my-emotions.vercel.app/Modulos/Avatar?Mail=${userEmail}&Avatar=${newAvatarLink}` ).
            then( res => {
                console.log( res.data?.Mensaje );
            } ).
            catch( error => {
                console.log( error );
            } )
        stopShowingEditPanel()
    }


    let selectAvatar = () => {

        let allImages = MES_IMAGES.map( image => {
            return (
                <TouchableOpacity style={styles.imageAndTextContainer}
                    onPress={() => selectNewAvatarAndSendItToTheDb( image.img )}
                    key={Math.random()}>
                    <Image
                        style={styles.imgStyles}
                        source={{ uri: image.img }}
                        key={image.name + Math.random()}

                    />
                    <Text style={styles.avatarTextStyles} key={image.name + Math.random()}>{image.name.charAt( 0 ).toUpperCase() + image.name.slice( 1 )}</Text>
                </TouchableOpacity>

            )
        } );

        return allImages
    }

    //Estas funciones validan el nuevo nombre, lo renderizan y mandan la petición para cambiarlas en el backend
    //Intente poner los links en constantes y hacer las peticiones mandandole un objeto datos a axios... Pero no me funciono rapido entonces toca cambiarlo luego

    let validateAndChangeName = () => {
        renderNewUserName( newName )
        let sendNewNameToTheDb = async () => {
            await axios.post( `https://mind-my-emotions.vercel.app/Perfil/Nombre?Mail=${userEmail}&Nuevo_Nombre=${newName}` ).
                then( res => {
                    console.log( res.data?.Mensaje );

                } ).
                catch( error => {
                    console.log( error );
                } )
            stopShowingEditPanel()
        }
        try {
            sendNewNameToTheDb()
        } catch ( error ) {
            console.log( error );
        }

    }
    let validateAndChangeLastname = () => {
        renderNewUserLastname( newLastName )
        let sendNewLastNameToTheDb = async () => {
            await axios.post( `https://mind-my-emotions.vercel.app/Perfil/Apellido?Mail=${userEmail}&Nuevo_Apellido=${newLastName}` ).
                then( res => {
                    console.log( res.data?.Mensaje );

                } ).
                catch( error => {
                    console.log( error );
                } )
            stopShowingEditPanel()
        }
        try {
            sendNewLastNameToTheDb()
        } catch ( error ) {
            console.log( error );
        }
    }
    let validateAndChangeAge = () => {
        if ( newAge >= 6 ) {
            renderNewserAge( newAge )
            let sendNewAgeToTheDb = async () => {
                await axios.post( `https://mind-my-emotions.vercel.app/Perfil/Edad?Mail=${userEmail}&Nueva_edad=${newAge}` ).
                    then( res => {
                        console.log( res.data?.Mensaje );

                    } ).
                    catch( error => {
                        console.log( error );
                    } )
                stopShowingEditPanel()
            }
            try {
                sendNewAgeToTheDb()
            } catch ( error ) {
                console.log( error );
            }
        } else {
            Alert.alert( 'La edad debe ser un número igual o mayor a 6.' )
        }
    }
    let changeGender = () => {
        renderNewUserGender( newGender )
        let sendNewGenderToTheDb = async () => {
            await axios.post( `https://mind-my-emotions.vercel.app/Perfil/Genero?Mail=${userEmail}&Nuevo_Genero=${newGender}` ).
                then( res => {
                    console.log( res.data?.Mensaje );

                } ).
                catch( error => {
                    console.log( error );
                } )
            stopShowingEditPanel()
        }
        try {
            sendNewGenderToTheDb()
        } catch ( error ) {
            console.log( error );
        }

    }

    let changeDepartment = () => {
        renderUserDepartment( newDepartamento )
        let sendNewDepartmentToTheDb = async () => {
            await axios.post( `https://mind-my-emotions.vercel.app/Perfil/Departamento?Mail=${userEmail}&Nuevo_Departamento=${newDepartamento}` ).
                then( res => {
                    console.log( res.data?.Mensaje );

                } ).
                catch( error => {
                    console.log( error );
                } )
            stopShowingEditPanel()
        }
        try {
            sendNewDepartmentToTheDb()
        } catch ( error ) {
            console.log( error );
        }
    }


    let renderEditModals = () => {

        switch ( selectedPanel ) {

            case "EDIT_AVATAR":
                return (
                    <View >
                        <Text style={styles.textTitles}>Cambiar avatar</Text>
                        {selectAvatar()}
                    </View>
                )
            case "EDIT_NAME":
                return (
                    <View>
                        <View>
                            <Text style={styles.textTitles}>Cambiar nombre</Text>
                            <TextInput style={styles.input} placeholder="Nuevo nombre" onChangeText={setNewName} />
                        </View>
                        <TouchableOpacity style={styles.editButton} onPress={() => validateAndChangeName()} >
                            <Text style={styles.text}>Cambiar</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "EDIT_LASTNAME":
                return (
                    <View>
                        <View>
                            <Text style={styles.textTitles}>Cambiar apellido</Text>
                            <TextInput style={styles.input} placeholder="Nuevo apellido" onChangeText={setNewLastName} />
                        </View>
                        <TouchableOpacity style={styles.editButton} onPress={() => validateAndChangeLastname()} >
                            <Text style={styles.text}>Cambiar</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "EDIT_AGE":
                return (
                    <View>
                        <View>
                            <Text style={styles.textTitles}>Cambiar edad</Text>
                            <TextInput style={styles.input} placeholder="Nueva edad Ej: 9" onChangeText={setNewAge}
                                maxLength={2}
                                keyboardType='numeric' />
                        </View>
                        <TouchableOpacity style={styles.editButton} onPress={() => validateAndChangeAge()} >
                            <Text style={styles.text}>Cambiar</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "EDIT_GENDER":
                return (
                    <View>
                        <View>
                            <Text style={styles.textTitles}>Cambiar género</Text>
                            <SelectList
                                placeholder='Género'
                                search={false}
                                setSelected={setNewGender}
                                data={[ 'Masculino', 'Femenino', 'Otro' ]}
                                save="value"
                                boxStyles={{
                                    alignSelf: "center",
                                    borderColor: "#662483",
                                    borderWidth: 2,
                                    height: 48,
                                    width: 246,
                                    borderRadius: 6,
                                }}
                                inputStyles={{ fontSize: 13 }}
                                dropdownStyles={{
                                    alignSelf: "center",
                                    borderColor: "#662483",
                                    width: 246,
                                    borderWidth: 2,
                                    borderRadius: 6,
                                }}
                            />
                            <TouchableOpacity style={styles.editButton} onPress={() => changeGender( newGender )} >
                                <Text style={styles.text}>Cambiar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            case "EDIT_DEPARTMENT":
                return (
                    <View>
                        <Text style={styles.textTitles}>Cambiar departamento</Text>

                        <SelectList
                            placeholder={'Departamento'}
                            setSelected={setNewDepartamento}
                            data={Data}
                            save="value"
                            boxStyles={{
                                alignSelf: "center",
                                borderColor: "#662483",
                                borderWidth: 2,
                                height: 48,
                                width: 246,
                                borderRadius: 6,
                            }}
                            inputStyles={{ fontSize: 13 }}
                            dropdownStyles={{
                                alignSelf: "center",
                                borderColor: "#662483",
                                height: 160,
                                width: 246,
                                borderWidth: 2,
                                borderRadius: 6,
                            }}
                        />
                        <TouchableOpacity style={styles.editButton} onPress={() => changeDepartment( newDepartamento )} >
                            <Text style={styles.text}>Cambiar</Text>
                        </TouchableOpacity>
                    </View>
                )

            default:
                break;
        }
    }


    return (
        <View style={styles.mainContainer}>

            <TouchableOpacity style={styles.closeButton} onPress={stopShowingEditPanel}>
                <Text style={styles.closeButtonX}>X</Text>
            </TouchableOpacity>
            <ScrollView style={{ height: 400 }}>
                {renderEditModals()}
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create( {
    mainContainer: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 180,
        height: 400,
        width: 310,
        borderColor: '#662483',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white',

    },
    closeButton: {
        alignSelf: 'flex-end',
        marginTop: 8,
        marginRight: 9,
        height: 40,
        width: 40,
        borderColor: '#662483',
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#662483'

    },
    closeButtonX: {
        marginLeft: 13,
        marginTop: 8,
        color: 'white',
        fontWeight: '900',
    },
    input: {
        justifyContent: 'center',
        textAlign: 'center',
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 12,
        margin: 0,
        marginTop: 3,
        borderWidth: 2,
        borderColor: '#662483',
        marginHorizontal: 30,
    },
    editButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#662483',
        marginHorizontal: 30,
    },
    textTitles: {
        alignSelf: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '800',
        color: '#662483',
    },
    imgStyles: {
        width: 100,
        height: 100,
    },
    avatarTextStyles: {
        marginTop: 3,
        alignSelf: 'center',
        fontWeight: '600',
    },
    imageAndTextContainer: {
        flexDirection: 'column-reverse',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 0.2,
        borderRadius: 10,
        paddingHorizontal: 80,
        marginBottom: 4,
    },
}
)