<template>
  <img src="/home-image.jpg" alt="" />
</template>

<style scoped>
img {
  height: 550px;
  display: block;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  img {
    height: 300px;
  }
}
</style>
