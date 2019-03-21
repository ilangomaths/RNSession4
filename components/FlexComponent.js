import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../resources/Colors";
import Images from "../resources/Images";

const itemStyle = StyleSheet.create({
  parentContainerStyle: {
    display: "flex",
    backgroundColor: Colors.bgColors.itemBgColor,
    margin: "1%",
    flexDirection: "row"
  },
  parentContainerStyle2: {
    //your code here
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex:1
  },
  imageStyle: {
    width: 120,
    height: 120,
    //your code here
  },
  titleStyle: {
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
            "I could go one step farther if I wanted to do something"
          </Text>
          <Text style={itemStyle.titleStyle}>Goku</Text>
        </View>
      </View>
    );
  }
}
export default FlexComponent;
