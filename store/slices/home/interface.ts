export const totalStock = {
  totalAverage: "totalAverage",
  totalAmount: "totalAmount",
  totalQuantity: "totalQuantity",
} as const;

export type TotalStockType = typeof totalStock[keyof typeof totalStock];

export interface SetStockParams {
  [key: string]: number | string;
}

export interface ITotalStock {
  totalAverage: number;
  totalAmount: number;
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
  tradingTotalAmount: "tradingTotalAmount",
  tradingRor: "tradingRor",
} as const;

export type TradingStockType = typeof tradingStock[keyof typeof tradingStock];

export interface ITradingStock {
  tradingPrice: number;
  tradingQuantity: number;
  tradingTotalAmount: number;
  tradingRor: number;
}

export interface HomeState {
  totalStock: ITotalStock;
  currentStock: ICurrentStock;
  tradingStock: ITradingStock;
}
