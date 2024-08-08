<script setup>
import { defineProps } from "vue";
import vueLogo from "@/assets/logo/vue-vuejs-javascript-js-framework-svgrepo-com.svg";

//Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="text-center">
    <img :src="vueLogo" alt="Vue logo" class="h-32 mx-auto" />
    <h2 class="custom-header-styles">
      {{ props.title }}
    </h2>
    <p class="custom-paragraph-styles mt-2">{{ props.description }}</p>
  </header>
</template>
