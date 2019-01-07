import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const itemStyle = StyleSheet.create({
  parentContainerStyle: {
    display: "flex"
    /*
    Your code here
    */
  },
  parentContainerStyle2: {
    display: "flex"
    /*
    Your code here
    */
  },
  imageStyle: {
    /*
    Your code here
    */
    width: 120,
    height: 120
  },
  titleStyle: {
    /*
    Your code here
    */
    color: "#000000"
  }
});

class FlexComponent extends React.Component {
  render() {
    return (
      <View style={itemStyle.parentContainerStyle}>
        <Image
          style={itemStyle.imageStyle}
          source={require("../img/v1.png")}
          resizeMode="contain"
        />
        <View style={itemStyle.parentContainerStyle2}>
          <Text style={itemStyle.titleStyle} numberOfLines={1}>
            Hello Kitty cat kitty cat
          </Text>
          <Text style={itemStyle.titleStyle}>Meow</Text>
        </View>
      </View>
    );
  }
}
export default FlexComponent;
