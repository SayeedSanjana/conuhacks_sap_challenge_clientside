<template>
  <div id="">
    <!-- Render the active route's component -->
    <nav>
      <Nav></Nav>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import Nav from '@/componets/Nav.vue'
</script>

<style scoped></style>
