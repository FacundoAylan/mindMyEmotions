import { StyleSheet } from "react-native";

export const styles = StyleSheet.create( {
  mainContaiiner:{
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    justifyContent:'center',
    textAlign: 'center',
    height: 100,
    margin: 6,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#662483',
    backgroundColor: '#662483',
  },
  textButton:{
    textAlign: 'center',
    fontFamily: 'text',
    letterSpacing: 2,
    color: "white",
    fontSize: 25,
    padding: 5
  },
  disabled: {
    justifyContent:'center',
    textAlign: 'center',
    backgroundColor:'white',
    height: 100,
    margin: 10,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#662483',
    opacity:0.5,
    color:'black'
  },
  textDisabled:{
    textAlign: 'center',
    fontFamily: 'text',
    letterSpacing: 2,
    color: "black",
    fontSize: 25,
    padding: 5
  }
})