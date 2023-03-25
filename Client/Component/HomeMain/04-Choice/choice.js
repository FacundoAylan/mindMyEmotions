import React, { useState } from "react";
import {  Image, Text, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
import {validateTopinc, loadAnswer} from '../../../redux/actions/index'
import {Identify} from './identify/identify'
import {Emotions} from './emotions/emotions'
import {styles} from './styles/styles';
import ButtonNext from './Button/Button' 

export default function Choice({ navigation, route }) {

  const { json, nameTheory, indexModule, nameNext, nameModule} = route.params;
  /* 
    La variable JSON contine la información del módulo que incluye: 
    1-module(Nombre del modulo). 
    2-topics(Son los mini modulos de casa modulo). 
    3-theory(Contiene la teoria de cada mini modulo).
    4-practice(Contiene la practica de cada mini modulo).
    En Practice existe la varibale questions que contiene las preguntas y respuestas de cada mini modulo.
  */
  
  const JSON = json.practice.filter((value) => value.nameTheory === nameTheory);
  const questions = JSON[0].questions

//--------------------------------------------------------------------------------------------------------------------------------

/*
  modal(Sirve para habilitar o deshabilitar el modal).
  text modal(es el texto que se mostrara dentro del modal).
  URLimg(Imagen que se va a mostrar dentro del modal).
*/
  const [modal, setModal] = useState(false)
  const [textModal, setTextModal] = useState('Nuevo logro desbloqueado!!!!')
  const [URLimg, setImg] = useState('https://res.cloudinary.com/ds7h3huhx/image/upload/v1678583057/MEs/Alegr%C3%ADa_r6kb1s.png');
//--------------------------------------------------------------------------------------------------------------------------------
 
/*
 index1(Es un indice que me permite avanzar en las preguntas del modulo).
 title(Es el titulo de cada pregunta del modulo).
 text(Es la pregunta de cada modulo).
*/
  const [index1, setIndex] = useState(0);
  const [title, setTitle] = useState(questions[0].title);
  const [text, setText] = useState(questions[0].text);
//-------------------------------------------------------------------------------------------------------------------------------

  const dispatch = useDispatch()
  
  /* existen preguntas en las que tienes que ingresar una respuestas y tambien existen
   algunas que debes ingresar mas de una respuesta escrita por eso estas variables

  */
  const [textInputValues, setTextInputValues] = useState([
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
  ]);

  /*me permite modificar los input anteriores */
  const handleTextInputChange = (text, id) => {
    const updatedTextInputValues = textInputValues.map((textInput) => {
      if (textInput.id === id) {
        return { ...textInput, value: text };
      }
      return textInput;
    });
    setTextInputValues(updatedTextInputValues);
  };
  /*Existe preguntas en las cuales debes ingresar una descipcion */
  const [description, setDescription] = useState('');
  /*Estas varibales fueron creadas por que existen preguntas 
    en las cuales presionas un boton y te debe aparecer
    un input donde debes tipear por que elegiste esa respuesta
    y la funcion permite habilitar o desahbilitar ese input
  */
  const [isInputVisible, setIsInputVisible] = useState(false); 
  
  const handleButtonPress = () => {
    setIsInputVisible(!isInputVisible); 
  }
  //----------------------------------------------------------------------------------------------------------------------

  /* Esta funcion permite controla el comportamiento del modal*/
  const toggleModal = async ({module, ask, answer}) => {
    setIsInputVisible(false);
    dispatch(loadAnswer({module, ask, answer}))
    if(ask < questions.length){
      setIndex(ask)
      setTitle(questions[ask].title)
      setText(questions[ask].text)
    }else{
      // habilita el siguiente mini modulo
      if(nameNext!== ''){
        dispatch(validateTopinc({name: nameNext, value:true}))
      }
      // habilita el siguiente modulo
      if(nameNext=== ''){
        dispatch(validateTopinc({name: nameModule, value:true}))
      }
      setModal(!modal)
    }

  };
 // -------------------------------------------------------------------------------------------------------
  /*Existe una pregunata en donde debes presionar tu sentiiento y mediante eso te muestra un modal determinado segun su eleccion*/
  const identify = ({module, ask, answer}) =>{
    if(answer.charAt(0) === 'a'){
      setTextModal(Identify[0].text)
    }
    if(answer.charAt(0) === 'b'){
      setTextModal(Identify[1].text)
    }
    if(answer.charAt(0) === 'c'){
      setTextModal(Identify[2].text)
    }
    if(answer.charAt(0) === 'd'){
      setTextModal(Identify[3].text)
    }
    if(answer.charAt(0) === 'e'){
      setTextModal(Identify[4].text)
    }
    setModal(!modal)
    toggleModal({module, ask, answer})
  }
//-----------------------------------------------------------------------------------------------------------

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.title}>{title}</Text>
        <Text style={{fontSize:20, padding:25}}>{text}</Text>
        {questions[index1].answers.map((value, index) => {
          if (value.charAt(0) === "¿") {
            console.log(value.split("-")[0])
            return (
              <View style={{width:'96%', marginLeft:5}}>
                <TouchableOpacity onPress={handleButtonPress}>
                  <View style={styles.containerButton}>
                    <Text style={styles.textContainer}>{value.split("-")[1]}</Text>
                  </View>
                </TouchableOpacity>
                {isInputVisible &&  (
                  <View style={{width:'90%', marginLeft:20}}>
                    <Text style={styles.textContainer}>{value.split("-")[0]}</Text>
                    {
                      value.split("-")[0] === "¿Text?"?
                      <TextInput                   
                      multiline={value.split("-")[0] === "¿Text?"? true: false}
                      numberOfLines={7}
                      placeholder="Ingresa tu texto aquí" 
                      style={styles.caso1} 
                      />
                      :
                      <TextInput                   
                      placeholder="Ingresa tu texto aquí" 
                      style={styles.caso2} 
                      />
                      
                    }
                    <ButtonNext 
                      module={nameTheory} 
                      ask={index1 + 1} 
                      answer ={value} 
                      value={value} 
                      isInputVisible={isInputVisible} 
                      setIsInputVisible={setIsInputVisible} 
                      toggleModal={toggleModal}
                    />
                  </View>
                )}
            </View>
            );
          }

          if(value === 'Texto'){
            return (
              <ScrollView>
                <TextInput
                  style={{height:150, width: '90%', borderWidth:2, borderColor:'purple', margin:15, marginLeft:'5%', borderRadius:12, backgroundColor:'white', padding:25}}
                  multiline={true}
                  numberOfLines={7}
                  onChangeText={setDescription}
                  value={description}
                  placeholder="Digite seu texto aqui"
                />
                <TouchableOpacity
                  key={value}
                  onPress={() => {
                    setDescription('')
                    toggleModal({
                      module: nameTheory,
                      ask: index1 + 1,
                      answer: value,
                    });
                  }}
                >
                  <View style={{flex:0, justifyContent:'center', textAlign:'center', height:40, width: '80%', borderWidth:2, borderColor:'purple', margin:15, marginLeft:'10%', borderRadius:12, backgroundColor:'white'}}>
                    <Text style={styles.textContainer}>Continuar</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            );
          }


          if(value.length === 2){
            if (questions[index1].answers.length === index+1){
              return(
                <View>
                  <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:20, paddingTop:23, paddingLeft:10}}>{index+1}</Text>
                  <TextInput
                    style={{height:40, width: '80%', borderWidth:2, borderColor:'purple', margin:15, borderRadius:12, paddingLeft:20}}
                    key={textInputValues[index].id}
                    value={textInputValues[index].value}
                    onChangeText={(text) => {handleTextInputChange(text,textInputValues[index].id)}}
                  />
                  </View>
                    <TouchableOpacity
                      key={value}
                      onPress={() =>{
                        setTextInputValues([
                          { id: 0, value: '' },
                          { id: 1, value: '' },
                          { id: 2, value: '' },
                          { id: 3, value: '' },
                          { id: 4, value: '' }
                        ]
                        );
                        toggleModal({module: nameTheory,ask: index1 + 1,answer: value,})
                      }}
                    >
                      <View style={{flex:0, justifyContent:'center', textAlign:'center', height:40, width: '80%', borderWidth:2, borderColor:'purple', margin:15, marginLeft:'10%', borderRadius:12, backgroundColor:'white'}}>
                        <Text style={styles.textContainer}>Continuar</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              )
            }
            else{
              return(
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:20, paddingTop:23, paddingLeft:10}}>{index+1}</Text>
                  <TextInput
                    style={{height:40, width: '80%', borderWidth:2, borderColor:'purple', margin:15, borderRadius:12, paddingLeft:20}}
                    key={textInputValues[index].id}
                    value={textInputValues[index].value}
                    onChangeText={(text) => handleTextInputChange(text,textInputValues[index].id)}
                  />
                </View>
              )
            }
          }
          if(value === 'imagen'){
            if(questions[index1].answers.length === index+1){
              return(
                <ScrollView>
                  <View>
                    <View style={{width: 200, height: 200, marginLeft:'25%'}}>
                      <Image
                        style={{width: '100%', height: '100%', resizeMode: 'contain'}} 
                        source={{
                          uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/v1678583057/MEs/Alegr%C3%ADa_r6kb1s.png",
                        }}
                      />
                    </View>
                    <TextInput
                      style={{height:40, width: '80%', borderWidth:2, borderColor:'purple', marginLeft:40, marginTop:20, borderRadius:12, paddingLeft:20}}
                    />
                </View>  
                <TouchableOpacity
                  key={value}
                  onPress={() =>
                    nameTheory === "Identificar" && index1 + 1 === 1
                      ? identify({
                          module: nameTheory,
                          ask: index1 + 1,
                          answer: value,
                        })
                      : toggleModal({
                          module: nameTheory,
                          ask: index1 + 1,
                          answer: value,
                        })
                  }
                >
                  <View style={{flex:0, justifyContent:'center', textAlign:'center', height:40, width: '80%', borderWidth:2, borderColor:'purple', margin:15, marginLeft:'10%', borderRadius:12, backgroundColor:'white'}}>
                    <Text style={styles.textContainer}>Continuar</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
              )
            }else{
                return(
                <ScrollView>
                  <View>
                    <View style={{width: 200, height: 200, marginLeft:'25%'}}>
                      <Image
                        style={{width: '100%', height: '100%', resizeMode: 'contain'}} 
                        source={{
                          uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/v1678583057/MEs/Alegr%C3%ADa_r6kb1s.png",
                        }}
                      />
                    </View>
                    <TextInput
                      style={{height:40, width: '80%', borderWidth:2, borderColor:'purple', marginLeft:40, marginTop:20, borderRadius:12, paddingLeft:20}}
                    />
                  </View>          
                </ScrollView>
                )
            }

          }
          else{
            return (
              <TouchableOpacity key ={value} onPress={() => nameTheory === 'Identificar' && index1+1===1? identify({module:nameTheory, ask:index1 + 1, answer: value}) :toggleModal({module:nameTheory, ask:index1 + 1, answer: value})}>
                <View style={styles.containerButton}>
                  <Text style={styles.textContainer}>{value}</Text>
                </View>
              </TouchableOpacity>
            );
          }
        })}
        
      </ScrollView>

      <Modal isVisible={modal} style={{ padding: 0, margin: 15, backgroundColor: 'white', borderColor:'purple', borderWidth:2, borderRadius:12 }}>
        <View>
          <Text style={{fontSize:25, color: 'purple',flex:0,justifyContent:'center',alignItems:'center', textAlign:'center', fontFamily:'logo'}}>{textModal}</Text>
        <Image
            style={{height:400}}
            source={{
              uri: URLimg
              ,
            }}
          /> 
          <TouchableOpacity 
          onPress={() => {
            if(nameNext=== ''){
              navigation.navigate('homeMain')
            }
            if(nameTheory === 'Identificar' && index1===1){
              setModal(!Modal)
            }else{
              navigation.navigate('topincs',{indexModule})
            }
            setTextModal('Nuevo logro desbloqueado')
          }}>
            <View style={{borderRadius:60 , height:60, width:60, flex:0,justifyContent:'center',alignItems:'center', textAlign:'center', marginLeft:'40%', backgroundColor:'purple'}}>
              <Text style={{fontSize:36, color:'white'}}>{"=>"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

