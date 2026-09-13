import { StyleSheet } from "react-native";

export const createGlobalStyles = (theme) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    safePadding: {
      paddingHorizontal: theme.spacing.xl,
    },

    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    flex: {
      flex: 1,
    },

    column: {
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing.sm,
    },
  });