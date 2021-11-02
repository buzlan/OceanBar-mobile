import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

export const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <View style={{ width: 100, height: 100 }}>
        <LottieView
          source={require("../assets/circleLoader.json")}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 1,
  },
});
