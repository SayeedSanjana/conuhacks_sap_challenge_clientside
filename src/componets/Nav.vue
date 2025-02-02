<template>
  <nav class="bg-white shadow-lg p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold text-gray-800">Wildfire Response and Prediction</div>

      <!-- Navigation Links -->
      <div class="flex space-x-6">
        <RouterLink
          to="/"
          class="text-gray-600 hover:text-gray-900 font-medium transition duration-300"
        >
          Optimization
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-gray-600 hover:text-gray-900 font-medium transition duration-300"
        >
          Prediction
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
