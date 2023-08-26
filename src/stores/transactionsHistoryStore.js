import { defineStore } from "pinia";

export const useTransactionHistoryStore = defineStore("transactionHistory", {
  state: () => ({
    transactionsHistory: [
      // {
      //   currency: "USDT",
      //   buy_where: "Binance",
      //   buy_price: 100,
      //   buy_amount: 24,
      //   sell_price: 110,
      //   sell_amount: 24,
      //   spread: [
      //     {
      //       buy_price: 100,
      //       buy_amount: 24,
      //       sell_price: 110,
      //       sell_amount: 24,
      //       result: 0.23,
      //     },
      //   ],
      //   id: 0,
      // },
      // {
      //   currency: "USDT",
      //   buy_where: "Binance",
      //   buy_price: 102,
      //   buy_amount: 37,
      //   sell_price: 105,
      //   sell_amount: 10,
      //   id: 1,
      // },
      // {
      //   currency: "ETH",
      //   buy_where: "Binance",
      //   buy_price: 160,
      //   buy_amount: 23,
      //   sell_price: 200,
      //   sell_amount: 7,
      //   id: 2,
      // },
      // {
      //   currency: "ETH",
      //   buy_where: "Binance",
      //   buy_price: 370,
      //   buy_amount: 67,
      //   sell_price: 70,
      //   sell_amount: 13,
      //   id: 3,
      // },
      // {
      //   currency: "USDT",
      //   buy_where: "Binance",
      //   buy_price: 200,
      //   buy_amount: 9,
      //   sell_price: 250,
      //   sell_amount: 7,
      //   id: 4,
      // },
      // {
      //   currency: "Jelly bean",
      //   buy_where: "Binance",
      //   buy_price: 10,
      //   buy_amount: 94,
      //   sell_price: 100,
      //   sell_amount: 50,
      //   id: 5,
      // },
      // {
      //   currency: "Lollipop",
      //   buy_where: "Binance",
      //   buy_price: 200,
      //   buy_amount: 98,
      //   sell_price: 220,
      //   sell_amount: 38,
      //   id: 6,
      // },
      // {
      //   currency: "Honeycomb",
      //   buy_where: "Binance",
      //   buy_price: 111,
      //   buy_amount: 87,
      //   sell_price: 124,
      //   sell_amount: 62,
      //   id: 7,
      // },
      // {
      //   currency: "Donut",
      //   buy_where: "Binance",
      //   buy_price: 250,
      //   buy_amount: 51,
      //   sell_price: 490,
      //   sell_amount: 26,
      //   id: 8,
      // },
      // {
      //   currency: "USDT",
      //   buy_where: "Binance",
      //   buy_price: 100,
      //   buy_amount: 65,
      //   sell_price: 120,
      //   sell_amount: 54,
      //   id: 9,
      // },
    ],
    nextId: 0,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    add(item) {
      // console.log(item);
      this.transactionsHistory.push({ ...item, id: this.nextId++ });
    },
  },
});
