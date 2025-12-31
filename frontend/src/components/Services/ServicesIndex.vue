<template>
  <h2 class="h4">Services Provided</h2>

  <div class="services-grid">
    <div class="service-box" v-for="service in services" :key="service.name">
      <p class="large">{{ service.name }}</p>
      <p class="small">{{ service.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const services = [
  {
    name: 'Home Cleaning',
    description: 'Professional home cleaning services to keep your living space spotless.',
  },
  {
    name: 'Office Cleaning',
    description: 'Reliable office cleaning solutions for a productive work environment.',
  },
  {
    name: 'Carpet Cleaning',
    description: 'Deep carpet cleaning to remove dirt, stains, and allergens.',
  },
  { name: 'Window Cleaning', description: 'Crystal clear window cleaning for a brighter view.' },
]
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.service-box {
  border: 1px solid var(--grey);
  padding: 10px;
  border-radius: 10px;
  background-color: var(--lightgrey);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 50% 50%;
    gap: 5px;
  }
}
</style>
