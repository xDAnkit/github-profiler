import React, { Component } from "react";
import {
    StyleSheet,
    StatusBar,
    Platform,
    View,
    BackHandler
} from 'react-native';
import { connect } from "react-redux";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import NavigationStack from "./navigationStack";

import { addListener } from '../utils/redux';


class AppNavigation extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { navigationState, dispatch } = this.props;
    if (navigationState.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#f5f5f5" }}>
      <StatusBar
      backgroundColor="white"
      barStyle="dark-content"
    />
        <NavigationStack
          navigation={addNavigationHelpers({ 
            dispatch, state: 
            navigationState,
            addListener
           })}
        />
      </View>

    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.NavigationReducer
  };
};

export default connect(mapStateToProps)(AppNavigation);
