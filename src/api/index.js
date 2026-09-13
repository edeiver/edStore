const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }

  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el producto");
  }

  return response.json();
};

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Error al obtener las categorías");
  }

  return response.json();
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(
    `${BASE_URL}/products/category/${encodeURIComponent(category)}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener los productos de la categoría");
  }

  return response.json();
};

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Error al obtener los usuarios");
  }

  return response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el usuario");
  }

  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  return response.json();
};