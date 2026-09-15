import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createGlobalStyles } from "../style/globalStyles";
import { theme } from "../style/theme";
import { useNavigation } from "@react-navigation/native";
const Header = ({ title = "", subTitle = "", isRow=false }) => {
    const globalStyles = createGlobalStyles(theme)
    const navigation = useNavigation()
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <Text style={[styles.headerTitle]}>...EdStore</Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="search" size={24}  onPress={()=> navigation.navigate('Explore')}/>
          <MaterialIcons name="favorite-border" size={24} onPress={()=> navigation.navigate('Bag')} />
          <MaterialIcons name="person" size={24}  onPress={()=> navigation.navigate('Profile')} />
        </View>
      </View>
      {(!!title || !!subTitle) && (
        <View style={[isRow && globalStyles.row, { marginVertical: 20 }]}>
          <Text style={[styles.headerTitle]}>{title}</Text>
          <Text style={[styles.headerSub]}>{subTitle}</Text>
        </View>
      )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  headerTitle: {
    color: theme.colors.black,
    fontFamily: theme.typography.fonts.displayMedium,
    fontSize: theme.typography.sizes.bodyLarge,
    lineHeight: 24,
  },
  headerSub: {
    color: theme.colors.black,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.bodySmall,
    lineHeight: 24,
  },
});
