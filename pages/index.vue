<script setup lang="ts">
import { useCounterStore } from "@/store/use-counter-store";
const counterStore = useCounterStore();
</script>

<template>
  <div>Index page: {{ counterStore.$state.count }}</div>
</template>
