import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createGlobalStyles } from "../style/globalStyles";
import { theme } from "../style/theme";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileItem = ({ item }) => {
  const globalStyles = createGlobalStyles(theme);
  return (
    <View style={[globalStyles.row, globalStyles.spaceBetween, styles.item]}>
      <View style={[globalStyles.row, styles.itemDetail]}>
        {item.icon}
        <View>
          <Text style={[styles.label]}>{item.title}</Text>
          <Text style={[ styles.labelSub]}>{item.sub}</Text>
        </View>
      </View>
      <MaterialIcons name="navigate-next" size={24} color="black" />
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    //backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 0.6,
  },
  itemDetail: {
    gap: theme.spacing.lg,
    alignItems: "center",
  },
   label: {
    color: theme.colors.black,
    fontFamily: theme.typography.fonts.medium,
    fontSize: theme.typography.sizes.body,
    lineHeight: 20,
  },
   labelSub: {
    color: theme.colors.black,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.bodySmall,
    lineHeight: 20,
  },
});
