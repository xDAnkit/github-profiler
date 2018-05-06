/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

//Saga effects
import { fork, all } from "redux-saga/effects";
import { watchFetchGithubProfiles } from "./Modules/githubSaga";

export default function* rootSaga() {
  yield all([fork(watchFetchGithubProfiles)]);
}
