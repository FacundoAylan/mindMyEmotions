import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%',
    paddingTop: 40
  },
  title:
  {
    marginTop: 20,
    textAlign:'center',
    fontSize: 36,
    fontFamily: 'logo',
    color: '#662483',
    paddingBottom: 20
  },
  container: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor:'#662483',
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
    fontFamily: 'text',
    color: 'white',
    letterSpacing: 2,
    fontSize: 25,
  },
  textDisabled:{
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'text',
    color: 'black',
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
    backgroundColor: 'white',
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    maxWidth: 110,
    minWidth: 90,
    marginLeft: 262,
    borderRadius: 18,
    elevation: 13,
    backgroundColor: 'white',
    marginTop: 10,
  },
  textButton: {
    fontSize: 10,
    fontFamily: 'text',
  }
}) 