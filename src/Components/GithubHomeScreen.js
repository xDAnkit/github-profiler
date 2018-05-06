import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  ImageBackground,
  TextInput,
  ToastAndroid,
  StatusBar,
  TouchableOpacity,
  Platform,
  View
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationActions, withNavigation } from "react-navigation";
import LottieView from "lottie-react-native";

import * as Helper from "../utils/Helper";

import SearchElement from "./Common/SearchElement";
import ProfileElement from "./Common/ProfileElement";

export default class GithubHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      profileCount: 0,
      currentIndex: 0,
      resultPerPage: 10
    };
  }

  static navigationOptions = {
    title: "Github Profiler",
    headerStyle: {
      elevation: 1,
      shadowOpacity: 1
    },
    headerTitleStyle: {
      fontFamily: "quicksand-SemiBold",
      fontWeight: "200",
      fontSize: 16
    }
  };

  _handleSearchParam = params => {
    if (params !== "" && params !== undefined) {
      this.props.onFetchProfile({
        attribute: params
      });
    } else {
      Platform.OS === "android"
        ? ToastAndroid.show("Please type a name to search", ToastAndroid.SHORT)
        : /*Display iOs Message here*/ "";
      return;
    }
  };

  sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  render() {
    const session = this.props;
    let profileCount = "";
    let profiles = "";
    if (!Helper.isEmpty(session["profiles"])) {
      if (
        session["profiles"]["total_count"] > 0 &&
        session["profiles"]["total_count"] !== undefined
      ) {
        profileCount = `${session["profiles"]["total_count"]} profiles found`;
        profiles = session["profiles"]["items"];
      } else {
        profileCount = `No profiles found`;
        profiles = [];
      }
    } else {
      profileCount = `No profiles found`;
      profiles = [];
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.searchSection}>
          <SearchElement
            searchStyle={styles.searchInput}
            placeholder="Search Github profiles here!"
            searchedItem={this._handleSearchParam.bind(this)}
          />
          <View style={styles.containerOptions}>
            <TouchableOpacity
              onPress={() => {
                profiles = this.sortByKey(profiles, "login");
              }}
              style={styles.optionButton}
            >
              <Icon name="filter-list" size={18} color="#00b894" />
              <Text style={styles.optionButtonTitle}>SORT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton}>
              <Icon name="refresh" size={18} color="#00b894" />
              <Text style={styles.optionButtonTitle}>REFRESH</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profilesResultTitle}>
          <Text style={styles.mediumText}>{profileCount}</Text>
          <ActivityIndicator
            animating={this.props.isFetching}
            size="small"
            color="#ffa640"
          />
        </View>
        <ProfileElement profiles={profiles} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    flexDirection: "column"
  },
  containerOptions: {
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  optionButton: {
    flex: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  optionButtonTitle: {
    fontFamily: "quicksand-SemiBold",
    fontSize: 10,
    color: "#282c3f",
    marginTop: 6
  },
  mediumText: {
    flex: 90,
    fontFamily: "quicksand-SemiBold"
  },
  profilesResultTitle: {
    flexDirection: "row",
    backgroundColor: "#eee",
    padding: 12
  },
  searchSection: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FBFBFB",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    shadowColor: "#FBFBFB",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 1.5,
    marginBottom: 4
  },
  searchInput: {
    fontFamily: "quicksand-SemiBold",
    color: "#1a1a1a",
    padding: 12,
    fontSize: 16,
    flex: 70
  }
});
