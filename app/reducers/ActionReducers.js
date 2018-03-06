// message ={
//   id,
//   author,
//   text
// }

export const ADD_MESSAGE = 'chat/ADD_MESSAGE'
export const CREATE_SOCKET = 'chat/CREATE_SOCKET'
export const SET_NAME = 'chat/SET_NAME'
export const SET_MSG_TMP = 'chat/SET_MSG_TMP'
export const SET_NAME_TMP = 'chat/SET_NAME_TMP'

export const chatInitialState = {
  socket: {},
  clients: [],
  messages: [],
  me: {},
  msgText:'',
  nameTmp:''
}

export function chatReducer (state = chatInitialState, action = {}) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.newMsg]
      }
    case CREATE_SOCKET:
      return {
        ...state,
        socket: action.socket
      }
    case SET_NAME:
      return {
        ...state,
        me: {id: Date.now() + action.name, name: action.name}
      }
    case SET_MSG_TMP:
      return {
        ...state,
        msgText: action.msgText
      }
    case SET_NAME_TMP:
      return {
        ...state,
        nameTmp: action.nameTmp
      }
    default:
      return state
  }
}

export function addMessage (newMsg) {
  return {
    type: ADD_MESSAGE,
    newMsg: newMsg
  }
}

export function createSocket (socket) {
  return {
    type: CREATE_SOCKET,
    socket: socket
  }
}

export function setName (name) {
  return {
    type: SET_NAME,
    name: name
  }
}

export function setMsgTmp (msgText) {
  return {
    type: SET_MSG_TMP,
    msgText: msgText
  }
}

export function setNameTmp (nameTmp) {
  return {
    type: SET_NAME_TMP,
    nameTmp: nameTmp
  }
}
