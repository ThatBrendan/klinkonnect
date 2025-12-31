<template>
  <h2 class="h4">
    Cleaners in {{ locationStore.selectedCity }}
    <span v-if="locationStore.selectedService"> for {{ locationStore.selectedService }} </span>
  </h2>

  <div v-if="cleaners.length" class="cleaner-container">
    <div v-for="cleaner in cleaners" :key="cleaner.id" class="cleaner-card">
      <p class="large">{{ cleaner.name }}</p>
      <p>Services: {{ cleaner.services.join(', ') }}</p>
      <p>Rating: {{ cleaner.rating }}</p>
    </div>
  </div>

  <p v-else>No cleaners available for this service in this location.</p>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocationStore } from '@/stores/locationStore'

const locationStore = useLocationStore()

const cleaners = computed(() => locationStore.filteredCleaners)
</script>

<style scoped>
.cleaner-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
.cleaner-card {
  border: 1px solid var(--grey);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: var(--lightgrey);
}
</style>
