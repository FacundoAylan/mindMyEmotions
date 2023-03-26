import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%',
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
    color: '#662483',
    fontSize: 20
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
  caso1:{
    height:150,
    width: '90%', 
    borderWidth:2, 
    borderColor:'#662483', 
    margin:15, 
    marginLeft:'5%', 
    borderRadius:12, 
    backgroundColor:'white', 
    padding:25
  },
  caso2: { 
    borderWidth: 1, 
    borderColor: 'gray', 
    marginTop: 10, 
    padding: 5, 
    borderRadius: 5 
  },
  containerModal: { 
    padding: 5,
    margin: 15, 
    backgroundColor: 'white', 
    borderColor:'#662483', 
    borderWidth:2, 
    borderRadius:12 
  },
  textModal:{
    flex:0,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#662483',
    flex:0, 
    fontFamily:'logo'
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
  }

})
