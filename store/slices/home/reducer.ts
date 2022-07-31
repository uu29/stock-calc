import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAverage, getRor, sum } from "lib/function";
import { FeatureKey } from "../../featureKey";
import { HomeState, SetStockParams } from "./interface";

export const initialState: HomeState = {
  totalStock: {
    totalAverage: 0,
    totalAmount: 0,
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
    tradingRor: 0,
  },
};

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
      const currentTotalAmount = Number(state.currentStock.purchasePrice) * Number(state.currentStock.holdingQuantity);
      state.currentStock.currentTotalAmount = currentTotalAmount;
      state.currentStock.currentRor = getRor(Number(state.currentStock.marketPrice) * Number(state.currentStock.holdingQuantity), currentTotalAmount);
      const totalAmountSum = sum(currentTotalAmount, Number(state.tradingStock.tradingTotalAmount));
      const totalQuantitySum = sum(Number(state.currentStock.holdingQuantity), Number(state.tradingStock.tradingQuantity));
      const totalAverage = getAverage(totalAmountSum, totalQuantitySum);
      state.totalStock.totalAmount = totalAmountSum;
      state.totalStock.totalQuantity = totalQuantitySum;
      state.totalStock.totalAverage = totalAverage;
      if (state.tradingStock.tradingTotalAmount > 0) state.tradingStock.tradingRor = getRor(Number(state.currentStock.marketPrice), totalAverage);
    },
    setTradingStock(state, action: PayloadAction<SetStockParams>) {
      state.tradingStock = { ...state.tradingStock, ...action.payload };
      const tradingTotalAmount = state.tradingStock.tradingPrice * state.tradingStock.tradingQuantity;
      state.tradingStock.tradingTotalAmount = tradingTotalAmount;
      const totalAmountSum = sum(Number(state.currentStock.currentTotalAmount), Number(tradingTotalAmount));
      const totalQuantitySum = sum(Number(state.currentStock.holdingQuantity), Number(state.tradingStock.tradingQuantity));
      const totalAverage = getAverage(totalAmountSum, totalQuantitySum);
      state.tradingStock.tradingRor = getRor(Number(state.currentStock.marketPrice), totalAverage);
      state.totalStock.totalAmount = totalAmountSum;
      state.totalStock.totalQuantity = totalQuantitySum;
      state.totalStock.totalAverage = totalAverage;
    },
  },
});

export const { resetAllStock, setCurrentStock, setTradingStock } = homeSlice.actions;

export default homeSlice.reducer;
