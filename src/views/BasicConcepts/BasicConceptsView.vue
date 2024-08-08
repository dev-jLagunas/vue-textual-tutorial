<script setup>
import { ref } from "vue";
import ConceptsHeader from "@/components/SharedComponents/ConceptsHeader.vue";

const subcategories = ref([
  {
    id: 1,
    title: "Template Syntax",
    link: { name: "TemplateSyntax" },
    textColorClass: "text-blue-500",
  },
  {
    id: 2,
    title: "Data Binding",
    link: { name: "DataBinding" },
    textColorClass: "text-orange-500",
  },
]);
</script>
<template>
  <div>
    <section>
      <ConceptsHeader
        title="Basic Concepts"
        description="Here you can learn more about the very basics of Vue such as template syntax, data binding, and control flow."
      />
    </section>
    <ul class="custom-list-styles mt-4">
      <li
        v-for="subcategory in subcategories"
        :key="subcategory.id"
        class="font-semibold"
      >
        <i
          :class="['fa-solid fa-angles-right pr-2', subcategory.textColorClass]"
        ></i>
        <router-link :to="subcategory.link">{{
          subcategory.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
