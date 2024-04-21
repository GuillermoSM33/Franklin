import React from "react";
import Navigation from "./Navigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    // Envuelve tu aplicación en el NativeBaseProvider
    <NativeBaseProvider>
        <Navigation />
    </NativeBaseProvider>
  );
}
