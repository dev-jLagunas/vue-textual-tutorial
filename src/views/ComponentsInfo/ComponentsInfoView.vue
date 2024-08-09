<script setup>
import ConceptsHeader from "@/components/SharedComponents/ConceptsHeader.vue";

// Props Data
const title = "Component Information";
const description =
  "Here we will cover registering components, component communication, and other concepts related to Vue components.";
</script>

<template>
  <div>
    <section>
      <ConceptsHeader :title="title" :description="description" />
    </section>
  </div>
</template>
