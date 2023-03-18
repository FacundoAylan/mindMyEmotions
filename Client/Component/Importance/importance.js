import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import TextRenderizer from '../TextRenderizer/textRenderizer';
import HomeMain from '../HomeMain/homeMain';


export default function Importance() {

    let razonDeSer = 'Razón de ser'
    let razonDeSerText = "Sabemos que en nuestro país, Colombia, la salud mental, la educación emocional y habilidades para la vida, pueden llegar a ser temas de los que se hable poco y así mismo, de los que se trabaje igual. Por eso, nos convertimos en un proyecto social que busca ser un apoyo para familias, colegios, educadores/as o cuidadores/as, para que desde la infancia, puedan tratar estos temas que desde nuestra perspectiva, son fundamentales para el buen desarrollo social y emocional de niños, niñas y adolescentes."

    let inteligenciaEmocional = '¿Inteligencia emocional?'
    let inteligenciaEmocionalText = "Las relaciones sociales, la autoestima o la gestión emocional en la niñez y la adolescencia forman parte esencial del desarrollo psicosocial."

    let saludMental = '¿Salud mental?'
    let saludMentalText = "Criar a un niño puede ser un reto. Aun en las mejores circunstancias, sus comportamientos y emociones pueden cambiar con frecuencia y rápidamente. Hay momentos en que todo niño se pone triste o está ansioso, irritable o agresivo. A veces resulta difícil para los niños quedarse quietos, prestar atención o interactuar con los demás. En la mayoría de los casos, estas son solo fases normales del desarrollo.Sin embargo, en el caso de algunos niños, estos comportamientos pueden indicar un problema más grave."

    let habilidadesParaLaVida = '¿Habilidades para la vida?'
    let habilidadesParaLaVidaText = "Cada siglo es diferente y cada uno tiene necesidades diferentes. Estas habilidades progresan a lo largo de la vida, pero como en los primeros años se desarrollan capacidades cognitivas, motrices, emocionales, lingüísticas y sociales, es oportuno construirlas lo más temprano posible para que alcancen su máximo potencial."

    let educacion = 'Educación'
    let educacionText = "Las emociones visten cada aspecto de nuestras vidas y de nuestra cotidianidad. Saber controlarlas, gestionarlas y utilizarlas a través de la inteligencia emocional nos permitirá, sin duda, afrontar nuestro día a día de un modo más eficiente. Emoción, pensamiento y acción son los tres pilares que unen cada instante de nuestro ser. De ahí, la importancia de profundizar en ese tipo de enseñanzas para afrontar diversas situaciones. Entonces ¿no es imprescindible que eduquemos a los y las más peques en inteligencia emocional y habilidades para la vida?"


    let diversidad = 'Diversidad'
    let diversidadText = "Todos los niños, niñas y adolescentes en Colombia, tendran acceso a la educacion emocional y al tratamiento adecuado de su salud mental. Sabemos que aunque en nuestro país puede ser a veces un privilegio hablar y tratar estos temas, estamos seguras que con las herramientas necesarias, todos y todas podremos contribuír a que en Colombia sean cada vez más los niños, niñas y adolescentes que conozcan y aprendan sobre educación emocional y habilidades para la vida."

    let creatividad = 'Creatividad'
    let creatividadText = "Diseñamos juegos, libros y material muy didáctico para que los niños y niñas desde temprana edad y los adolecentes, puedan comprender con facilidad y sin tantos tabúes la importancia de entender sus emociones para trabajar en ellas."

    let noOlvidar = 'No olvidar'
    let noOlvidarText = "Que la primera entrada que tenemos son los adultos, colegios, fundaciones, educadores o cuidadores. Nuestro contenido va hacia ellos, hacia esas personas que necesitan nuestra ayuda para enfrentar los retos que trae la educación emocional y la salud mental."



    return (
        <ScrollView style={styles.mainContainer}>
            <View>
                <TextRenderizer title={razonDeSer} text={razonDeSerText} />
                <TextRenderizer title={inteligenciaEmocional} text={inteligenciaEmocionalText} />
                <TextRenderizer title={saludMental} text={saludMentalText} />
                <TextRenderizer title={habilidadesParaLaVida} text={habilidadesParaLaVidaText} />
                <TextRenderizer title={educacion} text={educacionText} />
                <TextRenderizer title={diversidad} text={diversidadText} />
                <TextRenderizer title={creatividad} text={creatividadText} />
                <TextRenderizer title={noOlvidar} text={noOlvidarText} />
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create( {
    mainContainer: {
        borderLeftWidth: 5,
        borderLeftColor: '#f29100',
        borderRightWidth: 5,
        borderRightColor: '#662483',
        minHeight: '100%'
    }
} )