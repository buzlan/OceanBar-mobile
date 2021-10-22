import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

export const UploadProgress = ({ process }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Progress.Circle progress={process} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
});
