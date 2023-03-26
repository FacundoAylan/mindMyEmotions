import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Instructions from "./instructions";
import { styles } from "./styles";

// este componente contine el contenedor de cada modulo 
export default function Modules ({navigation}) {

  const [ showInstructions, setShowInstructions ] = useState( false )

  const handleShowInstructions = () => {
    setShowInstructions( !showInstructions )
  }

  const validate = useSelector((state) => state.loader); 
  const modules = useSelector((state) => state.loader.modules); 

  return (
    <View>

      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleShowInstructions}
        >
          <Text style={styles.textButton}> {showInstructions === false ? 'Instrucciones' : 'Modulos'}</Text>
        </TouchableOpacity>

        {showInstructions === false &&
      <ScrollView>
        <Text style={styles.title}>Módulos de aprendizaje </Text>
        {
              modules.map( ( module, index ) => {
                return (
              <TouchableOpacity
                    key={index}
                    disabled={!validate[ module.split( " " ).join( "" ) ]}
                    onPress={() => module !== 'Salud mental' ? navigation.navigate( "topincs", { indexModule: index } ) : navigation.navigate( "diary" )}
              >
                    <View style={validate[ module.split( " " ).join( "" ) ] ? styles.container : styles.disabled}>

                  <Text style={validate[module.split(" ").join("")] ? styles.text: styles.textDisabled}>{module}</Text>
                </View>
              </TouchableOpacity>

            )
              } )
        }
      </ScrollView>
        }
      </View>

      {showInstructions && <Instructions />}

    </View>
  );
}
