import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import User from './User';
import { DashBoard } from './DashBoard';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Profile' component={User} />
      <Drawer.Screen name='User' component={User} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;