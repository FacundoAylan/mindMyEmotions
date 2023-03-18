import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

// este componente contine el contenedor de cada modulo , se repite codigo 
export default function Modules ({navigation}) {

  const [reconocimiento, setReconocimiento] = useState(true);

  const habilidades = useSelector((state) => state.loader.habilidades)
  const [salut, setSalut] = useState(true);


  const onChangeHabilidades = () => {
    // setHabilidades(!isEnabled2);
  };

  const onChangeSalut = () => {
    setSalut(!isEnabled3);
  };

  
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        key={'reconocimiento'}
        disabled={!reconocimiento}
        onPress={() => navigation.navigate("topincs",{index: 0})}
      >
        <View style={reconocimiento ? styles.container : styles.disabled}>
          <Text style={styles.text}>Reconocimiento emocional</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        key={'habilidades'}
        disabled={habilidades}
        onPress={() => navigation.navigate("topincs",{index: 1})}
      >
        <View style={habilidades ? styles.container : styles.disabled}>
          <Text style={styles.text}>Habilidades socioemocionales</Text>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity
        key={'salut'}
        disabled={!salut}
        onPress={() => navigation.navigate("topincs",{index: 2})}
      >
        <View style={salut ? styles.container : styles.disabled}>
          <Text style={styles.text}>Salud mental</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({

  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%'
  },
  title: {
    alignSelf: "center",
    fontSize: 27,
    marginTop: 25,
    marginBottom: 17,
    fontWeight: "800",
    color: '#662483',

  },
  container: {
    backgroundColor:'white',
    height: 60,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#662483'
  },
  text:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
    fontSize: 20,
    marginTop: 13,
  },
  disabled: {
    height: 60,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 6,
    borderWidth: 2,
    opacity:0.5
  }
}) 