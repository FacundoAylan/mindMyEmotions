import React, { useState } from "react";
import {  Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import {validateTopinc} from '../../../../redux/actions/index';
import { styles } from "./styles";
import { Count } from "./count";
import Icon from 'react-native-vector-icons/Feather';

export default function ChoiceTest({ navigation, route }) {

  const { json, nameTheory, indexModule, nameNext, nameModule} = route.params;

  const JSON = json.practice.filter((value) => value.nameTheory === nameTheory);
  const questions = JSON[0].questions

  const [modal, setModal] = useState(false)
  const [index1, setIndex] = useState(0);
  const [title, setTitle] = useState(questions[0].title);
  const [text, setText] = useState(questions[0].text);
  const [countSum, setCount] = useState(0);
  const [URLimg, setImg] = useState(require('../../../../assets/images/0-6.png'));

  const dispatch = useDispatch()
  
  const toggleModal = async ({pregunta, respuesta}) => {
    //tengo que solucionar el tema de presionar el boton cuando no existen mas preguntas
    let count = Count({pregunta,respuesta})
    setCount(countSum+count)
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
        setImg(require('../../../../assets/images/0-6.png'))
      }
      if(countSum >= 7 && countSum <= 15){
        setImg(require('../../../../assets/images/7-15.png'))
      }
      if(countSum > 15 && countSum <= 25){
        setImg(require('../../../../assets/images/15-25.png'))
      }
      if(countSum > 25){
        setImg(require('../../../../assets/images/25.png'))
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
                <Text style={styles.textContainer}>{value.split(".")[1]}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Modal isVisible={modal} style={{ padding: 0, margin: 15 }}>
        <View>
        <Image
            style={styles.image}
            source={URLimg}
          /> 
          <TouchableOpacity onPress={() => {
              setCount(0)
              navigation.navigate('topincs',{indexModule})
          }}>
            <View style={styles.modalButton}>
              <Text style={{fontSize:36, color:'white'}}>
                <Icon name="arrow-right" size={30} color="white" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

