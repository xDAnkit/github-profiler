/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

import { connect } from "react-redux";
import GithubHomeScreen from "../Components/GithubHomeScreen";

import { getGithubProfilesAction } from "../Actions/Github";

const mapStateToProps = state => {
  return {
    profiles: state.getProfilesReducer.items,
    isFetching: state.getProfilesReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: params => {
      dispatch(getGithubProfilesAction(params));
    }
  };
};
const GithubHomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  GithubHomeScreen
);
export default GithubHomeContainer;
