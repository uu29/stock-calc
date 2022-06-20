import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import router from "next/router";
import { FeatureKey } from "../../featureKey";

export interface HomeState {}

export const initialState: HomeState = {};

export const homeSlice = createSlice({
  name: FeatureKey.home,
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
