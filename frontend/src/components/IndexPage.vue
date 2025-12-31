<template>
  <section class="row no-gutter">
    <div class="col-lg-6 form-section">
      <BookingForm />
    </div>
    <div class="col-lg-6">
      <BookingImage />
    </div>
  </section>
  <section class="cleaners-in-your-area">
    <CleanersIndex />
  </section>
  <section class="services-section">
    <ServicesIndex />
  </section>
</template>

<script lang="ts" setup>
import BookingForm from './HomeBooking/BookingForm.vue'
import BookingImage from './HomeBooking/BookingImage.vue'
import ServicesIndex from './Services/ServicesIndex.vue'
import CleanersIndex from './CleanersInArea/CleanersIndex.vue'
</script>

<style scoped>
@media (min-width: 768px) {
  section {
    margin: 20px 35px;
  }
  .form-section {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  section {
    margin: 20px 10px;
  }
}
</style>
