
import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { createGlobalStyles } from "../style/globalStyles";
import { theme } from "../style/theme";
import { Feather } from "@expo/vector-icons";

const Input = ({
  type = "primary",
  ref = null,
  label = "",
  value = "",
  placeholder = "",
  onChangeValue = (e) => {},
  secureTextEntry = false,
  autoCapitalize = "sentences",
  keyboardType = "default",
}) => {
  const globalStyles = createGlobalStyles(theme);

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
        {!!value && (
          <Feather
            onPress={() => onChangeValue("")}
            name="x"
            size={20}
            color="black"
          />
        )}
      </View>
    );
  }

  return (
    <View style={styles.fieldContainer}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={ref}
        value={value}
        onChangeText={(text) => onChangeValue(text)}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    //backgroundColor: '#f6f3f6',
    backgroundColor: theme.colors.surface,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: theme.radius.sm,
    alignItems: "center",
    gap: theme.spacing.md,
  },
  fieldContainer: {
    width: "100%",
  },
  label: {
    fontSize: theme.typography.sizes.label,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  input: {
    width: "100%",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.sm,
    paddingVertical: 14,
    paddingHorizontal: theme.spacing.lg,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.body,
    color: theme.colors.textPrimary,
  },
});
