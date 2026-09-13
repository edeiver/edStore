
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

export default function AppNavigator() {
  // Por ahora simulamos que NO está autenticado.
  // Más adelante esto vendrá de un contexto de autenticación.

  const isAuthenticated = !false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}