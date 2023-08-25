<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <DrawerMenu :linksList="linksList" />

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { DrawerMenu } from "../shared/ui/DrawerMenu";

const menu = ref(true);

// const drawer = ref(false);

const handleMenu = (e) => {
  if (menu.value) {
    menu.value = false;

    // notice we have registered an event with capture flag;
    // we need to stop further propagation as this click is
    // intended for switching drawer to "normal" mode only
    e.stopPropagation();
  }
};

const linksList = [
  {
    title: "Калькулятор",
    caption: "quasar.dev",
    icon: "calculate",
    link: "calculator",
  },
  {
    title: "Конструктор формул",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "constructor",
  },
  {
    title: "История сделок",
    caption: "chat.quasar.dev",
    icon: "analytics",
    link: "/history",
  },
  {
    title: "Команда",
    caption: "forum.quasar.dev",
    icon: "group",
    link: "/team",
  },
];
</script>
