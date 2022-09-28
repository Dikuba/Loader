import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Lottie from "lottie-react-native";
import { useState } from "react";
export default function Finished() {
  return (
    <Lottie source={require('./assets/finshed.json')} autoPlay  />
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 250,
    height: 250,
  },
});