import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Option from './DashboardOption';
import User from './User';
import Search from './Search'
import Stats from './Stats'

const windowHeight = Dimensions.get('window').height;

const DashBoard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Welcome Back!</Text>
        <View style={styles.content_container}>
          <View style={[styles.options, {marginTop: 55}]}>
            <Option name='Bookmark' icon='bookmark' />
            <Option name='Map' icon='map' onPress={() => navigation.navigate('Map')} />
          </View>
          <View style={styles.options}>
            <Option name='Search' icon='search' onPress={() => navigation.navigate('Search')} />
            <Option name='Settings' icon='settings' onPress={() => navigation.navigate('Settings')} />
          </View>
          <View style={styles.options}>
            <Option name='Stats' icon='bar-chart-2' onPress={() => navigation.navigate('Stats')}/>
            <Option name='Info' icon='info' />
          </View>
        </View>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator()

const DashBoardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', animation: 'slide_from_right' }}>
      <Stack.Screen name='DashBoard' component={DashBoard}/>
      <Stack.Screen name='Search' component={Search}/>
      <Stack.Screen name='Stats' component={Stats}/>
    </Stack.Navigator>
  )
}
export default DashBoardNavigator

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