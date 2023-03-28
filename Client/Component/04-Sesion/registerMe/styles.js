import { StyleSheet } from "react-native";

export const styles = StyleSheet.create( {
  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
  },
  container:{
    paddingBottom:100
  },
  input: {
    fontFamily: 'title',
    justifyContent: "center",
    textAlign: "center",
    height: 40,
    borderColor: "#662483",
    borderWidth: 2,
    margin: 1,
    marginTop: 2,
    borderRadius: 14,
    marginHorizontal: 30,
    fontSize: 15
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,

    backgroundColor: "#662483",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#662483",
    marginHorizontal: 30,
  },
  text: {
    flex:0,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'text',
    color: "#662483",
    padding: 0,
    margin: 0,
    marginTop: 10,
    fontSize: 20,
    letterSpacing: 2
  },
  textButton: {
    fontFamily: 'text',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 2,
    color: 'white',
  },
  selectInput1:{
    fontSize: 20,
    height: 40, 
    color:'grey',
    paddingLeft: '35%'
  },
  selectInput:{
    fontSize: 20,
    height: 40, 
    color:'grey',
    paddingLeft: '25%' 
  },
  selectBox:{
    borderColor: "#662483",
    borderWidth: 2,
    height: 44,
    borderRadius: 14,
    marginHorizontal: 30,
    fontSize: 20
  },
  selectDropdown:{
    borderColor: "#662483",
    borderWidth: 2,
    width:'80%', 
    marginLeft: '10%'
  },
  imagenFondo: {
    flex: 1,
    resizeMode: 'cover',
  },
} );
