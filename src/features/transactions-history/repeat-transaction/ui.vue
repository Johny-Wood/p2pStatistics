<template>
  <q-btn @click="handleRepeatTransaction">повторить формулу</q-btn>
</template>

<script setup>
import { useTransactionHistoryStore } from "stores/transactionsHistoryStore";

const transactionsHistory = useTransactionHistoryStore();
// console.log(
//   transactionsHistory.transactionsHistory[
//     transactionsHistory.transactionsHistory.length - 1
//   ]
// );

const handleRepeatTransaction = () => {
  transactionsHistory.repeatCurrentTransaction();
};
</script>

<style lang="scss" scoped></style>
