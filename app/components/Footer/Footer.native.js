import React from 'react'
import {
  ReactNative,
  StyleSheet,
  View,
  Text,
  Button,TextInput
} from 'react-native';
// import Button  from '../native/Button.js'
import  Input from '../native/Input.js'
import {reduxForm } from 'redux-form'


const NameForm = ({clients, setName, onNameChange, nameTmp}) => (<View style={styles.form}>
    <Input value = {nameTmp} onChange={onNameChange} placeholder='Enter your name'/>
    <Button style={styles.send} title="Ok" onPress={() => setName(nameTmp)}>
    </Button>
</View>)

const MessageForm = ({sendMessage, setText, socket, author, msgText, onTextChange}) => (<View style={styles.form}>
    <Input value = {msgText} onChange={onTextChange} style={styles.input} underlineColorAndroid="transparent"  placeholder='Enter message ...'/>
    <Button title="Ok" style={styles.send} onPress={() => sendMessage(msgText, socket, author)}>
    </Button>
</View>)

const Footer = ({sendMessage, socket, setName, name, me, msgText, onTextChange, onNameChange, nameTmp}) => {
  return (
    <View style={styles.footer}>
      {!me.name ? <NameForm setName={setName} onNameChange={onNameChange} nameTmp={nameTmp}/> : null }
      <MessageForm sendMessage={sendMessage} socket={socket} author={me} msgText={msgText} onTextChange={onTextChange}/>
    </View>
  )
}

const styles = StyleSheet.create({
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
    flex: 1,
  },
  form:{
      flexDirection: 'row',
      flex: 1
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee'
  }
});


export default Footer
