import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {NavigationActions, withNavigation} from "react-navigation";
import Lottie from 'lottie-react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  //setting nav "Action bar" as null for hiding it on splash screen
  static navigationOptions = {
    title: 'SplashScreen',
    header: null
  };

  componentDidMount() {

    //play lottie animation
    this.initAnimation();
  }

  initAnimation(){
    if (!this.animation){
      setTimeout(() => {
        this.initAnimation();
      }, 100);
    } else {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(30, 120);

        //Splash timer for displying splash screen for 4 second
        this.intervalId = setInterval(this._handleSpashTimer, 4000);
    }
  }

  _handleSpashTimer = () => {
    this
      .props
      .navigation
      .dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [
          {
            type: 'Navigate',
            routeName: 'GithubHome'
          }
        ]
      });

    //clearing interval for time to close session
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Lottie
          style={styles.lottierContainer}
          loop
          source={require('../utils/animation/smoothLoader.json')}
          ref={ref => {
          this.animation = ref
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottierContainer: {
    width: 180,
    height: 180
  }
})