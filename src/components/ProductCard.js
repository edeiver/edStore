import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { theme } from "../style/theme";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToBag } = useCart();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category} numberOfLines={2}>
            {product.category}
          </Text>
        </View>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heart}>♡</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.rating}>★ {product.rating.rate}</Text>
      <Text style={styles.title} numberOfLines={2}>
        {product.title}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addToBag(product)}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  categoryContainer: {
    flex: 1,
    minWidth: 0,
  },
  category: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.md,

    fontFamily: theme.typography.fonts.medium,
    fontSize: theme.typography.bodySmall,
    textTransform: "uppercase",
  },
  heartButton: {
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    fontSize: 32,
    lineHeight: 34,
    color: theme.colors.black,
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.sm,
  },
  rating: {
    marginTop: theme.spacing.sm,
    color: theme.colors.secondary,
    fontFamily: theme.typography.fonts.medium,
    fontSize: theme.typography.bodySmall,
  },
  title: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textPrimary,
    fontFamily: theme.typography.fonts.display,
    fontSize: theme.typography.bodyLarge,
    lineHeight: 24,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },
  price: {
    color: theme.colors.textPrimary,
    fontFamily: theme.typography.fonts.semibold,
    fontSize: theme.typography.bodyLarge,
  },
  addButton: {
    width: 40,
    aspectRatio: 1,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 28,
    lineHeight: 30,
    color: theme.colors.textPrimary,
  },
});
