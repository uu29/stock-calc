export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const getRor = (currentPrice: number, purchasePrice: number) => ((currentPrice - purchasePrice) / purchasePrice) * 100;
