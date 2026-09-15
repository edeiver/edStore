import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../style/theme";
import {AntDesign} from '@expo/vector-icons';
import { useCart } from "../contexts/CartContext";

const ItemCart = ({item}) => {
    const {
        cart,
        addToBag,
        removeFromBag,
        increaseQuantity,
        decreaseQuantity,
        clearBag,
        totalItems,
        totalPrice,
      } = useCart();
    if (!item) {
        return null
    }
    
  return (
    <View style={[styles.cardContainer]}>
      <AntDesign
        onPress={() => {
          removeFromBag(item.id);
        }}
        style={{ alignSelf: "flex-end" }}
        name="close"
        size={20}
        color={theme.colors.black}
      />
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text>{`${item.rating.rate} ★`}</Text>

          {/* <Text>Quantity: {item.quantity}</Text> */}
        </View>
      </View>
      <View style={[styles.buttonContainer]}>
        <View style={[styles.itemContainer, styles.buttonQuantity]}>
          <Text
            onPress={() => {
              increaseQuantity(item.id);
            }}
          >
            +
          </Text>
          <Text>{item?.quantity}</Text>
          <Text
            onPress={() => {
              decreaseQuantity(item.id);
            }}
          >
            -
          </Text>
        </View>
        <View>
          <Text>${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  cardContainer: {
    //flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },

  image: {
    width: "35%",
    aspectRatio: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.sm,
  },

  infoContainer: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textPrimary,
    fontFamily: theme.typography.fonts.display,
    fontSize: theme.typography.bodyLarge,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    justifyContent: "space-between",
    //flex: 1,
    marginTop: 10,
  },
  buttonQuantity: {
    backgroundColor: theme.colors.surface,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: theme.radius.sm,
  },
  cuponView: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.sm,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    marginTop: 15,
  },
  voucherCode: {
    letterSpacing: 4,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 4,
    marginLeft: 10,
  },
  voucherButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: theme.radius.sm,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  buttonTitle: {
    color: theme.colors.white,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.body,
    lineHeight: 20,
  },
  orderView: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: theme.radius.sm,
    alignItems: "center",
    backgroundColor: theme.colors.white,
    //flexDirection: 'row'
    marginTop: 15,
  },
  line: {
    width: "100%",
    borderWidth: 0.3,
    borderColor: theme.colors.neutral,
    borderStyle: "dashed",
    marginVertical: 10,
  },
  titleOrder: {
    color: theme.colors.black,
    fontFamily: theme.typography.fonts.displayMedium,
    fontSize: theme.typography.sizes.bodyLarge,
    lineHeight: 24,
  },
  titleItemOrder: {
    color: theme.colors.black,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.sizes.bodySmall,
    lineHeight: 24,
  },
});
