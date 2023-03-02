import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import TextRenderizer from '../TextRenderizer/textRenderizer';
import HomeMain from '../HomeMain/homeMain';


export default function Importance() {

    let title = 'Importancia de la app'
    let text = 'Mucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada rato Mucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada rato Mucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada rato Mucho texto dinámico que va a cambiar a cada ratoMucho texto dinámico que va a cambiar a cada rato'

    return (
        <View>
            <TextRenderizer title={title} text={text} />
            <HomeMain />
        </View>

    )
}
