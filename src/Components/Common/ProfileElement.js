/* @flow */

import React, { PureComponent } from "react";

import {
  TextInput,
  FlatList,
  Linking,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Avatar, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  placeholder: string,
  style?: any,
  searchedItem: func
};

export default class ProfileElement extends PureComponent<Props, void> {
  render() {
    return (
      <FlatList
        keyboardShouldPersistTaps="always"
        data={this.props.profiles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Avatar
                  medium
                  rounded
                  source={{
                    uri: item.avatar_url
                  }}
                  activeOpacity={0.7}
                />
                <View style={styles.cardContainerDetails}>
                  <Text style={styles.memberName}>{item.login}</Text>
                  <Text style={styles.memberScore}>
                    Github Score: {item.score}
                  </Text>
                  <Text style={styles.memberScore}>
                    Profile URL: {item.html_url}
                  </Text>
                  <View style={styles.cardInnerContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        onPress={() => {
                          Linking.openURL(item.html_url);
                        }}
                        activeOpacity={0.3}
                        style={styles.borderedButton}
                      >
                        <Icon name="link" size={16} color="#00b894" />
                        <Text style={styles.borderedButtonText}>
                          Open Github
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 2,
    flex: 1,
    flexDirection: "column"
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FBFBFB",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    shadowColor: "#FBFBFB",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 1.5
  },
  cardContainerDetails: {
    flex: 80,
    flexDirection: "column",
    marginLeft: 8
  },
  memberName: {
    fontFamily: "quicksand-SemiBold",
    color: "#282c3f",
    fontSize: 15
  },
  memberScore: {
    marginBottom: 4,
    fontSize: 12,
    fontFamily: "quicksand-SemiBold"
  },
  cardInnerContainer: {
    marginTop: 4
  },
  borderedButton: {
    flexDirection:'row',
    borderWidth: 1,
    borderColor: "#00b894",
    marginRight: 8,
    paddingLeft: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 3
  },
  borderedButtonText: {
    fontFamily: "quicksand-Bold",
    marginLeft: 4,
    fontSize: 12,
    color: "#00b894"
  }
});
