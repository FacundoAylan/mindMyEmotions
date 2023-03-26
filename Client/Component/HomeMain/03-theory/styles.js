import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: 'center',
    textAlign:'center',
    paddingBottom: 25
  },
  title: {
    fontFamily: 'logo',
    letterSpacing: 2,
    flex: 0,
    textAlign: 'center',
    color: '#662483',
    fontSize: 36
  },
  description: {
    fontFamily: 'text',
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },
  container: {
    borderRadius: 14,
    borderWidth: 2,
    borderColor:'#662483',
    backgroundColor:'#662483',
    height: 60,
    margin: 10,
  },
  data:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    marginTop: '3%',
    fontFamily: 'title',
    letterSpacing: 2,
    fontSize: 25
  },
})