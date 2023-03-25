import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'logo',
    letterSpacing: 2,
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
    fontSize: 36
  },
  description: {
    fontFamily: 'text',
    flex:0,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },
  container: {
    borderRadius: 14,
    borderWidth: 2,
    borderColor:'#662483',
    backgroundColor:'white',
    height: 60,
    margin: 10,
  },
  data:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
    marginTop: '3%',
    fontFamily: 'logo',
    letterSpacing: 2,
    fontSize: 25
  },
})