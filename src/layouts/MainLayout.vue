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
import { DrawerMenu } from "shared/ui/DrawerMenu";

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
