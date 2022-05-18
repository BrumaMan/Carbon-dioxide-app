import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Map from './components/map/Map';
import DashBoard from './components/dashboard/DashBoard';
import Settings from './components/settings/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <StatusBar barstyle="light-content"/>
      <Tab.Navigator initialRouteName='DashBoard'>
        <Tab.Screen name="Dashboard" component={DashBoard} options={{ tabBarIcon: ({color, size}) => (
          <Icons name="home" size={size} color={color} />
        ), headerShown: false }}></Tab.Screen>
        <Tab.Screen name="Map" component={Map} options={{ tabBarIcon: ({color, size}) => (
          <Icons name="map-pin" size={size} color={color} />
        ) }}></Tab.Screen>
        <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: ({color, size}) => (
          <Icons name="settings" size={size} color={color} />
        ), headerShown: false }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
