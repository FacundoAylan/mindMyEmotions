import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { Data } from "../../registerMe/city";
import { MES_IMAGES } from '../../../Helpers/constants';
import { ScrollView } from 'react-native';

export default function EditProfileData( { stopShowingEditPanel, selectedPanel, changeAvatarImage } ) {

    const [ newName, setNewName ] = useState( "" )
    const [ newLastName, setNewLastName ] = useState( "" )
    const [ newAge, setNewAge ] = useState( "" )
    const [ newGender, setNewGender ] = useState( "" )
    const [ newDepartamento, setNewDepartamento ] = useState( "" )
    const [ newEmail, setNewEmail ] = useState( "" )
    const [ newPassword, setNewPassword ] = useState( "" )


    let selectNewAvatarAndSendItToTheDb = ( newAvatarLink ) => {
        console.log( 'clicked' );
        changeAvatarImage( newAvatarLink )
        //FUNCION PARA HACER EL POST PARA CAMBIAR EL AVATAR
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


    let validateAndChangeName = ( newName ) => {
        let newNameTrimmed = newName.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let validateAndChangeLastname = ( newLastname ) => {
        let newLastnameTrimmed = newLastname.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let validateAndChangeAge = ( newAge ) => {
        if ( newAge > 6 ) {
            //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
        }
    }
    let changeGender = ( newGender ) => {
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let changeDepartment = ( newDepartment ) => {
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    /*     let validateAndChangeEmail = ( newEmail ) => {
            let newEmailTrimmed = newEmail.trim()
            //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
        }
        let validateAndChangePassword = ( newPassword ) => {
            let newNameTrimmed = newPassword
            //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
        } */

    let renderEditModals = () => {

        switch ( selectedPanel ) {

            case "EDIT_AVATAR":
                return (
                    <View >
                        <Text style={styles.textTitles}>Cambiar avatar</Text>
                        {selectAvatar()}
                    </View>
                )


                {/*  <TouchableOpacity style={styles.editButton} onPress={() => validateAndChangeName()} >
                    <Text style={styles.text}>Cambiar</Text>
                </TouchableOpacity> */}
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
                            <Text style={styles.textTitles}>Cambiar g??nero</Text>
                            <SelectList
                                placeholder='G??nero'
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