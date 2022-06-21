import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureKey } from "../../featureKey";
import { getRor } from "../../../lib/function";

export const totalStock = {
  totalAverage: "totalAverage",
  totalAmount: "totalAmount",
  totalRor: "totalRor",
  totalQuantity: "totalQuantity",
} as const;

export type TotalStockType = typeof totalStock[keyof typeof totalStock];

export interface ITotalStock {
  totalAverage: number;
  totalAmount: number;
  totalRor: number;
  totalQuantity: number;
}

export const currentStock = {
  marketPrice: "marketPrice",
  purchasePrice: "purchasePrice",
  holdingQuantity: "holdingQuantity",
  currentTotalAmount: "currentTotalAmount",
  currentRor: "currentRor",
} as const;

export interface ICurrentStock {
  marketPrice: number;
  purchasePrice: number;
  holdingQuantity: number;
  currentTotalAmount: number;
  currentRor: number;
}

export type CurrentStockType = typeof currentStock[keyof typeof currentStock];

export const tradingStock = {
  tradingPrice: "tradingPrice",
  tradingQuantity: "tradingQuantity",
} as const;

export type TradingStockType = typeof tradingStock[keyof typeof tradingStock];

export interface ITradingStock {
  tradingPrice: number;
  tradingQuantity: number;
}

export interface HomeState {
  totalStock: ITotalStock;
  currentStock: ICurrentStock;
  tradingStock: ITradingStock;
}

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
  },
};

export interface SetStockParams {
  [key: string]: number;
}

export const homeSlice = createSlice({
  name: FeatureKey.home,
  initialState,
  reducers: {
    setTotalStock(state, action: PayloadAction<ITotalStock>) {
      state.totalStock = { ...state.totalStock, ...action.payload };
    },
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

export const { setTotalStock, setCurrentStock, setTradingStock } = homeSlice.actions;

export default homeSlice.reducer;
