import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const itemStyle = StyleSheet.create({

  parentContainerStyle: {
    display: "flex"
    //Your code here
  },
  parentContainerStyle2: {
    //Your code here
  },
  imageStyle: {
    width: 120,
    height: 120,
    //Your code here
  },
  titleStyle: {
    color: "#000000",
    //Your code here
  }
});

class FlexComponent extends React.Component {
  render() {
    return (
      <View style={itemStyle.parentContainerStyle}>
        <Image
          style={itemStyle.imageStyle}
          source={require("../img/goku.png")}
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
