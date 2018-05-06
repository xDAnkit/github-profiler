/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import { StackNavigator } from "react-navigation";
import { Animated, BackHandler, Easing, Platform } from "react-native";

import SplashScreen from "../Components/SplashScreen";

//Container elements
import GithubHomeContainer from "../Containers/GithubHomeContainer";

const navigator = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    GithubHome: {
      screen: GithubHomeContainer
    }
  },
  {
    headerMode: "screen"
  }
);

export default navigator;
