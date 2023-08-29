<template>
  <div>
    <Table
      :headers="headers"
      :data="transactionsHistory.currentTransactionsHistory"
    >
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
import { watch, ref, reactive, onMounted } from "vue";
import { getTruthyIndices } from "shared/lib/transactions-validation";

const transactionsHistory = useTransactionHistoryStore();

const truthyIndices = ref([]);

watch(transactionsHistory.currentTransactionsHistory, (newTransaction) => {
  truthyIndices.value = getTruthyIndices(newTransaction);

  if (truthyIndices.value.length > 0) {
    const isRowAdded = transactionsHistory.transactionsHistory.find((item) => {
      return (
        item.id ==
        newTransaction[truthyIndices.value[truthyIndices.value.length - 1]].id
      );
    });

    if (isRowAdded) {
      transactionsHistory.set(
        newTransaction[truthyIndices.value[truthyIndices.value.length - 1]],
        truthyIndices.value[truthyIndices.value.length - 1]
      );
    } else {
      transactionsHistory.add(
        newTransaction[truthyIndices.value[truthyIndices.value.length - 1]]
      );
    }
  }
});

watch(transactionsHistory.transactionsHistory, (newTransaction) => {
  console.log(transactionsHistory.transactionsHistory);
});

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
