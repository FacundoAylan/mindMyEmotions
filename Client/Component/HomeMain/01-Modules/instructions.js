import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import TextRenderizer from '../../TextRenderizer/textRenderizer';


export default function Instructions() {

    let activities = 'Actividades'
    let activitiesText = "Aprende a identificar tus emociones comenzando por el módulo de Reconocimiento Emocional, realiza el primer test y avanza a partir de ahí. Cada que completas un módulo, se habilita uno nuevo. Vas a ver preguntas de selección múltiple y vas a tener que identificar sentimientos y emociones, así que presta atención a lo que lees y pon en práctica lo que aprendes."

    let diary = 'Diario'
    let diaryText = "Lo encontrarás en el módulo de Salud Mental. Lo que escribas en el diario, es personal, solo se guarda en tu dispositivo. Puedes escribir lo que pienses y lo puedes borrar cuando tu quieras. Utiliza este espacio para hacer un viaje a tu interior. Este es un lugar para que escribas razones para agradecer y para que poco a poco incorpores este hábito en tu vida. Utiliza este diario como tu lugar seguro. Es tuyo y de nadie más."

    let profileSettings = 'Configuración de perfil'
    let profileSettingsText = "En el apartado Mi Perfil encontrarás un espacio para completar tu información personal y para elegir un avatar que creas que te representa. Entre más actividades hayas terminado, más avatares tendrás para elegir."


    return (
        <ScrollView style={styles.mainContainer}>
            <View>
                <TextRenderizer title={activities} text={activitiesText} />
                <TextRenderizer title={diary} text={diaryText} />
                <TextRenderizer title={profileSettings} text={profileSettingsText} />
                <View style={styles.emptySpace}></View>
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create( {
    mainContainer: {
        position: 'absolute',
        height: '100%',
        marginTop: 50,
    },
    emptySpace: {
        marginTop: 150,
    },

} )