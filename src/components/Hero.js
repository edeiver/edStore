import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../style/theme";

const Hero = () => {
  return (
    <ImageBackground
      style={styles.hero}
      source={require("../assets/img/hero_men.png")}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.edition}>
          ● CURATED EDITION 2026
        </Text>

        <Text style={styles.title}>
          The Autumn Edit
        </Text>

        <Text style={styles.description}>
          An architectural approach to silhouette, tactile woolens, and
          handcrafted details.
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            EXPLORE COLLECTION →
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Hero;

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    aspectRatio: 1.5,
    overflow: "hidden",
    borderRadius: theme.radius.lg,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
  },

  edition: {
    color: theme.colors.white,
    fontSize: theme.typography.label,
    fontWeight: "600",
    letterSpacing: 1.5,
    marginBottom: theme.spacing.sm,
  },

  title: {
    color: theme.colors.white,
    fontSize: theme.typography.h1,
    fontWeight: "400",
    marginBottom: theme.spacing.sm,
  },

  description: {
    color: theme.colors.white,
    fontSize: theme.typography.bodySmall,
    lineHeight: 20,
    maxWidth: "75%",
    marginBottom: theme.spacing.lg,
  },

  button: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.sm,
  },

  buttonText: {
    color: theme.colors.primary,
    fontSize: theme.typography.caption,
    fontWeight: "600",
    letterSpacing: 0.8,
  },
});