/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

import {
  FETCH_GITHUB_PROFILES,
  FETCH_GITHUB_PROFILES_SUCCEEDED,
  FETCH_GITHUB_PROFILES_FAILED
} from "../../Actions/Github/actionTypes";

const getProfilesReducer = (
  profile = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case FETCH_GITHUB_PROFILES:
      return Object.assign({}, profile, { isFetching: true });
    case FETCH_GITHUB_PROFILES_SUCCEEDED:
      return Object.assign({}, profile, {
        isFetching: false,
        items: action.retrivedProfiles
      });
    case FETCH_GITHUB_PROFILES_FAILED:
      return Object.assign({}, profile, {
        isFetching: false,
        items: profile
      });
    default:
      return profile; //No state changes ie no profile found
  }
};

export default getProfilesReducer;
