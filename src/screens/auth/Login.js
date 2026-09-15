import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../style/theme";
import { createGlobalStyles } from "../../style/globalStyles";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = ({ navigation }) => {
  const globalStyles = createGlobalStyles(theme);
  const { login, isSubmitting, error } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) return;
    await login(username, password);
  };

  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.safePadding]}>
      <KeyboardAvoidingView
        style={globalStyles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.wordmark}>edStore</Text>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>
              Sign in to continue browsing your collection.
            </Text>
          </View>

          <View style={styles.form}>
            <Input
              label="Username"
              value={username}
              onChangeValue={setUsername}
              placeholder="e.g. mor_2314"
              autoCapitalize="none"
            />
            <Input
              label="Password"
              value={password}
              onChangeValue={setPassword}
              placeholder="Your password"
              secureTextEntry
            />

            {!!error && <Text style={styles.error}>{error}</Text>}

            <Button
              title="Sign in"
              onPress={handleLogin}
              isLoading={isSubmitting}
              disabled={isSubmitting || !username || !password}
              style={styles.submitButton}
            />
          </View>

          <TouchableOpacity
            style={styles.footer}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.footerText}>
              New to edStore? <Text style={styles.footerLink}>Create an account</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.hint}>
            <Text style={styles.hintTitle}>Demo credentials</Text>
            <Text style={styles.hintText}>
              This app authenticates against the public Fake Store API. Try
              username "mor_2314" with password "83r5^_" — check
              fakestoreapi.com/docs in case the test users changed.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: theme.spacing.xxl,
  },
  header: {
    marginBottom: theme.spacing.xxl,
  },
  wordmark: {
    fontFamily: theme.typography.fonts.displayMedium,
    fontSize: theme.typography.sizes.label,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: theme.colors.secondary,
    marginBottom: theme.spacing.md,
  },
  title: {
    fontFamily: theme.typography.fonts.display,
    fontSize: theme.typography.sizes.h1,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  form: {
    gap: theme.spacing.lg,
  },
  error: {
    fontFamily: theme.typography.fonts.medium,
    fontSize: theme.typography.sizes.bodySmall,
    color: theme.colors.danger,
  },
  submitButton: {
    marginTop: theme.spacing.sm,
  },
  footer: {
    marginTop: theme.spacing.xl,
    alignItems: "center",
  },
  footerText: {
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.bodySmall,
    color: theme.colors.textSecondary,
  },
  footerLink: {
    fontFamily: theme.typography.fonts.semibold,
    color: theme.colors.primary,
  },
  hint: {
    marginTop: theme.spacing.xxxl,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
  },
  hintTitle: {
    fontFamily: theme.typography.fonts.semibold,
    fontSize: theme.typography.sizes.bodySmall,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  hintText: {
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.caption,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
});