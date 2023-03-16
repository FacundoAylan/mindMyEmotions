import React, { useState } from "react";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import  {validate}  from "./user_modules_info";
import {validateTopinc} from '../../../redux/slice/index'


export default function Choice({ navigation, route }) {

  const {json, nameTheory, name, indexModule } = route.params;
  const dispatch = useDispatch()

  const [isModalVisible, setModalVisible] = useState(false);
  const [random, setRandom] = useState();
  const url = ['https://i.ibb.co/QmQc16N/1.png','https://i.ibb.co/tBRn87m/2.png','https://i.ibb.co/YRmhjkY/3.png', 'https://i.ibb.co/gJwJ3Xg/4.png']
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  var indexChoise=0;
  const practice = json.practice.filter((value, index) =>{ 
    if(value.nameTheory === nameTheory){
      indexChoise= index+1;
      return(true)
    }
  })
  // Arreglar esta cosa horrible no tenia tiempo
  const validateDate = (answer) => {
    if(practice[0].answer === answer){
      // validate.map((value) => {
      //   if(value.module === name){
      //     if(value.topics.length === indexChoise){
      //       try{
      //         validate[indexModule+1].complete = true;
      //         return (
      //           navigation.navigate("homeMain")
      //         )
      //       }catch(error){
      //         console.log(error)
      //       }
      //     }else{
            try{
              // value.topics[indexChoise].complete= true;
              dispatch(validateTopinc(indexChoise))
              return (
                navigation.navigate("topincs", {
                  json: json,
                  name: name,
                  indexModule: indexModule,
                 })
              )
            }catch(error){
              console.log(error)
            }
      //       }
      //   }
      // })
    }else{
      setRandom(Math.floor(Math.random() * 3));
      toggleModal()
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
