import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE }from 'react-native-maps';

const windowHeight = Dimensions.get('window').height;

const Map = () => {
  return (
    <View style={styles.card}>
      <MapView
       style={styles.map}
       provider={PROVIDER_GOOGLE}
       showsUserLocation={true}
       initialRegion={{
       latitude: 52.4812,
       longitude: -1.8995,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421}}
      />
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    card: {
        
        height: windowHeight,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 }
    }
})