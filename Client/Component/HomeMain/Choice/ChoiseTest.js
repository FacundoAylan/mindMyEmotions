import React, { useState } from "react";
import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Count } from "./count";

export default function Choice({ navigation, route }) {
  const { name, nameTheory, practice } = route.params;
  const json = practice.filter((value) => value.nameTheory === nameTheory);
  const questions = json[0].questions

  const [modal, setModal] = useState(false)
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(questions[0].title);
  const [text, setText] = useState(questions[0].text);
  const [countSum, setCount] = useState(0);
  const [URLimg, setImg] = useState('');
  
  const toggleModal = async ({pregunta, respuesta}) => {
    let index = await Count({pregunta,respuesta});
    //tengo que solucionar el tema de presionar el boton cuando no existen mas preguntas
    setCount(countSum+index)
    //--------------------------------------------
    if(pregunta < questions.length){
      setIndex(pregunta)
      setTitle(questions[pregunta].title)
      setText(questions[pregunta].text)
    }else{
      if(countSum <= 6){
        setImg('https://i.ibb.co/VSxFhWP/0-6.jpg')
      }
      if(countSum >= 7 && countSum <= 15){
        setImg('https://i.ibb.co/XCzXTRt/7-15.jpg')
      }
      if(countSum > 15 && countSum <= 25){
        setImg('https://i.ibb.co/CJXkHL5/15-25.jpg')
      }
      if(countSum > 25){
        setImg('https://i.ibb.co/2gLBKR5/25.jpg')
      }
      setModal(!modal)
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{text}</Text>
      {questions[index].answers.map((value) => {
        return (
          <TouchableOpacity key ={value} onPress={() => toggleModal({pregunta:index + 1, respuesta: value.charAt(0)})}>
            <View style={styles.containerButton}>
              <Text style={styles.textContainer}>{value}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      <Modal isVisible={modal} style={{ padding: 0, margin: 15 }}>
        <View>
        <Image
            style={styles.image}
            source={{
              uri: URLimg
              ,
            }}
          /> 
          <TouchableOpacity onPress={() => navigation.navigate('topincs',{name})}>
            <View style={styles.containerButton}>
              <Text style={styles.textContainer}>Terminar</Text>
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