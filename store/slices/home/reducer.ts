import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureKey } from "../../featureKey";
import { getAverage, getRor, sum } from "../../../lib/function";
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
  [key: string]: number | string;
}

export const homeSlice = createSlice({
  name: FeatureKey.home,
  initialState,
  reducers: {
    resetAllStock(state) {
      state.totalStock = initialState.totalStock;
      state.currentStock = initialState.currentStock;
      state.tradingStock = initialState.tradingStock;
    },
    setCurrentStock(state, action: PayloadAction<SetStockParams>) {
      state.currentStock = { ...state.currentStock, ...action.payload };
      const currentTotalAmount = state.currentStock.purchasePrice * state.currentStock.holdingQuantity;
      state.currentStock.currentTotalAmount = currentTotalAmount;
      state.currentStock.currentRor = getRor(state.currentStock.marketPrice * state.currentStock.holdingQuantity, currentTotalAmount);
      const totalAmountSum = sum(currentTotalAmount, state.tradingStock.tradingTotalAmount);
      const totalQuantitySum = sum(state.currentStock.holdingQuantity, state.tradingStock.tradingQuantity);
      const totalAverage = getAverage(totalAmountSum, totalQuantitySum);
      state.totalStock.totalAmount = totalAmountSum;
      state.totalStock.totalQuantity = totalQuantitySum;
      state.totalStock.totalAverage = totalAverage;
      state.totalStock.totalRor = getRor(state.currentStock.marketPrice, totalAverage);
    },
    setTradingStock(state, action: PayloadAction<SetStockParams>) {
      state.tradingStock = { ...state.tradingStock, ...action.payload };
      const tradingTotalAmount = state.tradingStock.tradingPrice * state.tradingStock.tradingQuantity;
      state.tradingStock.tradingTotalAmount = tradingTotalAmount;
      const totalAmountSum = sum(state.currentStock.currentTotalAmount, tradingTotalAmount);
      const totalQuantitySum = sum(state.currentStock.holdingQuantity, state.tradingStock.tradingQuantity);
      const totalAverage = getAverage(totalAmountSum, totalQuantitySum);
      state.totalStock.totalAmount = totalAmountSum;
      state.totalStock.totalQuantity = totalQuantitySum;
      state.totalStock.totalAverage = totalAverage;
      state.totalStock.totalRor = getRor(state.currentStock.marketPrice, totalAverage);
    },
  },
});

export const { resetAllStock, setCurrentStock, setTradingStock } = homeSlice.actions;

export default homeSlice.reducer;
