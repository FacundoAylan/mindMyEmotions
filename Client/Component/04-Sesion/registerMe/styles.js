import { StyleSheet } from "react-native";

export const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    overflow: "scroll",
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
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
    fontSize: 20
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    elevation: 3,
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#662483",
    marginHorizontal: 30,
  },
  text: {
    flex:0,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'logo',
    color: "#662483",
    padding: 0,
    margin: 0,
    marginTop: 10,
    fontSize: 25,
    letterSpacing: 2
  },
  textButton: {
    fontFamily: 'logo',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 2,
    color: '#662483',
  },
  selectInput1:{
    fontSize: 20,
    height: 40, 
    color:'grey',
    paddingLeft: '40%',
  },
  selectInput:{
    fontSize: 20,
    height: 40, 
    color:'grey',
    paddingLeft: '30%' 
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
  }
} );