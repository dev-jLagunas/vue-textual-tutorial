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
    <p class="custom-paragraph-styles mt-2">
      {{ props.description }}
    </p>
    <p class="text-slate-800 mx-auto p-2 rounded-md text-sm my-2 bg-slate-100">
      <i class="fa-solid fa-circle-exclamation text-red-500 pr-2"></i>The
      closing <code>&lt;/script&gt;</code> tag inside the code examples is
      represented without the forward slash to avoid parsing issues. Ensure to
      replace it correctly when using the code. I will troubleshoot this
      later!<i class="fa-solid fa-circle-exclamation text-red-500 pl-2"></i>
    </p>
  </header>
</template>
