/* @flow */

import React, { PureComponent } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

const LOLLIPOP = 21;

type Props = {
  placeholder: string,
  style?: any,
  searchedItem: func
};

export default class SearchElement extends PureComponent<Props, void> {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TextInput
          underlineColorAndroid="transparent"
          keyboardType="default"
          style={this.props.searchStyle}
          placeholder={this.props.placeholder}
          onChangeText={data => {
            this.props.searchedItem(data);
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 16
            }}
            name="search"
            size={18}
            color="#00b894"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
