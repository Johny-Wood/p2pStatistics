
<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Калькулятор Спреда"
      :rows="data"
      :columns="headers"
      separator="cell"
      row-key="id"
    >
      <!-- <template v-slot:top> -->
      <!-- <p class="text-h5">Калькулятор Спреда</p> -->
      <!-- <q-space /> -->
      <!-- <slot name="actions"></slot> -->

      <!-- <q-btn color="primary" label="Add row" /> -->
      <!-- <q-btn class="q-ml-sm" color="primary" label="Remove row" /> -->
      <!-- <q-input -->
      <!--   borderless -->
      <!--   dense -->
      <!--   debounce="300" -->
      <!--   color="primary" -->
      <!--   v-model="filter" -->
      <!-- > -->
      <!--   <template v-slot:append> -->
      <!--     <q-icon name="search" /> -->
      <!--   </template> -->
      <!-- </q-input> -->
      <!-- </template> -->

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width key="btn">
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>

          <q-td key="currency" :props="props">
            {{ props.row.currency }}
            <q-popup-edit v-model="props.row.currency" auto-save v-slot="scope">
              <q-select
                label="Что купил"
                v-model="scope.value"
                use-input
                input-debounce="0"
                @new-value="createNewCurrencyOption"
                :options="filteredCurrencyOptions"
                @filter="filterCurrencyOptionsFn"
                @keyup.enter="scope.set"
              ></q-select>

              <!-- <q-input -->
              <!--   v-model="scope.value" -->
              <!--   dense -->
              <!--   autofocus -->
              <!--   @keyup.enter="scope.set" -->
              <!-- /> -->
            </q-popup-edit>
          </q-td>

          <q-td key="buy_where" :props="props">
            {{ props.row.buy_where }}
            <q-popup-edit
              v-model="props.row.buy_where"
              auto-save
              v-slot="scope"
            >
              <q-input
                type="string"
                v-model="scope.value"
                dense
                autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="buy_price" :props="props">
            {{ props.row.buy_price }}
            <q-popup-edit
              v-model.number="props.row.buy_price"
              auto-save
              v-slot="scope"
            >
              <q-input
                type="number"
                v-model="scope.value"
                dense
                autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="buy_amount" :props="props">
            {{ props.row.buy_amount }}
            <q-popup-edit
              v-model.number="props.row.buy_amount"
              auto-save
              v-slot="scope"
            >
              <q-input
                type="number"
                v-model="scope.value"
                dense
                autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="sell_price" :props="props">
            {{ props.row.sell_price }}
            <q-popup-edit
              v-model.number="props.row.sell_price"
              auto-save
              v-slot="scope"
            >
              <q-input
                type="number"
                v-model="scope.value"
                dense
                autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="sell_amount" :props="props">
            {{ props.row.sell_amount }}
            <q-popup-edit
              v-model.number="props.row.sell_amount"
              auto-save
              v-slot="scope"
            >
              <q-input
                type="number"
                v-model="scope.value"
                dense
                autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>

          <!-- <q-td key="currency"> -->
          <!-- <q-popup-edit v-model="col.name" auto-save v-slot="scope"> -->
          <!-- <q-input /> -->
          <!-- </q-popup-edit> -->
          <!-- </q-td> -->
          <!-- <q-td key="buy_where"> hi2 </q-td> -->

          <!-- <q-td v-for="col in props.cols" :key="col.name" :props="props"> -->
          <!--            {{ col.value }} -->
          <!-- <q-popup-edit v-model="col.name" auto-save v-slot="scope"> -->
          <!-- <q-input dense autofocus /> -->
          <!-- </q-popup-edit> -->
          <!-- </q-td> -->
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div
              class="text-left"
              v-for="(spread, index) in props.row.spread"
              :key="index"
            >
              Конвертация__{{ index + 1 }}: {{ spread?.result }}.
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["data", "headers"]);

const currencyOptions = ["USDT", "BTC", "ETH"];

const filteredCurrencyOptions = ref(currencyOptions);

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
</script>
