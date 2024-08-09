<script setup>
import ConceptsHeader from "@/components/SharedComponents/ConceptsHeader.vue";

// Props Data
const title = "Deployment Information";
const description =
  "Here you can find information on how to deploy Vue projects.";
</script>

<template>
  <div>
    <section>
      <ConceptsHeader :title="title" :description="description" />
    </section>
  </div>
</template>
