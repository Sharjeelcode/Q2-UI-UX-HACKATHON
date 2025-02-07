"use client";

import { create } from "zustand";

interface cartItem {
  id: string;
  name: string;
  quantity: number;
  image: string;
  price: number;
}

interface cartState {
  cart: cartItem[];
  addItem: (item: cartItem) => void;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;
}

const useCartStore = create<cartState>((set) => {
  let initialCart: cartItem[] = [];

  if (typeof window !== "undefined") {
    const cartLocalStorage = localStorage.getItem("cart");
    initialCart = cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  }

  return {
    cart: initialCart,

    addItem: (item) => {
      set((state) => {
        const existingItem = state.cart.find(
          (cartItem) => cartItem.id === item.id
        );

        const updatedCart = existingItem
          ? state.cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...state.cart, item];

        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }

        return { cart: updatedCart };
      });
    },

    decreaseItem: (id) => {
      set((state) => {
        const updatedCart = state.cart
          .map((cartItem) =>
            cartItem.id === id && cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0);

        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }

        return { cart: updatedCart };
      });
    },

    removeItem: (id) => {
      set((state) => {
        const updatedCart = state.cart.filter((cartItem) => cartItem.id !== id);

        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }

        return { cart: updatedCart };
      });
    },
  };
});

export default useCartStore;
