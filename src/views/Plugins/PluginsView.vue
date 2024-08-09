<script setup>
import ConceptsHeader from "@/components/SharedComponents/ConceptsHeader.vue";

// Props Data
const title = "Plugins Information";
const description = "Here we will go over useful Vue plugins";
</script>

<template>
  <div>
    <section>
      <ConceptsHeader :title="title" :description="description" />
    </section>
  </div>
</template>
