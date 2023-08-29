import { defineStore } from "pinia";
import { calcSpread } from "src/shared/lib/spread";

export const useTransactionHistoryStore = defineStore("transactionHistory", {
  state: () => ({
    transactionsHistory: [
      // {
      //   currency: "",
      //   buy_where: "",
      //   buy_price: "",
      //   buy_amount: "",
      //   sell_price: "",
      //   sell_amount: "",
      //   date: "2023/01/01",
      //   id: 0,
      //   spread: [],
      // spread: [
      // {
      //   buy_price: 100,
      //   buy_amount: 24,
      //   sell_price: 110,
      //   sell_amount: 24,
      //   result: 0.23,
      // },
      // ],
      // id: 0,
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
    nextId: 1,
    currentTransactionsHistory: [
      {
        currency: "",
        buy_where: "",
        buy_price: "",
        buy_amount: "",
        sell_price: "",
        sell_amount: "",
        date: "2023/01/01",
        id: 1,
        spread: [],
      },
    ],
    cNextId: 2,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    add(transaction) {
      const buy = transaction.buy_price;
      const sell = transaction.sell_price;

      const id = this.nextId++;
      this.transactionsHistory.push({
        ...transaction,
        spread: [{ result: calcSpread(buy, sell) }],
        id: id,
      });
    },
    set(transaction, index) {
      const buy = transaction.buy_price;
      const sell = transaction.sell_price;

      this.transactionsHistory[index] = {
        ...transaction,
        spread: [{ result: calcSpread(buy, sell) }],
      };
    },
    addCurrentTransaction() {
      const transaction = {
        currency: "",
        buy_where: "",
        buy_price: "",
        buy_amount: "",
        sell_price: "",
        sell_amount: "",
        date: "2023/01/01",
        id: this.cNextId++,
        spread: [],
      };

      this.currentTransactionsHistory.push(transaction);
    },
    repeatCurrentTransaction() {
      this.currentTransactionsHistory.push({
        ...this.currentTransactionsHistory[
          this.currentTransactionsHistory.length - 1
        ],
        sell_price: "",
        spread: [],
        id: this.cNextId++,
      });
    },
  },
});
