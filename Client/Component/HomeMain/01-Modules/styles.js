import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  mainContainer: {
    paddingTop: '50%',
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%'
  },
  container: {
    backgroundColor:'white',
    height: 80,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#662483'
  },
  text:{
    fontFamily: 'logo',
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'purple',
    letterSpacing: 2,
    fontSize: 25,
    marginTop: 13,
    paddingTop: '2%'
  },
  disabled: {
    height: 80,
    marginHorizontal: 30,
    borderRadius: 14,
    borderWidth: 2,
    opacity:0.5,
    borderColor: 'grey',
    fontSize: 25,
  }
}) 