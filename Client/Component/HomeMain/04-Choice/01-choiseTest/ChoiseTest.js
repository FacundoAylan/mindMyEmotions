import React, { useState } from "react";
import {  Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
import {validateTopinc} from '../../../../redux/actions/index';
import { styles } from "./styles";

export default function ChoiceTest({ navigation, route }) {

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
    //tengo que solucionar el tema de presionar el boton cuando no existen mas preguntas
    setCount(countSum+index1)
    //--------------------------------------------
    if(pregunta < questions.length){
      setIndex(pregunta)
      setTitle(questions[pregunta].title)
      setText(questions[pregunta].text)
    }else{
      // habilita el siguiente mini modulo
      if(nameNext!== ''){
        dispatch(validateTopinc({name: nameNext, value:true}))
      }
      // habilita el siguiente modulo
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
        <Text style={{fontSize:20, padding:20}}>{text}</Text>
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
              navigation.navigate('homeMain')
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
