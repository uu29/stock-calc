import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureKey } from "../../featureKey";
import { getRor } from "../../../lib/function";
import { HomeState } from "./interface";

export const initialState: HomeState = {
  totalStock: {
    totalAverage: 0,
    totalAmount: 0,
    totalRor: 0,
    totalQuantity: 0,
  },
  currentStock: {
    marketPrice: 0,
    purchasePrice: 0,
    holdingQuantity: 0,
    currentTotalAmount: 0,
    currentRor: 0,
  },
  tradingStock: {
    tradingPrice: 0,
    tradingQuantity: 0,
    tradingTotalAmount: 0,
  },
};

export interface SetStockParams {
  [key: string]: number;
}

export const homeSlice = createSlice({
  name: FeatureKey.home,
  initialState,
  reducers: {
    setCurrentStock(state, action: PayloadAction<SetStockParams>) {
      state.currentStock = { ...state.currentStock, ...action.payload };
      const totalAmount = state.currentStock.purchasePrice * state.currentStock.holdingQuantity;
      state.currentStock.currentTotalAmount = totalAmount;
      state.currentStock.currentRor = getRor(state.currentStock.marketPrice * state.currentStock.holdingQuantity, totalAmount);
    },
    setTradingStock(state, action: PayloadAction<SetStockParams>) {
      state.tradingStock = { ...state.tradingStock, ...action.payload };
    },
  },
});

export const { setCurrentStock, setTradingStock } = homeSlice.actions;

export default homeSlice.reducer;
