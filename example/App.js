/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { CircularProgress } from "react-native-svg-circular-progress";

export default class App extends Component {
  render() {
    const percentage = 40;
    return (
      <View style={styles.base}>
        <Text style={styles.text}>Curcular Progress</Text>
        <CircularProgress size={110} percentage={percentage}>
          <View>
            <Text>{percentage}%</Text>
          </View>
        </CircularProgress>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { marginBottom: 10 }
});
