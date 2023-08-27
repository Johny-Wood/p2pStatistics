<template>
  <div>
    <Table :headers="headers" :data="transactionsHistory">
      <template v-slot:actions>
        <div class="q-gutter-md">
          <RepeatTransaction />
          <AddTransaction />
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup>
import { useTransactionHistoryStore } from "stores/transactionsHistoryStore";
import { Table } from "entities/Table";
import {
  AddTransaction,
  RepeatTransaction,
} from "features/transactions-history";
import { watch } from "vue";

const transactionsHistory = useTransactionHistoryStore().transactionsHistory;

watch(transactionsHistory, (newTransactionsHistory) => {
  console.log(newTransactionsHistory);
});

// transactionsHistory.add({ label: "hi" });

const headers = [
  {
    name: "currency",
    required: true,
    label: "Что купил",
    align: "center",
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
  {
    name: "buy_price",
    align: "center",
    label: "Цена",
    field: "buy_price",
    sortable: true,
  },
  {
    name: "buy_amount",
    align: "center",
    label: "Кол-во",
    field: "buy_amount",
    sortable: true,
  },
  {
    name: "sell_price",
    align: "center",

    label: "Цена продажи",
    field: "sell_price",
    sortable: true,
  },
  {
    name: "sell_amount",
    align: "center",
    label: "Кол-во проданно",
    field: "sell_amount",
    sortable: true,
  },
  {
    name: "date",
    align: "center",
    label: "Дата",
    field: "date",
    sortable: true,
  },
];
</script>

<style lang="scss" scoped></style>
