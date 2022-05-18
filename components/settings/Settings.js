import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notifications from './Notifcations'
import Accessibility from './accessibility'

const windowHeight = Dimensions.get('window').height;

// const Settings_page = () => {
//   return (
//     <View style={styles.container}>
//       <Notifications />
//     </View>
//   )
// }

const Stack = createNativeStackNavigator()

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
        <Pressable style={styles.settings_container}>
            <View>
                <Text style={styles.setting_header}>Account</Text>
                <Text style={styles.setting_description}>Change account settings</Text>
            </View>
            <View>
                <Icons name='arrow-forward-ios' size={23} />
            </View>
        </Pressable>

        <Pressable style={styles.settings_container}>
            <View>
                <Text style={styles.setting_header}>Appearance</Text>
                <Text style={styles.setting_description}>Change the way your app looks</Text>
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>

        <Pressable style={styles.settings_container}>
            <View>
                <Text style={styles.setting_header}>Data Usage</Text>
                <Text>Manage mobile data usage</Text>
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>

        <Pressable style={styles.settings_container} onPress={() => navigation.navigate('Notifications Settings')}>
            <View>
                <Text style={styles.setting_header}>Notifications</Text>
                <Text>Manage how you recieve notifications</Text>
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>

        <Pressable style={styles.settings_container} onPress={() => navigation.navigate('Accessibility Settings')}>
            <View>
                <Text style={styles.setting_header}>Accessibility</Text>
                <Text>Manage how content is displayed to you</Text>
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>

        <Pressable style={styles.settings_container}>
            <View>
                <Text style={styles.setting_header}>Permissions</Text>
                <Text>Manage permissions in the app</Text>
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>

        <View style={styles.app_info}>
            <Text style={[{ color: 'white', marginTop: 10}, styles.setting_header]}>App Information -</Text>
            <Text style={[{ color: 'white', marginTop: 10}, styles.setting_header]}> Version PROTOTYPE</Text>
        </View>

        <Pressable style={styles.settings_container}>
            <View>
                <Text style={styles.setting_header}>ChangeLog</Text>
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>

        <Pressable style={styles.settings_container}>
            <View>
                <Text style={styles.setting_header}>Support</Text>
                
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>

        <Pressable style={styles.settings_container}>
            <View>
                <Text style={styles.setting_header}>Report Bugs</Text>
                
            </View>
            <Icons name='arrow-forward-ios' size={23} />
        </Pressable>
    </ScrollView>
  )
}

const SettingsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', animationTypeForReplace: 'push', animation: 'slide_from_right' }}>
            <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
            {/* <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen> */}
            {/* <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen> */}
            {/* <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen> */}
            <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen>
            <Stack.Screen name="Accessibility Settings" component={Accessibility}></Stack.Screen>
            {/* <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen> */}
            {/* <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen> */}
            {/* <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen> */}
            {/* <Stack.Screen name="Notifications Settings" component={Notifications}></Stack.Screen> */}
        </Stack.Navigator>
    )
}

export default SettingsNavigator

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        backgroundColor: 'blue',
    },

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
        flexDirection: 'row',
        margin: 16,
        borderTopColor: 'white',
        borderTopWidth: 1,
    }
})