import { defineStore } from 'pinia'
import cleaners from '@/data/cleaners.json'

export const useLocationStore = defineStore('location', {
  state: () => ({
    selectedCity: 'Manchester, GB',
    selectedService: '' as string,
    isLocationModalOpen: false,
    cleaners,
  }),

  getters: {
    locations: (state) => {
      return [...new Set(state.cleaners.map((c) => c.location))]
    },

    filteredCleaners: (state) => {
      return state.cleaners.filter((cleaner) => {
        const cityMatch = cleaner.location === state.selectedCity
        const serviceMatch =
          !state.selectedService || cleaner.services.includes(state.selectedService)

        return cityMatch && serviceMatch
      })
    },
  },

  actions: {
    setCity(city: string) {
      this.selectedCity = city

      // RESET booking-related filters
      this.selectedService = ''

      // Close modal
      this.isLocationModalOpen = false
    },

    setService(service: string) {
      this.selectedService = service
    },

    toggleModal() {
      this.isLocationModalOpen = !this.isLocationModalOpen
    },
  },
})
