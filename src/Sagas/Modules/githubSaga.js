/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

import { NavigationActions } from "react-navigation";

import {
  FETCH_GITHUB_PROFILES,
  FETCH_GITHUB_PROFILES_SUCCEEDED,
  FETCH_GITHUB_PROFILES_FAILED
} from "../../Actions/Github/actionTypes";

import { GithubServices } from "../Services/github.service";

import * as Helper from "../../utils/Helper";

//Saga effects
import { put, takeLatest } from "redux-saga/effects";
import { SAGA_ACTION } from "redux-saga/utils";

/*Fetch associated profile magic function */
function* fetchProfiles(action) {
  try {
    const result = yield GithubServices.fetchGithubProfilesApi(action.params);
    if (!Helper.isEmpty(result)) {
      yield put({
        type: FETCH_GITHUB_PROFILES_SUCCEEDED,
        retrivedProfiles: result
      });
    } else {
      yield put({ type: FETCH_GITHUB_PROFILES_FAILED });
    }
  } catch (error) {
    yield put({ type: FETCH_GITHUB_PROFILES_FAILED, error });
  }
}

export function* watchFetchGithubProfiles() {
  yield takeLatest(FETCH_GITHUB_PROFILES, fetchProfiles);
}
