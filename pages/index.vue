<script setup lang="ts">
import { useCounterStore } from "@/store";

const counter = useCounterStore();
counter.count++;
counter.$patch({ count: counter.count + 1 });
counter.increment();
</script>

<template>
  <div>Index page: {{ counter.count }}</div>
</template>
