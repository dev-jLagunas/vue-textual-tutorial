<script setup>
import ConceptsHeader from "@/components/SharedComponents/ConceptsHeader.vue";
//Props Data
const title = "Reactivity System";
const description =
  "Here we will go in depth about the reactivity system Vue implements.";
</script>

<template>
  <div>
    <section>
      <ConceptsHeader :title="title" :description="description" />
    </section>
  </div>
</template>
