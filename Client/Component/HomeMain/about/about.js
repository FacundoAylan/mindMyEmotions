import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Linking, Image } from "react-native";
import { SvgUri } from 'react-native-svg';
import insta from '../../../assets/insta.svg'
import linkedin from '../../../assets/linkedin.svg'
import tiktok from '../../../assets/tiktok.svg'
import twitter from '../../../assets/twitter.svg'


export default function About( { navigation } ) {



  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Material adicional</Text>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL( 'https://www.mindmyemotions.com/' )}>
        <Text style={styles.textButton}>Nuestra página web</Text>

      </TouchableOpacity> 

      {/* <OpenURLButton url={'https://www.mindmyemotions.com/'} children={"Conoce más sobre 'Me'"} />
 */}

      <Text style={styles.title}>Contacto</Text>

      <TouchableOpacity onPress={() => Linking.openURL( 'https://www.instagram.com/mindmyemotions' )}>
        <View style={styles.socialsContainer}>
          <SvgUri
            width={45}
            height={45}
            uri={Image.resolveAssetSource( insta ).uri}
          />
          <Text style={styles.text}>instagram.com/mindmyemotions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL( 'https://www.tiktok.com/@mindmyemotions' )}>
        <View style={styles.socialsContainer}>
          <SvgUri
            width={45}
            height={45}
            uri={Image.resolveAssetSource( tiktok ).uri}
          />
          <Text style={styles.text}>tiktok.com/@mindmyemotions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL( 'https://www.twitter.com/MindMyEmotions' )}>
        <View style={styles.socialsContainer}>
          <SvgUri
            width={45}
            height={45}
            uri={Image.resolveAssetSource( twitter ).uri}
          />
          <Text style={styles.text}>twitter.com/MindMyEmotions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL( 'https://www.linkedin.com/company/mindmyemotions' )}>
        <View style={styles.socialsContainer}>
          <SvgUri
            width={45}
            height={45}
            uri={Image.resolveAssetSource( linkedin ).uri}
          />
          <Text style={styles.text}>linkedin.com/mindmyemotions</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#f29100',
    borderRightWidth: 5,
    borderRightColor: '#662483',
    minHeight: '100%'
  },
  socialsContainer: {
    flexDirection: "row",
    height: 60,
    marginLeft: 40,
  },
  textContainer:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'purple',
    size: '100%',
    marginTop: '5%'
  },
  title: {
    alignSelf: "center",
    fontSize: 27,
    marginVertical: 20,
    color: "#662483",
    fontWeight: "800",
  },
  button: {
    alignSelf: "center",
    height: 45,
    width: '78%',
    backgroundColor: '#f29100',
    marginLeft: '0%',
    borderRadius: 25,
    margin: 4,
    marginBottom: 20,
  },
  text: {
    paddingTop: '3%',
    marginLeft: 15,
    color: 'black',
  },
  textButton: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
    fontWeight: "600",
    fontSize: 17,
  }
})