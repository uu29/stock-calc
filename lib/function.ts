export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const getRor = (currentPrice: number, purchasePrice: number) => {
  if (currentPrice === 0 || purchasePrice === 0) return 0;
  return ((currentPrice - purchasePrice) / purchasePrice) * 100;
};
