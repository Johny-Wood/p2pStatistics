<template>
  <q-btn @click="handleAddTransaction">новая формула</q-btn>
  <!-- <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <TransactionForm
          @onSubmit="(transaction) => handleAddTransaction(transaction)"
          @onCancel="onDialogCancel"
        />
      </q-card-section>
    </q-card>
  </q-dialog> -->
</template>

<script setup>
import { useDialogPluginComponent } from "quasar";
import { useTransactionHistoryStore } from "stores/transactionsHistoryStore";
// import { TransactionForm } from "entities/TransactionForm";

// defineEmits([...useDialogPluginComponent.emits]);

const transactionsHistory = useTransactionHistoryStore();

// const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
//   useDialogPluginComponent();

const handleAddTransaction = () => {
  transactionsHistory.add();
  // console.log(transaction);
  // onDialogOK();
};

// const showDialog = () => {
//   dialogRef.value.show();
// };
</script>

<style lang="scss" scoped></style>
