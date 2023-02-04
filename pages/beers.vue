<script setup>
const { pending, data: beers } = useLazyFetch("https://beerbeerbeer.deno.dev");
watch(beers, (newBeers) => {
  // Because beers starts out null, you will not have access
  // to its contents immediately, but you can watch it.
});
</script>

<template>
  <div class="loader" v-if="pending">Loading ...</div>
  <div v-else>
    <div v-for="beer in beers">
      {{ beer.name }}
    </div>
  </div>
</template>
