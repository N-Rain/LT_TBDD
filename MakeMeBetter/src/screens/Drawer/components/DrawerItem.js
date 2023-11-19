import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function DrawerItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconRow}>
          <Icon name={props.icon || "500px"} style={styles.icon}></Icon>
          <Text style={styles.label}>{props.label || "label"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 260,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(176,176,176,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  label: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 27,
    marginTop: 16
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 143,
    marginLeft: 20,
    marginTop: 8
  }
});

export default DrawerItem;
