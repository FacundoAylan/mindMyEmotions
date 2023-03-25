import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  mainContainer: {
    paddingTop: '30%',
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%'
  },
  container: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor:'white',
    height: 80,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#662483'
  },
  text:{
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'logo',
    color: '#662483',
    letterSpacing: 2,
    fontSize: 25,
  },
  disabled: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    height: 80,
    marginHorizontal: 30,
    borderRadius: 14,
    borderWidth: 2,
    opacity:0.5,
    borderColor: 'grey',
    fontSize: 25,
  }
}) 