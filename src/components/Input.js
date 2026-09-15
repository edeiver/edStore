import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { createGlobalStyles } from "../style/globalStyles";
import { theme } from "../style/theme";
import {Feather} from '@expo/vector-icons';

const Input = ({
  type = "primary",
  ref = null,
  value = "",
  placeholder='',
  onChangeValue = (e) => {},
}) => {
    const globalStyles = createGlobalStyles(theme)
  if (type === "search") {
    return (
      <View style={[styles.searchContainer]}>
        <Feather name="search" size={19} color={theme.colors.black} />
        <TextInput
          ref={ref}
          value={value}
          onChangeText={(text) => onChangeValue(text)}
          placeholder={placeholder}
          style={[globalStyles.flex]}
        />
        {
        !!value &&
            <Feather onPress={() => onChangeValue('')} name="x" size={20} color="black" />
        }
      </View>
    );
  }
  return (
    <View>
      <TextInput
        ref={ref}
        value={value}
        onChangeText={(text) => onChangeValue(text)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    searchContainer:{
        //width: '100%',
        flex: 1,
        //backgroundColor: '#f6f3f6',
        backgroundColor: theme.colors.surface,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        paddingVertical: 15, 
        paddingHorizontal: 20,
        borderRadius: theme.radius.sm,
        alignItems: 'center',
        gap: theme.spacing.md

    }
});
