export const numberWithCommas = (x: number) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  if (x % 1 !== 0) {
    // 소수점 이하는 comma 처리하지 않음
    const [int, float] = x.toString().split(".");
    return `${int.toString().replace(regex, ",")}.${float}`;
  }
  return x.toString().replace(regex, ",");
};

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
