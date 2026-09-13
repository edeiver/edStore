import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { theme } from "../style/theme";

const Departments = ({ items = [], onSelect = () => {}, selectedCategory = "all" }) => {
  const categories = ["all", ...items];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.item, item === selectedCategory && { backgroundColor: theme.colors.primary}]}
          onPress={() => onSelect(item)}
        >
          <Text
          style={[
      styles.text,
      item === selectedCategory && {
        color: theme.colors.white,
      },
    ]}
          >{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Departments;

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
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
  },

  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.bodySmall,
    fontFamily: theme.typography.fonts.regular,
    textTransform: "uppercase",
  },
});