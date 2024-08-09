<script setup>
import ConceptsHeader from "@/components/SharedComponents/ConceptsHeader.vue";
import CodeHighlighter from "@/components/SharedComponents/CodeHighlighter.vue";

// Props Data
const title = "Getting Started";
const description = "Here we will cover how to get started using Vue.";

// Code Sample Data
</script>

<template>
  <div>
    <section>
      <ConceptsHeader :title="title" :description="description" />
    </section>
  </div>
</template>
