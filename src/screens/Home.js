import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories, getProducts } from "../api";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { createGlobalStyles } from "../style/globalStyles";
import { theme } from "../style/theme";
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const globalStyles = createGlobalStyles(theme);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    // Lógica para obtener los productos
    loadProducts();
    loadCategories();
  }, []);

  const filteredProducts =
    selectedDepartment === "all"
      ? allProducts
      : allProducts.filter(
          (product) => product.category === selectedDepartment,
        );

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      console.log("Productos obtenidos:", response);
      setAllProducts(response);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
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
    <SafeAreaView style={[globalStyles.container, globalStyles.safePadding]}>
      <Header />
      <Hero />
      <Departments
        items={departments}
        onSelect={setSelectedDepartment}
        selectedCategory={selectedDepartment}
      />
      <FlatList
        data={filteredProducts}
        numColumns={2}
        contentContainerStyle={{
          paddingTop: theme.spacing.md,
          paddingBottom: 100,
        }}
        columnWrapperStyle={styles.wrapperRow}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapperRow: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
});
