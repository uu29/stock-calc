import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import router from "next/router";
import { FeatureKey } from "../../featureKey";

export interface HomeState {
  total: {
    average: number; // 최종 평단가
    amount: number; // 매수 총액
    ror: number; // 최종 수익률
    quantity: number; // 최종 수량
  };
  bought: {
    market_price: number; // 현재 시장가
    purchase_price: number; // 현재 내 평단
    quantity: number; // 보유 수량
  };
  trading: {
    purchase_price: number; // 추매 가격
    quantity: number; // 추매 수
  };
}

export const initialState: HomeState = {
  total: {
    average: 0,
    amount: 0,
    ror: 0,
    quantity: 0,
  },
  bought: {
    market_price: 0,
    purchase_price: 0,
    quantity: 0,
  },
  trading: {
    purchase_price: 0,
    quantity: 0,
  },
};

export const homeSlice = createSlice({
  name: FeatureKey.home,
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
