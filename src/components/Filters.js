import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../style/theme";
import { createGlobalStyles } from "../style/globalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";

const Filters = ({
  items = [],
  onSelect = () => {},
  selectedFilter = "all",
  style = {},
}) => {
  const filters = ["all", ...items];
  const globalStyles = createGlobalStyles(theme);
  const getIcon = (item) => {
    let icon = "";
    switch (item) {
      case "price":
        return "tag";
        break;
      case "rating":
        return "star";
        break;
      case "brand":
        return "appstore";
        break;
      case "recomended":
        return "like";
        break;
      default:
        return "align-left";
        break;
    }
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.container, style]}
      contentContainerStyle={styles.content}
    >
      {filters.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.item,
            globalStyles.row,
            globalStyles.spaceBetween,
            item === selectedFilter && {
              backgroundColor: theme.colors.primary,
            },
          ]}
          onPress={() => onSelect(item)}
        >
          <AntDesign
            name={getIcon(item)}
            size={15}
            color={
              item === selectedFilter
                ? theme.colors.white
                : theme.colors.textPrimary
            }
          />
          <Text
            style={[
              styles.text,
              item === selectedFilter && {
                color: theme.colors.white,
              },
            ]}
          >
            {item}
          </Text>

          <AntDesign
            name="down"
            size={12}
            color={
              item === selectedFilter
                ? theme.colors.white
                : theme.colors.textPrimary
            }
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.md,
    flexGrow: 0,
    flexShrink: 0,
  },

  content: {
    alignItems: "center",
    paddingVertical: theme.spacing.xs,
  },

  item: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    marginRight: theme.spacing.sm,
    backgroundColor: "transparent",
    borderRadius: theme.radius.sm,
    borderWidth: 0.5,
    borderColor: theme.colors.border,
    alignItems: "center",
    gap: theme.spacing.md,
  },

  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.bodySmall,
    fontFamily: theme.typography.fonts.regular,
    textTransform: "uppercase",
  },
});
