import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

export default function ButtonNext ({module, ask, answer, value, isInputVisible, setIsInputVisible, toggleModal}){
  return(
    <TouchableOpacity
      key={value}
      onPress={() => {
        setIsInputVisible(!isInputVisible);
        toggleModal({module, ask, answer});
      }}
    >
      <View style={{flex:0, justifyContent:'center', textAlign:'center', height:40, width: '80%', borderWidth:2, borderColor:'#662483', margin:15, marginLeft:'10%', borderRadius:12, backgroundColor:'#662483'}}>
        <Text style={styles.textContainer}>Continuar</Text>
      </View>
    </TouchableOpacity>
    )
}