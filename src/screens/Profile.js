import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createGlobalStyles } from "../style/globalStyles";
import { theme } from "../style/theme";
import Header from "../components/Header";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import ProfileItem from "../components/ProfileItem";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

const Profile = ({ navigation }) => {
    const {logout } = useAuth()
  const globalStyles = createGlobalStyles(theme);
  const accountItems = [
    {
      id: 1,
      title: "Personal Info",
      sub: "name, phone, email",
      icon: <Ionicons name="person-outline" size={24} color="black" />,
    },
    {
      id: 2,
      title: "Address",
      sub: "manage your delivey address",
      icon: <Feather name="map-pin" size={24} color="black" />,
    },
    {
      id: 3,
      title: "Order History",
      sub: "view and track your orders",
      icon: (
        <MaterialCommunityIcons name="cube-outline" size={24} color="black" />
      ),
    },
    {
      id: 4,
      title: "Wishlist",
      sub: "your saved items",
      icon: <FontAwesome6 name="heart" size={24} color="black" />,
    },
  ];
  return (
    <SafeAreaView style={[globalStyles.mainView, globalStyles.safePadding]}>
      <Header
        navigation={navigation}
        title="Profile"
        subTitle="Your account, preferences and orders"
      />
      <View style={[styles.editCard]}>
        <View style={[globalStyles.row, styles.info]}>
          <Ionicons
            name="person-circle-outline"
            size={90}
            style={{ marginLeft: -13}}
            color={theme.colors.primary}
          />
          <View>
            <Text style={[styles.headerTitle]}>Edeiver</Text>
            <Text style={[styles.headerSub]}>edeiver@example.com</Text>
            <Text style={[styles.headerSub]}>Member since 2026</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.editBtn]}>
          <Text style={[styles.headerSub, { color: theme.colors.primary}]}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.label]}>Account</Text>
        <View style={[styles.flatView]}>
          <FlatList
            data={accountItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProfileItem item={item} />}
          />
        </View>
      </View>
      <Button
        onPress={()=>logout()}
        type="secondary"
        style={{ marginVertical: 20}}
        title={'Sign out'}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  editCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.sm,
   // flex:1,
    //gap: theme.spacing.md
  },
  info: {
    alignItems: "center",
    padding: 10,
    flex:1,

  },
  editBtn:{
  alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    //backgroundColor: theme.colors.white,
    borderRadius: theme.radius.sm,
    borderWidth:1.2,
    borderColor: theme.colors.primary,
    marginRight: 4
  },
  label: {
    fontSize: theme.typography.sizes.bodySmall,
    fontFamily: theme.typography.fonts.regular,
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  flatView: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.sm,
  },
    headerTitle: {
    color: theme.colors.black,
    fontFamily: theme.typography.fonts.displayMedium,
    fontSize: theme.typography.sizes.bodyLarge,
    lineHeight: 24,
  },
  headerSub: {
    color: theme.colors.neutral,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.bodySmall,
    lineHeight: 20,
  },
});
