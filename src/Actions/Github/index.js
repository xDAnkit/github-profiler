/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

import { FETCH_GITHUB_PROFILES } from "./actionTypes";

export const getGithubProfilesAction = params => {
  return { type: FETCH_GITHUB_PROFILES, params };
};

//Redux saga callbacks
export const getGithubProfilesSuccessAction = retrivedProfiles => {
  return { type: FETCH_GITHUB_PROFILES_SUCCEEDED, retrivedProfiles };
};

//Redux saga callback fallback action
export const getProfileDetailsFailedAction = error => {
  return { type: FETCH_GITHUB_PROFILES_FAILED, error };
};
