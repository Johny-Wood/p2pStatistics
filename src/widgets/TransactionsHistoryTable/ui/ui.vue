<template>
  <div>
    <Table :headers="headers" :data="transactionsHistory" />
  </div>
</template>

<script setup>
import { useTransactionHistoryStore } from "stores/transactionsHistoryStore";
import { Table } from "entities/Table";

const transactionsHistory = useTransactionHistoryStore().transactionsHistory;

// transactionsHistory.add({ label: "hi" });

const headers = [
  {
    name: "name",
    required: true,
    label: "Что купил",
    align: "left",
    field: "currency",
    // field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "buy_where",
    align: "center",
    label: "Где купил",
    field: "buy_where",
    sortable: true,
  },
  { name: "buy_price", label: "Цена", field: "buy_price", sortable: true },
  { name: "buy_amount", label: "Кол-во", field: "buy_amount", sortable: true },
  {
    name: "sell_price",
    label: "Цена продажи",
    field: "sell_price",
    sortable: true,
  },
  {
    name: "sell_amount",
    label: "Кол-во проданно",
    field: "sell_amount",
    sortable: true,
  },
];
</script>

<style lang="scss" scoped></style>
