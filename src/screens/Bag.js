import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Touchable,
  FlatList,
} from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCart } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../style/theme";
import { createGlobalStyles } from "../style/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import ItemCart from "../components/ItemCart";
import Button from "../components/Button";

const Bag = ({ navigation }) => {
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

  const taxes = totalPrice * 0.1;
  const total = totalPrice + taxes;

  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.safePadding]}>
      <Header isRow navigation={navigation} title={`Your Bag`} subTitle={` (${totalItems} items)`} />
      <View style={[globalStyles.flex]}>
        <FlatList
        data={cart}
          style={{ flexGrow: 0 }}

          //style={[globalStyles.flex]}
           showsVerticalScrollIndicator={false}
           renderItem={({item})=> <ItemCart item={item}/>}
           keyExtractor={(item) => item?.id.toString()}
        />

        {cart.length > 0 && (
          <View style={[styles.buttonContainer, styles.cuponView]}>
            <View style={[globalStyles.row]}>
              <AntDesign name="tag" size={22} color="black" />
              <Text style={[styles.voucherCode]}>{"VOUCHER CODE"}</Text>
            </View>
            <TouchableOpacity style={[styles.voucherButton]}>
              <Text style={styles.buttonTitle}>APPLY</Text>
            </TouchableOpacity>
          </View>
        )}
        {cart.length > 0 && (
          <View style={[styles.orderView]}>
            <Text style={[styles.titleOrder]}>Order summary</Text>
            <View
              style={[
                globalStyles.row,
                globalStyles.spaceBetween,
                globalStyles.fullWidth,
              ]}
            >
              <Text style={[styles.titleItemOrder]}>Subtotal</Text>
              <Text style={[styles.titleItemOrder]}>{totalPrice}</Text>
            </View>
            <View
              style={[
                globalStyles.row,
                globalStyles.spaceBetween,
                globalStyles.fullWidth,
              ]}
            >
              <Text style={[styles.titleItemOrder]}>Standar delivery</Text>
              <Text style={[styles.titleItemOrder]}>FREE</Text>
            </View>
            <View
              style={[
                globalStyles.row,
                globalStyles.spaceBetween,
                globalStyles.fullWidth,
              ]}
            >
              <Text style={[styles.titleItemOrder]}>Estimate taxes</Text>
              <Text style={[styles.titleItemOrder]}>{taxes}</Text>
            </View>
            <View style={[styles.line]} />
            <View
              style={[
                globalStyles.row,
                globalStyles.spaceBetween,
                globalStyles.fullWidth,
              ]}
            >
              <Text style={[styles.titleOrder]}>Total</Text>
              <Text
                style={[styles.titleOrder]}
              >{`$ ${total.toFixed(2)} USD`}</Text>
            </View>
          </View>
        )}
        <Button title="Proceed checkout"/>
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
