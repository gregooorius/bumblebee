import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Basket, BasketArray } from "../../Models/Basket";

const initialState: BasketArray = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ product: Basket }>) => {
      const prod = state.products.find(
        (item) => item.id === action.payload.product.id
      );
      if (prod) {
        prod.amount += action.payload.product.amount;
      } else {
        state.products.push(action.payload.product);
      }
    },
    del: (state, action: PayloadAction<{ id: number }>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    delAll: (state) => {
      state.products = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { add, del, delAll } = basketSlice.actions;

export default basketSlice.reducer;
