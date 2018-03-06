import React from 'react'

import {
  TextInput, StyleSheet
} from 'react-native'

export default Input = ({value, onChange, placeholder}) => <TextInput
  style={styles.input}
  value={value}
  placeholder={placeholder}
  onChangeText={onChange}/>


const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
