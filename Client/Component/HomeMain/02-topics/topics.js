import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export default function Topics ({ navigation, route }) {

  const {indexModule} = route.params;
  const json = useSelector((state) => state.loader.json);
  const validate = useSelector((state) => state.loader);

  return (
    <View>
      <ScrollView>
        {
          json[indexModule].topics.map((topic, indexChoise) =>{
              return ( 
                <TouchableOpacity key={topic} disabled={!validate[topic.split(" ").join("")]} onPress={() => navigation.navigate('theory',{
                  json: json[indexModule],
                  nameTheory: topic,
                  indexModule,
                  nameNext: indexChoise+1<json[indexModule].topics.length? json[indexModule].topics[indexChoise+1].split(" ").join(""): '',
                  nameModule: json[indexModule+1].module.split(" ").join("")
                })}>
                <View style={ validate[topic.split(" ").join("")]? styles.container: styles.disabled }>
                  <Text style={styles.textButton}>{topic}</Text>
                </View>
              </TouchableOpacity>
              )
            })
          }
        </ScrollView>
    </View>
  );
};

