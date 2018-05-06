/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

import { combineReducers } from "redux";
import NavigationReducer from "./navigationReducer";
import getProfilesReducer from "./Github/getProfiles";

const AppReducer = combineReducers({
  getProfilesReducer,
  NavigationReducer
});

export default AppReducer;
