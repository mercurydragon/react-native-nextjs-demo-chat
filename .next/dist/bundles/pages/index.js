module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/App/App.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.mapDispatchToProps=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _link=__webpack_require__("next/link");var _link2=_interopRequireDefault(_link);var _react=__webpack_require__("react");var _react2=_interopRequireDefault(_react);var _configureStore=__webpack_require__("./app/store/configureStore.js");var _configureStore2=_interopRequireDefault(_configureStore);var _head=__webpack_require__("next/head");var _head2=_interopRequireDefault(_head);var _Header=__webpack_require__("./app/components/Header/index.js");var _Header2=_interopRequireDefault(_Header);var _Messages=__webpack_require__("./app/components/Messages/index.js");var _Messages2=_interopRequireDefault(_Messages);var _Footer=__webpack_require__("./app/components/Footer/index.js");var _Footer2=_interopRequireDefault(_Footer);var _ActionReducers=__webpack_require__("./app/reducers/ActionReducers.js");var _socket=__webpack_require__("socket.io-client");var _socket2=_interopRequireDefault(_socket);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Page=function(_Component){_inherits(Page,_Component);_createClass(Page,[{key:'sendMessage',value:function sendMessage(ev,socket,author){socket.emit('SEND_MESSAGE',{id:Date.now()+author.id,author:author,text:ev});}}]);function Page(props){_classCallCheck(this,Page);var _this=_possibleConstructorReturn(this,(Page.__proto__||Object.getPrototypeOf(Page)).call(this,props));var socket=(0,_socket2.default)('localhost:8080');socket.on('RECEIVE_MESSAGE',function(data){props.addMessage(data);});_this.props.createSocket(socket);return _this;}_createClass(Page,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:'app'},_react2.default.createElement(_head2.default,null,_react2.default.createElement('title',null,'Chat'),_react2.default.createElement('meta',{name:'viewport',content:'initial-scale=1.0, width=device-width'}),_react2.default.createElement('link',{rel:'stylesheet',href:'/static/styles.css'})),_react2.default.createElement(_Header2.default,null),_react2.default.createElement(_Messages2.default,null),_react2.default.createElement(_Footer2.default,{sendMessage:this.sendMessage,socket:this.props.socket,setName:this.props.setName}));}}],[{key:'getInitialProps',value:function getInitialProps(_ref){var store=_ref.store,isServer=_ref.isServer,pathname=_ref.pathname,query=_ref.query;}}]);return Page;}(_react.Component);var mapDispatchToProps=exports.mapDispatchToProps={addMessage:_ActionReducers.addMessage,createSocket:_ActionReducers.createSocket,setName:_ActionReducers.setName};exports.default=Page;

/***/ }),

/***/ "./app/components/Footer/Footer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__("react");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var NameForm=function NameForm(_ref){var clients=_ref.clients,setName=_ref.setName;return _react2.default.createElement('form',{className:'name-form',action:'javascript:',onSubmit:function onSubmit(_ref2){var name=_ref2.target.name;return setName(name.value);}},_react2.default.createElement('input',{type:'text',autoComplete:'off',name:'name',placeholder:'Enter your name',autoFocus:true,required:true}),_react2.default.createElement('button',{type:'submit'},'Start'));};var MessageForm=function MessageForm(_ref3){var sendMessage=_ref3.sendMessage,socket=_ref3.socket,author=_ref3.author;return _react2.default.createElement('form',{className:'message-form',action:'javascript:',onSubmit:function onSubmit(_ref4){var text=_ref4.target.text;if(text.value){sendMessage(text.value,socket,author);text.value='';}}},_react2.default.createElement('input',{autoComplete:'off',name:'text',placeholder:'Enter message ...',autoFocus:true,required:true}),_react2.default.createElement('button',{type:'submit'},'Send'));};var Footer=function Footer(_ref5){var sendMessage=_ref5.sendMessage,socket=_ref5.socket,setName=_ref5.setName,name=_ref5.name,me=_ref5.me;return _react2.default.createElement('footer',null,!me.name?_react2.default.createElement(NameForm,{setName:setName}):null,_react2.default.createElement(MessageForm,{sendMessage:sendMessage,socket:socket,author:me}));};exports.default=Footer;

/***/ }),

/***/ "./app/components/Footer/FooterContainer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__("react-redux");var _Footer=__webpack_require__("./app/components/Footer/Footer.js");var _Footer2=_interopRequireDefault(_Footer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var mapStateToProps=function mapStateToProps(state){return{me:state.chat.me,name:state.chat.me&&state.chat.me.name,msgText:state.chat.msgText,nameTmp:state.chat.nameTmp};};var mapDispatchToProps={};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_Footer2.default);

/***/ }),

/***/ "./app/components/Footer/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _FooterContainer=__webpack_require__("./app/components/Footer/FooterContainer.js");var _FooterContainer2=_interopRequireDefault(_FooterContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_FooterContainer2.default;

/***/ }),

/***/ "./app/components/Header/Header.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__("react");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Header=function Header(_ref){var name=_ref.name;return _react2.default.createElement('header',null,_react2.default.createElement('span',null,name?'Hi '+name+'!':''));};exports.default=Header;

/***/ }),

/***/ "./app/components/Header/HeaderContainer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__("react-redux");var _Header=__webpack_require__("./app/components/Header/Header.js");var _Header2=_interopRequireDefault(_Header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var mapStateToProps=function mapStateToProps(state){return{name:state.chat.me?state.chat.me.name:''};};exports.default=(0,_reactRedux.connect)(mapStateToProps)(_Header2.default);

/***/ }),

