import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icons from '@expo/vector-icons/MaterialIcons';

const NotificationsOptions = ({ navigation }) => {
  return (
      <>
        <View style={styles.app_info}>
            <Text style={[{ marginTop: 10}, styles.setting_header]}>Push notifications</Text>
        </View>
        <View style={styles.app_info}>
            <Text style={[{ marginTop: 10}, styles.setting_header]}>SMS notifications</Text>
        </View>
        <View style={styles.app_info}>
            <Text style={[{ marginTop: 10}, styles.setting_header]}>Email notifications</Text>
        </View>
      </>
  )
}

export default NotificationsOptions

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