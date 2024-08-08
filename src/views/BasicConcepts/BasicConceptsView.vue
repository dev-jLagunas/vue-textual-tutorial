<script setup>
import { ref } from "vue";

const subcategories = ref([
  {
    id: 1,
    title: "Template Syntax",
    link: { name: "TemplateSyntax" },
  },
  {
    id: 2,
    title: "Data Binding",
    link: { name: "DataBinding" },
  },
]);
</script>
<template>
  <h3>Basic Concepts</h3>
  <ul>
    <li v-for="subcategory in subcategories" :key="subcategory.id">
      <router-link :to="subcategory.link">{{ subcategory.title }}</router-link>
    </li>
  </ul>
</template>
