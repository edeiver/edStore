import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../style/theme";
import { useCart } from "../contexts/CartContext";


const icons = {
  Atelier: "home",
  Explore: "explore",
  Bag: "shopping-bag",
  Profile: "person",
};

const labels = {
  Atelier: "Atelier",
  Explore: "Explore",
  Bag: "Bag",
  Profile: "Profile",
};
const CustomBottomBar = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();
const { totalItems } = useCart()
  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const label = labels[route.name] ?? route.name;
          const icon = icons[route.name] ?? "circle";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={
                descriptors[route.key]?.options?.tabBarAccessibilityLabel
              }
              testID={descriptors[route.key]?.options?.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={0.7}
              style={styles.tab}
            >
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name={icon}
                  size={22}
                  color={
                    isFocused
                      ? theme.colors.primary
                      : theme.colors.textSecondary
                  }
                />

                {route.name === "Bag" && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{totalItems}</Text>
                  </View>
                )}
              </View>

              <Text
                style={[
                  styles.label,
                  {
                    color: isFocused
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                  },
                ]}
              >
                {label.toUpperCase()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
export default CustomBottomBar; 

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.surface,

    borderTopWidth: 1,
    borderTopColor: theme.colors.border + "55",

    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,

    elevation: 8,
  },

  container: {
    height: 64,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    paddingHorizontal: theme.spacing.lg,
  },

  tab: {
    minWidth: 56,
    minHeight: 44,

    alignItems: "center",
    justifyContent: "center",

    gap: 2,
  },

  iconContainer: {
    width: 24,
    height: 24,

    alignItems: "center",
    justifyContent: "center",

    position: "relative",
  },

  label: {
    fontSize: 10,
    lineHeight: 12,

    fontFamily: "Manrope",
    fontWeight: "600",

    letterSpacing: 1,
  },

  badge: {
    position: "absolute",

    top: -5,
    right: -9,

    width: 16,
    height: 16,

    borderRadius: theme.radius.pill,

    backgroundColor: theme.colors.primary,

    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: theme.colors.white,

    fontSize: 9,
    lineHeight: 10,

    fontFamily: "Manrope",
    fontWeight: "600",
  },
});