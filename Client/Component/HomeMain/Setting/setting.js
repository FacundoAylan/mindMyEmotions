import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Setting () {
  return (
    <View>
      <View style={styles.container}>
        <Text>Configuracion</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    background:'red'
  }
}) 