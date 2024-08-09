<script setup>
import VCodeBlock from "@wdns/vue-code-block";
import { defineProps } from "vue";

//Props
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <VCodeBlock
    :code="code"
    highlightjs
    label="Example Code"
    theme="an-old-hope"
  />
</template>
