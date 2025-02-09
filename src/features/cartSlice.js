import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // مصفوفة لتخزين المنتجات التي يضيفها المستخدم
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += 1; // إذا كان المنتج موجودًا، زد الكمية
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // إذا لم يكن موجودًا، أضفه مع quantity = 1
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((product) => product.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
