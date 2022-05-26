import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stats = () => {
  return (
      <>
        <View style={styles.card_container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>CO2 levels</Text>
                <Text style={{ fontSize: 24, marginTop: 50}}>70%</Text>
            </View>
        </View>
        <View style={styles.card_container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>CO2 levels in your city</Text>
                <Text style={{ fontSize: 24, marginTop: 50}}>58%</Text>
            </View>
        </View>
        <View style={styles.card_container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Amount of sensors in your city</Text>
                <Text style={{ fontSize: 24, marginTop: 50}}>58%</Text>
            </View>
        </View>
      </>
  )
}

export default Stats

const styles = StyleSheet.create({
    card_container: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 200,
        margin: 8,
    }
})