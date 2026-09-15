import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createGlobalStyles } from "../style/globalStyles";
import { theme } from "../style/theme";
import Header from "../components/Header";
import Input from "../components/Input";
import { FontAwesome6 } from "@expo/vector-icons";
import { getCategories, getProducts } from "../api";
import Departments from "../components/Departments";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

const Explore = ({ navigation }) => {
  const globlalStyles = createGlobalStyles(theme);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [allProducts, setAllProducts] = useState([]);
  const [filters, setfILTERS] = useState([
    // "price",
    // "rating",
    // "brand",
    // "recomended",
    "price",
    "rating",
    "recommended",
  ]);
  const filteredProducts =
    selectedDepartment === "all"
      ? allProducts
      : allProducts.filter(
          (product) => product.category === selectedDepartment,
        );

  const searchedProducts = filteredProducts.filter((product) => {
    const search = text.toLowerCase().trim();
    if (!search) {
      return true;
    }
    return (
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  });

  const sortedProducts = (() => {
    switch (selectedFilter) {
      case "price":
        return [...searchedProducts].sort((a, b) => a.price - b.price);

      case "rating":
        return [...searchedProducts].sort(
          (a, b) => b.rating.rate - a.rating.rate,
        );

      case "recommended":
        return [...searchedProducts].sort(
          (a, b) => b.rating.rate - a.rating.rate,
        );

      default:
        return searchedProducts;
    }
  })();
  useEffect(() => {
    // Lógica para obtener los productos
    loadProducts();
    loadCategories();
  }, []);
  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      console.log("Productos obtenidos:", response);
      setAllProducts(response);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      setLoading(false);
    }
  };
  const loadCategories = async () => {
    try {
      const response = await getCategories();
      console.log("Categorías obtenidas:", response);
      setDepartments(response);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };
  return (
    <SafeAreaView style={[globlalStyles.mainView, globlalStyles.safePadding]}>
      <Header
        navigation={navigation}
        title="Explorer"
        subTitle="Find pieces that fit your"
      />
      <View
        style={[
          globlalStyles.row,
          globlalStyles.fullWidth,
          globlalStyles.spaceBetween,
          { marginBottom: 10 },
        ]}
      >
        <Input
          type="search"
          value={text}
          onChangeValue={setText}
          placeholder="Serach products, category or recommended..."
        />
        <View style={[styles.filter]}>
          <FontAwesome6
            name="sliders"
            size={20}
            color={theme.colors.textPrimary}
          />
        </View>
      </View>

      <Text style={[styles.label]}>Categories</Text>
      <Departments
        //style={{ flex: 1}}
        items={departments}
        onSelect={setSelectedDepartment}
        selectedCategory={selectedDepartment}
      />
      <Text style={[styles.label]}>Filter</Text>
      <Filters
        onSelect={setSelectedFilter}
        items={filters}
        selectedFilter={selectedFilter}
      />
      {loading ? (
        <ActivityIndicator color={theme.colors.primary} />
      ) : (
        <FlatList
          data={searchedProducts}
          numColumns={2}
          contentContainerStyle={{
            paddingTop: theme.spacing.md,
            paddingBottom: 100,
          }}
          columnWrapperStyle={styles.wrapperRow}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.white,
  },
  filter: {
    //backgroundColor: '#f6f3f6',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.sm,
    alignItems: "center",
    marginLeft: theme.spacing.md,
  },
  label: {
    fontSize: theme.typography.sizes.bodySmall,
    fontFamily: theme.typography.fonts.regular,
    letterSpacing: 1.3,
  },
  wrapperRow: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
});
