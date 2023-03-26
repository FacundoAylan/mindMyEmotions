import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%'
  },
  title: {
    fontFamily:'logo',
    color: 'black',
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 36,
    letterSpacing: 2,
    color: '#662483'
  },
  container: {
    backgroundColor: "#E0ECFF",
    height: 60,
    margin: 10,
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
    height: 50,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#662483',
    borderRadius:12,
    fontSize: 30,
    marginTop: 10,
    borderColor: '#662483',
    borderWidth:2, 
  },
  textContainer: {
    fontFamily:  "text",
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    color: 'white',
    fontSize: 20
  },
  modalButton: {
    borderRadius:60 , 
    height:60, 
    width:60, 
    flex:0,
    justifyContent:'center',
    alignItems:'center', 
    textAlign:'center', 
    marginLeft:'40%', 
    backgroundColor:'#662483',
    marginTop:2
  }
});