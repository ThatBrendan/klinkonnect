<template>
  <div class="navbar">
    <nav class="headerNav">
      <router-link :to="{ name: 'home' }">
        <p class="title">KlinKonnect</p>
      </router-link>

      <ul class="navLinks hide-mobile">
        <li>Cleaners</li>
        <li>Join Us</li>
        <li>About</li>
      </ul>

      <ul class="signUpLinks">
        <li>Log in</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<script setup lang="ts"></script>

<style scoped>
nav.headerNav {
  display: flex;
  width: 100%;
  justify-content: space-around;
  background: var(--blue);
  padding: 20px 0;
  align-items: center;
}
ul {
  list-style-type: none;
  color: white;
  padding: 0;
  margin: 0;
  display: flex;
}
li {
  margin-right: 15px;
  cursor: pointer;
}
p.title {
  font-size: 22px;
  text-decoration: overline;
  color: white;
  padding: 0 !important;
  margin: 0 !important;
  cursor: pointer;
}
</style>
