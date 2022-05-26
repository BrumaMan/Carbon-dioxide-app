import { React, useState } from 'react';
import { Dimensions, Text, StyleSheet, View, TextInput } from 'react-native';

const windowHeight = Dimensions.get('window').height;


const Search = () => {
  const [ text, setText ] = useState('')
  return (
    <>
      <View style={{backgroundColor: 'white', height: 70}}>
        <TextInput style={styles.search} placeholder="Search" onChangeText={text => setText(text)}/>
      </View>
        {text ?
        <View style={{backgroundColor: 'white', height: 70, margin: 8, borderRadius: 12}}>
          <Text style={{fontSize: 18, marginLeft: 16}}>{text}</Text>
        </View>
        :
          <View style={styles.container}>
            <View>
              <Text style={{color: 'gray', fontSize: 18}}>Search for a location</Text>
            </View>
          </View>}
    </>
  );
};

export default Search;


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  search: {
    backgroundColor: 'lightgrey',
    marginVertical: 16,
    marginHorizontal: 14,
    padding: 8,
    borderRadius: 16,
  }
})