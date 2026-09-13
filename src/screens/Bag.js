import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCart } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../style/theme";
import { createGlobalStyles } from "../style/globalStyles";

const Bag = () => {
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
  
  useFocusEffect(
    useCallback(() => {
      console.log("Bag screen focused");
      return () => {
        console.log("Bag screen unfocused");
      };
    }, []),
  );
  const globalStyles = createGlobalStyles(theme);

  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.safePadding]}>
      <Text>{`Your Bag (${totalItems} items)`}</Text>
      <View>
        {cart.length > 0 &&
          cart.map((item, i) => {
            return (
              <View key={i} style={[styles.cardContainer]}>
               <Text onPress={()=>{ removeFromBag(item.id)}} style={{ alignSelf: 'flex-end'}}>X</Text>
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
                    <Text onPress={()=>{increaseQuantity(item.id)}}>+</Text>
                    <Text>{item?.quantity}</Text>
                    <Text onPress={()=>{decreaseQuantity(item.id)}}>-</Text>
                  </View>
                  <View>
                    <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                  </View>
                </View>
              </View>
            );
          })}
      <Text>{JSON.stringify(cart)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Bag;

const styles = StyleSheet.create({
  cardContainer: {
    //flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 20,
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
    borderRadius: theme.radius.sm
  },
});
