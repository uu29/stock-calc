export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const checkNumb = (a: unknown) => typeof a === "number";

export const sum = (a: number, b: number) => a + b;

export const getRor = (currentPrice: number, purchasePrice: number) => {
  if (currentPrice === 0 || purchasePrice === 0) return 0;
  return ((currentPrice - purchasePrice) / purchasePrice) * 100;
};

export const getAverage = (totalPrice: number, boughtQuantity: number) => {
  if (totalPrice <= 0 || boughtQuantity <= 0) return 0;
  return totalPrice / boughtQuantity;
};
