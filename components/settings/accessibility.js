import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icons from '@expo/vector-icons/MaterialIcons';


const Accessibility_options = ({ navigation }) => {
  return (
    <>
      <View style={styles.app_info}>
        <Text style={styles.setting_header}>
          Screen Reader
        </Text>
        <Text style={{ fontSize: 16 }}>Pronouce # as "hashtag"</Text>
      </View>
      <View style={[{ borderTopWidth: 1 }, styles.app_info]}>
        <Text style={[{ marginTop: 10 }, styles.setting_header]}>
          Motion
        </Text>
        <View>
          <Text style={{ fontSize: 16 }}>Reduce motion</Text>
          <Text>Limits the amount of in-app animations</Text>
        </View>
      </View>
    </>
  );
}

export default Accessibility_options

const styles = StyleSheet.create({
    settings_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 14,
        margin:16,
    },

    setting_header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    
    setting_content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    app_info: {
        // flexDirection: 'row',
        margin: 16,
        // borderTopColor: 'white',
        // borderTopWidth: 1,
    }
})