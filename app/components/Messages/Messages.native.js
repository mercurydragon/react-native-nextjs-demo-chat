import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Messages extends React.Component {
  // componentDidUpdate () {
  //   window.scrollTo(0, document.body.scrollHeight)
  // }

  render () {
    const messages = this.props.messages || []
    return (
        <FlatList
          data={messages}
          renderItem={({item}) =>{return(<View style={styles.rowText}><Text  style={styles.sender}>{item.author.name}</Text><Text  style={styles.message}>{item.text}</Text></View>)}}
        />
    )
  }
}

const styles = StyleSheet.create({
  rowText: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  message: {
    fontSize: 18
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10
  },
});

export default Messages
