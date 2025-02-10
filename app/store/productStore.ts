"use client";

import { client } from "@/sanity/lib/client";
import { create } from "zustand";

interface Food {
  name: string;
  salePrice: number;
  originalPrice: number;
  image: string;
  _id: string;
}

interface Products {
  products: Food[];
  fetchProducts: () => void;
}

const query = `*[_type == "food"]{
    name,
    salePrice,
    originalPrice,
    image,
    description,
    available,
    _id
  }`;
const useProductStore = create<Products>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const productsData: Food[] = await client.fetch(query);
      set({ products: productsData });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
}));

export default useProductStore;
