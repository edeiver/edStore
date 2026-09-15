import {
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { theme } from "../style/theme";

const Button = ({
  title = "",
  onPress = () => {},
  style = {},
  disabled = false,
  isLoading = false,
  type = "primary",
}) => {
  if (type === "secondary") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.containerSec, style]}
        disabled={disabled}
      >
        {isLoading ? (
          <ActivityIndicator color={theme.colors.primary} size={"small"} />
        ) : (
          <View>
            <Text style={[styles.labelSec]}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} size={"small"} />
      ) : (
        <View>
          <Text style={[styles.label]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    marginVertical: 15,
  },
  label: {
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.body,
    color: theme.colors.white,
  },
   containerSec: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.surface,
    alignItems: "center",
    marginVertical: 15,
  },
  labelSec: {
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.body,
    color: theme.colors.primary,
  },
});
