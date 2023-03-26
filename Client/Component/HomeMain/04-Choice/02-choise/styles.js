import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%',
    paddingBottom: 30
  },
  title: {
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    fontFamily:  "logo",
    fontSize: 36,
    color: '#662483',
  },
  description:{
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize:25,
    padding: 5

  },
  container: {
    backgroundColor: "#E0ECFF",
    height: 60,
    margin: 10,
  },
  textContainer: {
    fontFamily:  "text",
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    padding: 5
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
    height: 60,
    width: '100%',
    backgroundColor: '#662483',
    borderRadius:14,
    fontSize: 30,
    marginTop: 20,
    borderColor: '#662483',
    borderWidth:2,
    width: '90%',
    marginLeft: '5%',
    padding: 2
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
    margin: 0,
    marginTop: 3,
    borderWidth: 2,
    borderColor: '#662483',
    marginHorizontal: 30,
  },
  textCaso: {
    fontFamily:  "text",
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    color: 'black',
    fontSize: 20,
    padding: 5
  },
  caso1:{
    height:150,
    width: '90%', 
    borderWidth:2, 
    borderColor:'#662483', 
    margin:15, 
    marginLeft:'5%', 
    borderRadius:12, 
    backgroundColor:'white', 
    padding:25,
  },
  caso2: { 
    borderWidth: 1, 
    borderColor: 'gray', 
    marginTop: 10, 
    padding: 5, 
    borderRadius: 5 ,
    height:50, 
    borderWidth:2, 
    borderColor:'#662483', 
    borderRadius: 14,
  },
  containerModal: { 
    margin: 15, 
    backgroundColor: "#FFE1AE", 
    borderColor:'#662483', 
    borderWidth:2, 
    borderRadius:12, 
  },
  logModal:{
    flex:1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 36,
    width: '100%',
    color: '#662483',
    flex:0, 
    fontFamily:'logo',
    marginTop: 128
  },
  textModal:{
    flex:1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 17,
    width: '100%',
    color: '#662483',
    flex:0, 
    fontFamily:'text',
    marginTop: windowHeight*0.1,
    padding: 8
  },
  buttonModal:{
    borderRadius:60 , 
    height:60, 
    width:60, 
    flex:0,
    justifyContent:'center',
    alignItems:'center', 
    textAlign:'center', 
    marginLeft:'40%', 
    backgroundColor:'#662483'
  },
  containerImg: {
    height: windowHeight*0.4, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding:0
  },
  modalImg:{
    height: '100%', 
    width: '100%', 
    alignSelf: 'center', 
    resizeMode: 'contain',
  }

})
