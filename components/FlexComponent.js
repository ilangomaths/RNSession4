import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../resources/Colors";
import Images from "../resources/Images";

const itemStyle = StyleSheet.create({
  parentContainerStyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.bgColors.itemBgColor,
    margin: "1%"
  },
  parentContainerStyle2: {
    flexGrow: 1,
    width: 0,
    flexDirection: "column",
    justifyContent: "center"
  },
  imageStyle: {
    alignSelf: "center",
    width: 120,
    height: 120
  },
  titleStyle: {
    alignSelf: "flex-start",
    color: Colors.textColors.black
  }
});

class FlexComponent extends React.Component {
  render() {
    return (
      <View style={itemStyle.parentContainerStyle}>
        <Image
          style={itemStyle.imageStyle}
          source={Images.characters.goku}
          resizeMode="contain"
        />
        <View style={itemStyle.parentContainerStyle2}>
          <Text style={itemStyle.titleStyle}>
            "I could go one step farther if I wanted to"
          </Text>
          <Text style={itemStyle.titleStyle}>Goku</Text>
        </View>
      </View>
    );
  }
}
export default FlexComponent;
