import { useState } from "react";

export function useSearch(products) {
  const [searchQuery, setSearchQuery] = useState("");

  let searchedProducts = [...products];

  if (searchQuery.trim() !== "") {
    const query = searchQuery.trim().toLowerCase();
    searchedProducts = searchedProducts.filter((p) =>
      p.name.toLowerCase().includes(query),
    );
  }

  return { searchQuery, setSearchQuery, searchedProducts };
}
