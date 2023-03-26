import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Theory ({ navigation, route}) {

  const {json, nameTheory, indexModule, nameNext, nameModule} = route.params;

  const theory = json.theory.filter((value) => value.nameTheory === nameTheory)

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.title}>{theory[0].title}</Text>
        <Text style={styles.description}>{theory[0].text}</Text>
        <TouchableOpacity
          key={nameTheory}
          onPress={() =>
            navigation.navigate(
              nameTheory === "Test de inteligencia emocional"
                ? "choiseTest"
                : "choice",
              { json, nameTheory, indexModule, nameNext, nameModule }
            )
          }
        >
          <View style={styles.container}>
            <Text style={styles.data}>Ingresar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

