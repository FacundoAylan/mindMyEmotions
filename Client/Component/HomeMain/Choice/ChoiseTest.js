import React, { useState } from "react";
import {  Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { Count } from "./count";
import { useSelector, useDispatch } from "react-redux";
import {validateTopinc} from '../../../redux/actions/index'

export default function Choice({ navigation, route }) {

  const { json, nameTheory, indexModule, nameNext, nameModule} = route.params;

  const validate = useSelector((state) => state.loader);
  const JSON = json.practice.filter((value) => value.nameTheory === nameTheory);
  const questions = JSON[0].questions

  const [modal, setModal] = useState(false)
  const [index1, setIndex] = useState(0);
  const [title, setTitle] = useState(questions[0].title);
  const [text, setText] = useState(questions[0].text);
  const [countSum, setCount] = useState(0);
  const [URLimg, setImg] = useState('');

  const dispatch = useDispatch()
  
  const toggleModal = async ({pregunta, respuesta}) => {
    let index = await Count({pregunta,respuesta});
    //tengo que solucionar el tema de presionar el boton cuando no existen mas preguntas
    setCount(countSum+index1)
    //--------------------------------------------
    if(pregunta < questions.length){
      setIndex(pregunta)
      setTitle(questions[pregunta].title)
      setText(questions[pregunta].text)
    }else{
      if(nameNext!== ''){
        dispatch(validateTopinc({name: nameNext, value:true}))
      }
      if(nameNext=== ''){
        dispatch(validateTopinc({name: nameModule, value:true}))
      }
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
      <ScrollView>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{text}</Text>
        {questions[index1].answers.map((value) => {
          return (
            <TouchableOpacity key ={value} onPress={() => toggleModal({pregunta:index1 + 1, respuesta: value.charAt(0)})}>
              <View style={styles.containerButton}>
                <Text style={styles.textContainer}>{value}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Modal isVisible={modal} style={{ padding: 0, margin: 15 }}>
        <View>
        <Image
            style={styles.image}
            source={{
              uri: URLimg
              ,
            }}
          /> 
          <TouchableOpacity onPress={() => {
            if(nameNext=== ''){
              navigation.navigate('module')
            }else{
              navigation.navigate('topincs',{indexModule})
            }
          }}>
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