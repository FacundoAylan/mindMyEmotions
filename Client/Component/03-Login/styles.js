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
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 50,
  },
  text: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'logo',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 2,
    color: "#662483",
  },
});