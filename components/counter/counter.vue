<script setup lang="ts">
import { useCounterStore } from "@/store/use-counter-store";
const counterStore = useCounterStore();
</script>
<template>
  <button @click="counterStore.increment">+</button>
  <button @click="counterStore.decrement">-</button>
  <button @click="counterStore.reset">Reset</button>
</template>
