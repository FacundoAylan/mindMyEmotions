import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";


export default function EditProfileData( { stopShowingEditPanel, selectedPanel } ) {

    const [ newName, setNewName ] = useState( "" )
    const [ newLastName, setNewLastName ] = useState( "" )
    const [ newAge, setNewAge ] = useState( 0 )
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
    let validateAndChangeLastname = ( newName ) => {
        let newNameTrimmed = newName.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let validateAndChangeAge = () => {
        let newNameTrimmed = newName.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let ChangeGender = ( newName ) => {
        let newNameTrimmed = newName.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let changeDepartment = ( newName ) => {
        let newNameTrimmed = newName.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let validateAndChangeEmail = ( newName ) => {
        let newNameTrimmed = newName.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }
    let validateAndChangePassword = ( newName ) => {
        let newNameTrimmed = newName.trim()
        //llamo a la funcion para cambiar el nombre y le mando el nuevo nombre
    }




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