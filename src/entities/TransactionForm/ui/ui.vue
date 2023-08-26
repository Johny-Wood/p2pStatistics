<template>
  <div class="q-pl-md">
    <h1 class="text-h4 text-weight-bold">Новая транзацию</h1>
    <div class="q-mt-md q-gutter-md" style="max-width: 300px">
      <q-form @submit="onSubmit">
        <!-- <q-input label="Что купил" placeholder="USDT" v-bind="currency" /> -->

        <q-select
          label="Что купил"
          v-bind="currency"
          use-input
          input-debounce="0"
          @new-value="createNewCurrencyOption"
          :options="filteredCurrencyOptions"
          @filter="filterCurrencyOptionsFn"
        ></q-select>

        <q-input label="Где купил" placeholder="Binance" v-bind="buy_where" />

        <q-input label="Цена" placeholder="100" v-bind="buy_price" />

        <q-input label="Кол-во" placeholder="20" v-bind="buy_amount" />

        <q-input label="Цена продажи" placeholder="110" v-bind="sell_price" />

        <q-input label="Кол-во" placeholder="20" v-bind="sell_amount" />

        <!--    <q-select :options="options" label="Type" v-bind="type" /> -->

        <!-- <div class="q-gutter-sm"> -->
        <!--   <q-field :borderless="true" v-bind="terms"> -->
        <!--     <q-checkbox label="Agree to terms and conditions" v-bind="terms" /> -->
        <!--   </q-field> -->
        <!-- </div> -->

        <q-btn class="q-mt-md" color="primary" label="Создать" type="submit" />
        <q-btn
          class="q-mt-md q-ml-sm"
          type="button"
          @click="$emit('onCancel')"
          label="Отмена"
        />
      </q-form>
    </div>
  </div>
  <!-- <Form @submit="submit" :validation-schema="schema"> -->
  <!--   <Field name="currency" /> -->
  <!--   <ErrorMessage name="currency" /> -->
  <!--   <Field name="buy_where" /> -->
  <!--   <ErrorMessage name="buy_where" /> -->
  <!-- <Field name="buy_price" /> -->
  <!-- <ErrorMessage name="buy_price" /> -->

  <!-- <q-btn color="primary" label="Добавить" type="submit" /> -->
  <!-- <q-btn color="primary" label="Отменить" @click="$emit('onCancel')" /> -->
  <!-- </Form> -->
</template>

<script setup>
// import { Form, Field, ErrorMessage } from "vee-validate";
// import * as yup from "yup";

import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["onSubmit, onCancel"]);

const currencyOptions = ["USDT", "BTC", "ETH"];

const filteredCurrencyOptions = ref(currencyOptions);

const schema = yup.object({
  currency: yup.string().required().label("Что купил"),
  buy_where: yup.string().required().label("Где купил"),
  buy_price: yup.number().min(1).required().label("Цена покупки"),
  buy_amount: yup.number().min(1).required().label("Кол-во"),
  sell_price: yup.number().min(1).required().label("Цена продажи"),
  sell_amount: yup.number().min(1).required().label("Ко-во продано"),
});

const { defineComponentBinds, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
  // initialValues: {
  //   terms: false,
  // },
});

const quasarConfig = (state) => ({
  props: {
    error: !!state.errors[0],
    "error-message": state.errors[0],
  },
});

const currency = defineComponentBinds("currency", quasarConfig);
const buy_where = defineComponentBinds("buy_where", quasarConfig);
const buy_price = defineComponentBinds("buy_price", quasarConfig);
const buy_amount = defineComponentBinds("buy_amount", quasarConfig);
const sell_price = defineComponentBinds("sell_price", quasarConfig);
const sell_amount = defineComponentBinds("sell_amount", quasarConfig);

const createNewCurrencyOption = (val, done) => {
  if (val.length > 0) {
    if (!currencyOptions.includes(val)) {
      currencyOptions.push(val);
    }
    done(val, "toggle");
  }
};

const filterCurrencyOptionsFn = (val, update) => {
  update(() => {
    if (val === "") {
      filteredCurrencyOptions.value = currencyOptions;
    } else {
      const needle = val.toLowerCase();
      filteredCurrencyOptions.value = currencyOptions.filter(
        (v) => v.toLowerCase().indexOf(needle) > -1
      );
    }
  });
};

const onSubmit = handleSubmit((values) => {
  emit("onSubmit", values);

  // console.log("Submitted with", values);
});

// const schema = yup.object({
//   currency: yup.string().required(),
//   buy_where: yup.string().required(),
//   buy_price: yup.number().required(),
//   // password: yup.string().required().min(8),
// });

// const submit = (e) => {
//   emit("onSubmit", e);
// };
</script>

<style lang="scss" scoped></style>
