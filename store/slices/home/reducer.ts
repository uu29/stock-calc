import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureKey } from "../../featureKey";

export const totalStock = {
  average: "average",
  amount: "amount",
  ror: "ror",
  total_quantity: "total_quantity",
} as const;

export type TotalStockType = typeof totalStock[keyof typeof totalStock];

export interface ITotalStock {
  average: number;
  amount: number;
  ror: number;
  total_quantity: number;
}

export const currentStock = {
  market_price: "market_price",
  purchase_price: "purchase_price",
  holding_quantity: "holding_quantity",
} as const;

export interface ICurrentStock {
  market_price: number;
  purchase_price: number;
  holding_quantity: number;
}

export type CurrentStockType = typeof currentStock[keyof typeof currentStock];

export const tradingStock = {
  trading_price: "trading_price",
  trading_quantity: "trading_quantity",
} as const;

export type TradingStockType = typeof tradingStock[keyof typeof tradingStock];

interface ITradingStock {
  trading_price: number;
  trading_quantity: number;
}

export interface HomeState {
  total_stock: ITotalStock;
  current_stock: ICurrentStock;
  trading_stock: ITradingStock;
}

export const initialState: HomeState = {
  total_stock: {
    average: 0,
    amount: 0,
    ror: 0,
    total_quantity: 0,
  },
  current_stock: {
    market_price: 0,
    purchase_price: 0,
    holding_quantity: 0,
  },
  trading_stock: {
    trading_price: 0,
    trading_quantity: 0,
  },
};

export const homeSlice = createSlice({
  name: FeatureKey.home,
  initialState,
  reducers: {
    setTotalStock(state, action: PayloadAction<ITotalStock>) {
      state.total_stock = { ...action.payload };
    },
    setCurrentStock(state, action: PayloadAction<ICurrentStock>) {
      state.current_stock = { ...action.payload };
    },
    setTradingStock(state, action: PayloadAction<ITradingStock>) {
      state.trading_stock = { ...action.payload };
    },
  },
});

export const { setTotalStock, setCurrentStock, setTradingStock } = homeSlice.actions;

export default homeSlice.reducer;
