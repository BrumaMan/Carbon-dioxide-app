import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Option from './DashboardOption';
import User from './User';
import Drawer from './Drawer'

const windowHeight = Dimensions.get('window').height;

export const DashBoard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Welcome Back!</Text>
        <View style={styles.content_container}>
          <View style={[styles.options, {marginTop: 55}]}>
            <Option name='Bookmark' icon='bookmark' />
            <Option name='Map' icon='map' onPress={() => navigation.navigate('Map')} />
          </View>
          <View style={styles.options}>
            <Option name='Search' icon='search' />
            <Option name='Settings' icon='settings' onPress={() => navigation.navigate('Settings')} />
          </View>
          <View style={styles.options}>
            <Option name='Stats' icon='bar-chart-2' />
            <Option name='Info' icon='info' />
          </View>
        </View>
        {/* <Drawer /> */}
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator()

const DashboardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name='Dashboard' component={DashBoard} options={{ headerLeft: () => (<User />)}}></Stack.Screen>
      {/* <Stack.Screen name='sfsf' component={Drawer}/> */}
    </Stack.Navigator>
  )
}
export default DashboardNavigator

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: 'blue',
  },

  header: {
    fontSize: 30, 
    color: 'white',
    marginTop: 70,
    marginLeft: 30,
    marginBottom: 50
  },

  content_container: {
    flex: 1,
    height: windowHeight,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  options: {
    flexDirection: 'row',
    // margin: 8,
  }
})