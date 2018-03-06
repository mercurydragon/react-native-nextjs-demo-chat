import React from 'react';
import ReactDOM from 'react-dom';

import App, {mapDispatchToProps} from '../app/components/App/App.js';
import Head from 'next/head'
import configureStore from '../app/store/configureStore.js'
import withRedux from 'next-redux-wrapper'

export default withRedux(configureStore, (state) => ({...state.chat}), mapDispatchToProps)(App)
