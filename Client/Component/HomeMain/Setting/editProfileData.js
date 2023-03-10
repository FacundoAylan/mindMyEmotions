import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { Data } from "../../registerMe/city";

export default function EditProfileData( { stopShowingEditPanel, selectedPanel } ) {

    const [ newName, setNewName ] = useState( "" )
    const [ newLastName, setNewLastName ] = useState( "" )
    const [ newAge, setNewAge ] = useState( "" )
    const [ newGender, setNewGender ] = useState( "" )
    const [ newDepartamento, setNewDepartamento ] = useState( "" )
    const [ newEmail, setNewEmail ] = useState( "" )
    const [ newPassword, setNewPassword ] = useState( "" )


    /*  let name = 'maria'
        let lastName = 'vargas'
        let age = '14'
        let departamento = 'Bogotá DC'
        let email = 'jorge@gmail.com'
        let password = '12345'
     */

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

            {renderEditModals()}
            {console.log( newDepartamento )}
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
        backgroundColor: 'white'

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

    }

}
)