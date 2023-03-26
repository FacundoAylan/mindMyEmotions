import { StyleSheet } from "react-native";

export const styles = StyleSheet.create( {
  container: {
    backgroundColor:'white',
    height: 100,
    margin: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#662483'
  },
  textButton:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'logo',
    letterSpacing: 2,
    color: "#662483",
    fontSize: 25,
    marginTop: '10%'
  },
  disabled: {
    backgroundColor:'white',
    height: 100,
    margin: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#662483',
    opacity:0.5
  }
})