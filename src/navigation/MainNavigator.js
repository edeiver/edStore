import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomBottomBar from "../components/CustomBottomBar";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Bag from "../screens/Bag";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Atelier"
        component={Home}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
      />

      <Tab.Screen
        name="Bag"
        component={Bag}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
export default MainNavigator