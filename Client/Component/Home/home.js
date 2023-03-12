import React, { useEffect} from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { increment, loadValidate } from '../../redux/slice/index'

function Home ({navigation}) {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(increment);
    dispatch(loadValidate);
    setTimeout(() => {
      navigation.navigate("login")
    }, 2000); 
  },[])
  return (
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.ibb.co/Vw9v0p5/mind-My-Emotion.png",
          }}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    height: "100%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#662483',
    backgroundColor: 'none',
  },
  image:{
    width: '81%',
    height: 60,
    borderRadius: 12,
    resizeMode: 'stretch'
  }
})
export default Home;