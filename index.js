import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigation from './src/Navigation'

import { createStore, applyMiddleware } from 'redux';
import {
    Provider,
    connect,
} from 'react-redux';

import AppReducer from './src/Reducers'

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
console.disableYellowBox = true;

let store = createStore(AppReducer, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('githubprofiler', () => App);