/**
 * Author: Ankit Jain
 * Project Name: Github Profiler
 * Date: 05-May-2018
 */

import axios from "axios";

/*BASE Github domain API */
const BASE_URL = "https://api.github.com/";

/*Get users list URL*/
const getProfiles = "search/users";

/*Fetch queried profiles */
function* fetchGithubProfilesApi(params) {
  const response = yield axios.get(
    `${BASE_URL}${getProfiles}?q=${params["attribute"]}`
  );
  const retrivedProfiles = response.status === 200 ? response.data : {};
  return retrivedProfiles;
}

export const GithubServices = {
  fetchGithubProfilesApi
};
