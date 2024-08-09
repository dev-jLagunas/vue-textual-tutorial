<script setup>
import ConceptsHeader from "@/components/SharedComponents/ConceptsHeader.vue";

// Props Data
const title = "Directives Information";
const description =
  "Here you can find information on working with directives in Vue.";
</script>

<template>
  <div>
    <section>
      <ConceptsHeader :title="title" :description="description" />
    </section>
  </div>
</template>
