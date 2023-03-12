import React, { useState } from "react";
import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export default function Choice({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [random, setRandom] = useState();
  const { name, nameTheory, practice } = route.params;
  const json = practice.filter((value) => value.nameTheory === nameTheory);
  const url = ['https://i.ibb.co/QmQc16N/1.png','https://i.ibb.co/tBRn87m/2.png','https://i.ibb.co/YRmhjkY/3.png', 'https://i.ibb.co/gJwJ3Xg/4.png']
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const validate = (answer) => {
    if(practice[0].answer === answer){
      return ( navigation.navigate("topincs", {name: name,}))
    }else{
      setRandom(Math.floor(Math.random() * 3));
      toggleModal()
    }
    
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{json[0].title}</Text>
      <Text style={styles.textContainer}>{json[0].text}</Text>
      {json[0].answers.map((value) => { 
        return ( 
          <TouchableOpacity
          key={value}
            onPress={() => validate(value.charAt(0))}
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
