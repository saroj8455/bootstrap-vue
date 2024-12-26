<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="container">
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <div class="d-flex gap-2">
        <RouterLink class="btn btn-primary" to="/">Go to Home</RouterLink>
        <RouterLink class="btn btn-secondary" to="/about">Go to About</RouterLink>
        <RouterLink class="btn btn-secondary" to="/users">Go to Users</RouterLink>
      </div>

    </nav>
  </div>
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>

</template>
