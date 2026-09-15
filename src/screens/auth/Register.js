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
import { register } from "../../api";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = ({ navigation }) => {
  const globalStyles = createGlobalStyles(theme);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const isFormValid =
    username.trim().length > 0 &&
    email.trim().length > 0 &&
    password.length > 0 &&
    password === confirmPassword;

  const handleRegister = async () => {
    setError(null);
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await register({ username, email, password });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Something went wrong creating your account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <SafeAreaView style={[globalStyles.container, globalStyles.safePadding]}>
        <View style={styles.successContainer}>
          <Text style={styles.successTitle}>Account created</Text>
          <Text style={styles.successSubtitle}>
            Your account request went through. Head back to sign in to
            continue.
          </Text>
          <Button
            title="Go to sign in"
            onPress={() => navigation.navigate("Login")}
            style={{ marginTop: theme.spacing.xl }}
          />
        </View>
      </SafeAreaView>
    );
  }

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
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
              Join edStore to save your bag and track your orders.
            </Text>
          </View>

          <View style={styles.form}>
            <Input
              label="Username"
              value={username}
              onChangeValue={setUsername}
              placeholder="Choose a username"
              autoCapitalize="none"
            />
            <Input
              label="Email"
              value={email}
              onChangeValue={setEmail}
              placeholder="you@example.com"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              label="Password"
              value={password}
              onChangeValue={setPassword}
              placeholder="Create a password"
              secureTextEntry
            />
            <Input
              label="Confirm password"
              value={confirmPassword}
              onChangeValue={setConfirmPassword}
              placeholder="Repeat your password"
              secureTextEntry
            />

            {!!error && <Text style={styles.error}>{error}</Text>}
            <Button
              title="Create account"
              onPress={handleRegister}
              isLoading={isSubmitting}
              disabled={isSubmitting || !isFormValid}
              style={styles.submitButton}
            />
          </View>

          <TouchableOpacity
            style={styles.footer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.footerText}>
              Already have an account? <Text style={styles.footerLink}>Sign in</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.hint}>
            <Text style={styles.hintTitle}>About this form</Text>
            <Text style={styles.hintText}>
              This app authenticates against the public Fake Store API, which
              accepts new sign-ups but doesn't actually persist them for login.
              After creating an account here, sign in using one of the API's
              demo users instead (see the Login screen).
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

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
  successContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.xl,
  },
  successTitle: {
    fontFamily: theme.typography.fonts.display,
    fontSize: theme.typography.sizes.h2,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
  successSubtitle: {
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.body,
    color: theme.colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
});