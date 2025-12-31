<template>
  <div v-if="store.isLocationModalOpen" class="modal-overlay">
    <div class="modal">
      <h3>Select Your City</h3>

      <select v-model="selectedCity" class="modal-select">
        <option v-for="city in store.locations" :key="city" :value="city">
          {{ city }}
        </option>
      </select>

      <div class="modal-actions">
        <button class="blackButton" @click="confirm">Confirm</button>
        <button class="blackButton" @click="store.toggleModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useLocationStore } from '@/stores/locationStore'

const store = useLocationStore()
const selectedCity = ref(store.selectedCity)

watch(
  () => store.selectedCity,
  (newCity) => {
    selectedCity.value = newCity
  },
)

watch(
  () => store.isLocationModalOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

function confirm() {
  store.setCity(selectedCity.value)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  width: 100%;
  max-width: 420px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  animation: modalFadeIn 0.2s ease-out;
}

.modal h3 {
  margin-bottom: 16px;
  font-size: 1.25rem;
  font-weight: 600;
}

.modal-select {
  width: 100%;
  padding: 12px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.modal-select:focus {
  outline: none;
  border-color: #000;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Secondary button */
.secondaryButton {
  background: transparent;
  border: 1px solid #ccc;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.secondaryButton:hover {
  background: #f5f5f5;
}

/* Entry animation */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
