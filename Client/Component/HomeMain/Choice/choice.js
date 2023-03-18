import React, { useState } from "react";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {validateTopinc} from '../../../redux/actions/index'


export default function Choice({ navigation, route }) {

  const {json, nameTheory, index} = route.params;
  const practice = json.practice.filter((practice) => practice.nameTheory === nameTheory);

  const [isModalVisible, setModalVisible] = useState(false);
  const [random, setRandom ] = useState(0);

  const url = ['https://i.ibb.co/LYmVXtV/Logo.png']

  const dispatch = useDispatch()

  const validateDate = (answer) => {
    if(practice[0].answer === answer){
      dispatch(validateTopinc({name:'Identificar', value:true}))
      navigation.navigate("topincs",{index})
    }else{
      setModalVisible(!isModalVisible)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{practice[0].title}</Text>
      <Text style={styles.textContainer}>{practice[0].text}</Text>
      {practice[0].answers.map((value) => {
        return (
          <TouchableOpacity
            onPress={() => validateDate(value.charAt(0))}
            key={value}
          >
            <View style={styles.container}>
              <Text style={styles.textContainer}>{value}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <Modal isVisible={isModalVisible} style={{padding:0, margin:15}}>
        <View >
          <Image
            style={styles.image}
            source={{
              uri: url[random],
            }}
          />
            <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
                <View style={styles.containerButton}>
                  <Text style={styles.textContainer}>Intentar de nuevo</Text>
                </View>
            </TouchableOpacity>
        </View>
      </Modal> 
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
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 32,
    color: "purple",
  },
  container: {
    backgroundColor: "#E0ECFF",
    height: 60,
    margin: 10,
  },
  textContainer: {
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    color: "purple",
  },
  image:{
    width: '100%',
    height: '90%',
    borderRadius: 12,
    resizeMode: 'stretch'
  },
  containerButton:{
    flex:0,
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderRadius:12,
    fontSize: 30,
    marginTop: 6,
    borderColor: '#662483',
    borderWidth:2
  }
});
