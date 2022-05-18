import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/Feather';


const DashboardOption = ( props ) => {
  return (
      <Pressable onPress={props.onPress}>
        <View style={styles.card}>
          <Icons name={props.icon} size={30} />
          <Text style={{fontSize: 16, marginTop: 10}}>{props.name}</Text>
        </View>
      </Pressable>
  )
}

export default DashboardOption

const styles = StyleSheet.create({
    card: {
        width: 125,
        height: 125,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 },
        elevation: 5
    }
})