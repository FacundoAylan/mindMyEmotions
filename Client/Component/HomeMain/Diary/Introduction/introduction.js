import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DiaryNavigation from "../DiaryNavigation/diaryNavigation";


export default function Introduction( { navigation } ) {

  return (
    <DiaryNavigation>
      <View style={styles.container}>
        <View style={styles.ContainerText}>
          {
            <View>
              <Text style={styles.text}>Utiliza este espacio para hacer un viaje a tu interior.</Text>
              <Text style={styles.text}>Este es un lugar para que escribas razones para agradecer y para que poco a poco incorpores este habito en tu vida.</Text>
              <Text style={styles.text}>Utiliza este libro como tu lugar. Es tuyo y de nadie mas.</Text>
            </View>
          }
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate( 'data' )}
          key={'introduction'}
        >
          <View style={styles.containerButton}>
            <Text style={styles.textButton}>Continuar</Text>
          </View>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: "https://res.cloudinary.com/ds7h3huhx/image/upload/c_fit,g_center,w_1188,x_0/v1679012928/MME%20logos/Mind_My_Emotions_znokgz.png",
          }}
        />
      </View>
    </DiaryNavigation>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    height: "100%",
  },
  ContainerText: {
    flex:0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'pink',
    marginLeft: '5%',
    marginTop: '10%',
    width: '90%',
    height: '65%',
    borderRadius: 5,
    padding: '2%'
  },
  image: {
    width: '100%',
    height: '30%',
    borderRadius: 12,
    resizeMode: 'stretch',
    marginBottom: 10
  },
  text:{
    textAlign: 'center',
    color: 'purple',
    fontSize: 20  
  },
  containerButton: {
    flex:0,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: "#E0ECFF",
    height: 50,
    marginTop: 20,
    width: '80%',
    borderRadius: 8
  },
  textButton: {
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    color: "purple",
  }
} )
