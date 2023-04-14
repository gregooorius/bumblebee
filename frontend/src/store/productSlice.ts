import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductArray } from "../../Models/Product";

const initialState: ProductArray = {
  products: [
    {
      id: 1,
      title: "Akác Méz",
      amount: 10,
      description: "Finom, édes Akác méz",
      image:
        "https://ehaho.rw/app/assets/img/products/natural-honey-500x500.jpg",
    },
    {
      id: 2,
      title: "Virág Méz",
      amount: 10,
      description: "Finom, édes Virág méz",
      image:
        "https://ehaho.rw/app/assets/img/products/natural-honey-500x500.jpg",
    },
    {
      id: 3,
      title: "Erdei Méz",
      amount: 10,
      description: "Finom, édes Erdei méz",
      image:
        "https://ehaho.rw/app/assets/img/products/natural-honey-500x500.jpg",
    },
    {
      id: 4,
      title: "Hárs Méz",
      amount: 10,
      description: "Finom, édes Hárs méz",
      image:
        "https://ehaho.rw/app/assets/img/products/natural-honey-500x500.jpg",
    },
    {
      id: 5,
      title: "Vegyes Méz",
      amount: 10,
      description: "Finom, édes Vegyes méz",
      image:
        "https://ehaho.rw/app/assets/img/products/natural-honey-500x500.jpg",
    },
    {
      id: 6,
      title: "Gesztenye Méz",
      amount: 10,
      description: "Finom, édes Geszteny méz",
      image:
        "https://ehaho.rw/app/assets/img/products/natural-honey-500x500.jpg",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reduceAmount: (
      state,
      action: PayloadAction<{ amount: number; id: number }>
    ) => {
      state.products.forEach((item) => {
        if (item.id === action.payload.id) {
          item.amount -= action.payload.amount;
        }
      });
    },
    addAmount: (
      state,
      action: PayloadAction<{ amount: number; id: number }>
    ) => {
      state.products.forEach((item) => {
        if (item.id === action.payload.id) {
          item.amount += action.payload.amount;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduceAmount,addAmount } = productSlice.actions;

export default productSlice.reducer;
