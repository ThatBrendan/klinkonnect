<template>
  <p class="boldFont no-margin">
    {{ locationStore.selectedCity }}
    <span class="text-underline pointer" @click="locationStore.toggleModal"> Change City </span>
  </p>

  <h2 class="h4">Book your professional cleaning services now</h2>

  <div class="form">
    <form @submit.prevent="submitForm">
      <select class="service-select" v-model="selectedService" required>
        <option value="" disabled>Select a Service</option>
        <option v-for="service in services" :value="service" :key="service">
          {{ service }}
        </option>
      </select>
      <input type="date" placeholder="Select Date" class="select-date" />
      <input type="time" placeholder="Select Time" class="select-time" />
    </form>
    <div class="submit-button">
      <button class="blackButton" @click="submitForm">Search</button>
    </div>
  </div>

  <LocationModal />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useLocationStore } from '@/stores/locationStore'
import LocationModal from '../LocationModal.vue'

const locationStore = useLocationStore()

const services = ['Home Cleaning', 'Office Cleaning', 'Carpet Cleaning', 'Window Cleaning']

const selectedService = ref('')

watch(
  () => locationStore.selectedCity,
  () => {
    // Reset form when city changes
    selectedService.value = ''
  },
)

function submitForm() {
  if (!selectedService.value) {
    alert('Please select a service.')
    return
  }

  locationStore.setService(selectedService.value)
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.service-select {
  margin-bottom: 10px;
  width: 50%;
}
.select-date,
.select-time {
  width: 70%;
}
.select-time {
  margin-bottom: 40px;
}
.submit-button {
  margin-bottom: 10px;
}
</style>
