<script setup lang="ts">
import { useCounterStore } from "@/store/use-counter-store";
const counterStore = useCounterStore();
</script>

<template>
  <div>About page: {{ counterStore.$state.count }}</div>
</template>
