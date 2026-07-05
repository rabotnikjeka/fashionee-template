import { useState } from "react";

function getAllCategories(products) {
  if (products.length === 0) return [];
  return ["All", ...new Set(products.flatMap((p) => p.categories || []))];
}

function getAllColors(products) {
  if (products.length === 0) return [];
  return [...new Set(products.map((p) => p.color).filter(Boolean))];
}

function filterByCategory(products, category) {
  if (!category || category === "All") return products;
  return products.filter(
    (p) => p.categories && p.categories.includes(category),
  );
}

function filterByPrice(products, priceMin, priceMax, minPrice, maxPrice) {
  if (priceMin === null && priceMax === null) return products;
  const pMin = priceMin !== null ? Number(priceMin) : minPrice;
  const pMax = priceMax !== null ? Number(priceMax) : maxPrice;
  return products.filter((p) => p.price >= pMin && p.price <= pMax);
}

function filterByColors(products, colors) {
  if (!colors || colors.length === 0) return products;
  return products.filter(
    (p) => p.color && colors.includes(p.color.toLowerCase()),
  );
}

export function useFilters(products, searchedProducts) {
  const [appliedFilters, setAppliedFilters] = useState({
    category: "All",
    priceMin: null,
    priceMax: null,
    colors: [],
  });

  const allCategories = getAllCategories(products);
  const allColors = getAllColors(products);
  const minPrice =
    products.length > 0 ? Math.min(...products.map((p) => p.price)) : 0;
  const maxPrice =
    products.length > 0 ? Math.max(...products.map((p) => p.price)) : 1000;

  let filteredProducts = filterByCategory(
    searchedProducts,
    appliedFilters.category,
  );
  filteredProducts = filterByPrice(
    filteredProducts,
    appliedFilters.priceMin,
    appliedFilters.priceMax,
    minPrice,
    maxPrice,
  );
  filteredProducts = filterByColors(filteredProducts, appliedFilters.colors);

  const applyFilters = function (filters) {
    setAppliedFilters(filters);
  };

  return {
    allCategories,
    allColors,
    minPrice,
    maxPrice,
    filteredProducts,
    appliedFilters,
    applyFilters,
  };
}
