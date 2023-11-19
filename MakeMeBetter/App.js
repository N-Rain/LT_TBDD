import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import AppContainer from "./src";

export default function Loader() {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }

  return (
    // <GestureHandlerRootView>
      <AppContainer />
    // </GestureHandlerRootView>
  );
}

async function loadResourcesAsync() {
  // await Promise.all([
  //   Font.loadAsync({
  //     "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
  //   })
  // ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}