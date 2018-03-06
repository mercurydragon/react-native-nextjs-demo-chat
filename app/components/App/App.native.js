import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import configureStore from '../../store/configureStore.js';

import {StyleSheet, Text, View,KeyboardAvoidingView} from 'react-native';

import Header from '../Header'
import Messages from '../Messages'
import Footer from '../Footer'
import io from 'socket.io-client'
import {addMessage, createSocket, setName, setMsgTmp, setNameTmp} from '../../reducers/ActionReducers.js'

type Props = {};
class App extends Component < Props > {
  sendMessage(ev, socket, author) {
    socket.emit('SEND_MESSAGE', {
      id: Date.now() + author.id,
      author: author,
      text: ev
    })
  }

  constructor(props) {
    super(props)
    //по-другому для андроида не работает, прокатит ли это для ios не знаю:)
    const socket = io('http://localhost:8080', {
      reconnectionDelay: 1000,
      reconnection: true,
      reconnectionAttempts: 10,
      transports: ['websocket'],
      agent: false,
      upgrade: false,
      rejectUnauthorized: false
    })

    socket.on('RECEIVE_MESSAGE', function(data) {
      props.addMessage(data)
    })
    socket.on('connect', () => {
      console.log("socket connected")
    })

    socket.on('connect_error', (err) => {
      console.log(err)
    })

    socket.on('disconnect', () => {
      console.log("Disconnected Socket!")
    })

    this.props.createSocket(socket)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Chat
          </Text>
          <Header/>
        </View>
        <Messages/>
          <View>
            <Footer sendMessage ={this.sendMessage} socket={this.props.socket} setName={this.props.setName} onTextChange={this.props.setMsgTmp} onNameChange={this.props.setNameTmp}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: 'lightseagreen',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
  }
});

const mapDispatchToProps = {
  addMessage,
  createSocket,
  setName,
  setMsgTmp,
  setNameTmp
}

const AppConnected = connect((state) => ({
  ...state.chat
}), mapDispatchToProps)(App)

export default RootApp = () => (
  <Provider store={configureStore({}, {})}><AppConnected/></Provider>
)
