import { StyleSheet } from "react-native";

export const styles = StyleSheet.create( {
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: "#eaeaea",
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
  },
  title: {
    fontFamily: 'logo',
    letterSpacing: 5,
    fontSize: 36,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#662483',
    marginBottom: 15,
    fontWeight: '600'
  },
  input: {
    fontFamily: 'title',
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
    fontSize:15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#662483',
    marginHorizontal: 30,
  },
  text: {
    fontFamily:'logo',
    fontSize: 25,
    lineHeight: 23,
    letterSpacing: 2,
    color: '#662483',
  },
  label: {
    fontFamily:'logo',
    color: '#662483',
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginLeft: 30,
    letterSpacing: 2,
    fontSize: 20
  },
  imagenFondo: {
    flex: 1,
    resizeMode: 'cover',
    marginTop: 30
  },
} );