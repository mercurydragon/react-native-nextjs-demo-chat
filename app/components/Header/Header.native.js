import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = ({name}) => (
  <View>
    <Text>{name ? `Hi ${name}!` : 'Hi, anonymous'}</Text>
  </View>
)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });

export default Header
