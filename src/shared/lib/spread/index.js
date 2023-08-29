export const calcSpread = (buy, sell) => {
  return (sell / buy - 1).toFixed(2);
};