/***/ "./app/components/Header/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _HeaderContainer=__webpack_require__("./app/components/Header/HeaderContainer.js");var _HeaderContainer2=_interopRequireDefault(_HeaderContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_HeaderContainer2.default;

/***/ }),

/***/ "./app/components/Messages/Messages.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__("react");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Messages=function(_React$Component){_inherits(Messages,_React$Component);function Messages(){_classCallCheck(this,Messages);return _possibleConstructorReturn(this,(Messages.__proto__||Object.getPrototypeOf(Messages)).apply(this,arguments));}_createClass(Messages,[{key:'componentDidUpdate',value:function componentDidUpdate(){window.scrollTo(0,document.body.scrollHeight);}},{key:'render',value:function render(){var messages=this.props.messages||[];return _react2.default.createElement('ul',null,messages.map(function(message){return _react2.default.createElement('li',{key:message.id,className:message.isMine?'is-mine':''},_react2.default.createElement('div',{className:'author'},message.author.name),_react2.default.createElement('div',{className:'text'},message.text));}));}}]);return Messages;}(_react2.default.Component);exports.default=Messages;

/***/ }),

/***/ "./app/components/Messages/MessagesContainer.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactRedux=__webpack_require__("react-redux");var _Messages=__webpack_require__("./app/components/Messages/Messages.js");var _Messages2=_interopRequireDefault(_Messages);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var mapStateToProps=function mapStateToProps(state){return{messages:state.chat.messages.map(function(message){return _extends({},message,{isMine:message.author.id===state.chat.me.id});}).reverse()};};exports.default=(0,_reactRedux.connect)(mapStateToProps)(_Messages2.default);

/***/ }),

/***/ "./app/components/Messages/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _MessagesContainer=__webpack_require__("./app/components/Messages/MessagesContainer.js");var _MessagesContainer2=_interopRequireDefault(_MessagesContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_MessagesContainer2.default;

/***/ }),

/***/ "./app/reducers/ActionReducers.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.chatReducer=chatReducer;exports.addMessage=addMessage;exports.createSocket=createSocket;exports.setName=setName;exports.setMsgTmp=setMsgTmp;exports.setNameTmp=setNameTmp;function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var ADD_MESSAGE=exports.ADD_MESSAGE='chat/ADD_MESSAGE';var CREATE_SOCKET=exports.CREATE_SOCKET='chat/CREATE_SOCKET';var SET_NAME=exports.SET_NAME='chat/SET_NAME';var SET_MSG_TMP=exports.SET_MSG_TMP='chat/SET_MSG_TMP';var SET_NAME_TMP=exports.SET_NAME_TMP='chat/SET_NAME_TMP';var chatInitialState=exports.chatInitialState={socket:{},clients:[],messages:[],me:{},msgText:'',nameTmp:''};function chatReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:chatInitialState;var action=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};switch(action.type){case ADD_MESSAGE:return _extends({},state,{messages:[].concat(_toConsumableArray(state.messages),[action.newMsg])});case CREATE_SOCKET:return _extends({},state,{socket:action.socket});case SET_NAME:return _extends({},state,{me:{id:Date.now()+action.name,name:action.name}});case SET_MSG_TMP:return _extends({},state,{msgText:action.msgText});case SET_NAME_TMP:return _extends({},state,{nameTmp:action.nameTmp});default:return state;}}function addMessage(newMsg){return{type:ADD_MESSAGE,newMsg:newMsg};}function createSocket(socket){return{type:CREATE_SOCKET,socket:socket};}function setName(name){return{type:SET_NAME,name:name};}function setMsgTmp(msgText){return{type:SET_MSG_TMP,msgText:msgText};}function setNameTmp(nameTmp){return{type:SET_NAME_TMP,nameTmp:nameTmp};}

/***/ }),

/***/ "./app/store/configureStore.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=configureStore;var _redux=__webpack_require__("redux");var _reactRouterRedux=__webpack_require__("react-router-redux");var _ActionReducers=__webpack_require__("./app/reducers/ActionReducers.js");var _reduxForm=__webpack_require__("redux-form");var _reduxThunk=__webpack_require__("redux-thunk");var _reduxThunk2=_interopRequireDefault(_reduxThunk);var _reduxMulti=__webpack_require__("redux-multi");var _reduxMulti2=_interopRequireDefault(_reduxMulti);var _reduxLogger=__webpack_require__("redux-logger");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function configureStore(preloadedState,historyType){var rootReducer=(0,_redux.combineReducers)({chat:_ActionReducers.chatReducer,form:_reduxForm.reducer});var store=(0,_redux.createStore)(rootReducer,preloadedState||{},(0,_redux.compose)((0,_redux.applyMiddleware)((0,_reactRouterRedux.routerMiddleware)(historyType),_reduxMulti2.default,_reduxThunk2.default,(0,_reduxLogger.createLogger)())));return store;}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__("react");var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__("react-dom");var _reactDom2=_interopRequireDefault(_reactDom);var _App=__webpack_require__("./app/components/App/App.js");var _App2=_interopRequireDefault(_App);var _head=__webpack_require__("next/head");var _head2=_interopRequireDefault(_head);var _configureStore=__webpack_require__("./app/store/configureStore.js");var _configureStore2=_interopRequireDefault(_configureStore);var _nextReduxWrapper=__webpack_require__("next-redux-wrapper");var _nextReduxWrapper2=_interopRequireDefault(_nextReduxWrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=(0,_nextReduxWrapper2.default)(_configureStore2.default,function(state){return _extends({},state.chat);},_App.mapDispatchToProps)(_App2.default);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-redux":
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-multi":
/***/ (function(module, exports) {

module.exports = require("redux-multi");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "socket.io-client":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map