<template>
  <q-drawer
    show-if-above
    :mini="menu"
    @click.capture="handleMenu"
    :width="250"
    :breakpoint="0"
    bordered
    mini-to-overlay
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding>
        <q-item v-for="link in linksList" :to="link.link" clickable v-ripple>
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>{{ link.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
    <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
      <q-btn
        dense
        round
        unelevated
        color="accent"
        icon="chevron_left"
        @click="menu = true"
      />
    </div>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["linksList"]);

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
</script>
