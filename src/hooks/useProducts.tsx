import { useState } from "react";
import Product from "../models/product";
import Products from "../data/products.json";

export const useProducts = () => {
  const [_products, _setProducts] = useState<Product[]>(Products);

  const toggleFavorite = (id: string): void => {
    const newProducts = [..._products];
    const prodIdx = newProducts.findIndex((prod) => prod.id === id);
    newProducts.splice(prodIdx, 1, {
      ...newProducts[prodIdx],
      isFavourite: !newProducts[prodIdx].isFavourite,
    });
    _setProducts(newProducts);
  };

  return {
    products: _products,
    toggleFavorite,
  };
};
