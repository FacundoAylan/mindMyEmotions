import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    height:'100%'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderWidth: 2,
    borderColor: '#662483',
    borderRadius: 18,
    elevation: 3,
    backgroundColor: "#662483",
    marginTop: 20,
    marginHorizontal: 50,
  },
  text: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'text',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 2,
    color: "white",
  },
  imagenFondo: {
    flex: 1,
    resizeMode: 'cover',
  },
});