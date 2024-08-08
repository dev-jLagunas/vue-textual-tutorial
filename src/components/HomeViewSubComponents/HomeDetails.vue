<script setup>
import { ref } from "vue";

//Refs
const activeIndex = ref(null);

//Questions
const questions = [
  {
    question: "What should you know about me?",
    answer: `I am NOT a professional developer just yet. I am an aspiring frontend developer. I have been teaching myself
    for the last 20 months. Nonetheless, I have found a deep passion for programming so I loved every second of making this!`,
  },
  {
    question: "What is the purpose of this project?",
    answer: `I told myself I would start applying to jobs at 24 months into my journey. This means that I am getting closer and closer
    to those dreaded job interviews. As I was going through the Vue documentation I realized that I would very often forget concepts that I already
    knew. I feel this was because the writing style was rather technical and also that there were just not enough examples. I also thought to myself
    that it would be a great idea to create a textual tutorial for myself and for any others that learn through examples. I am also creating this project as a quick reference
    to Vue for my future job interviews, as a way to show prospective employers I am willing to put it the work to grow as a developer, and lastly as a way to contribute back
    to the developer community.
    `,
  },
  {
    question: "What can I expect from this project?",
    answer: `This textual tutorial will be filled with simple, easy to understand explanations of all the must know Vue topics followed by step by step examples of how to use those concepts.
    You will also find links to other resources that I found useful in my research. The majority of this tutorial will be written using the official Vue documentation as reference. It is
    also important to mentioned that this tutorial will be first and foremost focused on the pratical usage of Vue. Thus, less commonly used features will also be covered, but not until the
    end of the tutorial in a more advanced concepts section. I will make note of this in each section so users are aware. `,
  },
  {
    question: "What versions/API of Vue are covered?",
    answer: `The majority of this tutorial focuses on Vue 3, specifically using the Composition API. 
    I will be using the <script setup> syntax extensively to demonstrate how to build components and manage state. 
    Since I started learning Vue about a year ago, the content is up-to-date with the latest features and best practices in Vue 3. 
    I also encourage you to research the differences between the Options API and the Composition API, 
    particularly how the Composition API can be used without the <script setup> syntax. I feel that the Composition API
    used with the <script setup> syntax simplifies your code by reducing boilerplate and making it more readable and maintanable which is why I will stick with that throughout this tutorial.`,
  },
  {
    question: "Anything else I should know?",
    answer: `I think it is important to make clear that I am by no means a master at this craft. I am just another person learning this one step at a time. This means that even though I
    will be using the official Vue documentation as reference, I may still make mistakes. Which is why I highly encourage you to always double check if you feel something may be incorrect.
    Nonetheless, because I want to master this craft I made sure to do my best to be as accurate as possible. Thank you! I truly hope at least one person finds this useful.`,
  },
];

//Methods
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div>
    <h2 class="custom-subheading-styles mb-2">About Project</h2>
    <section v-for="(question, index) in questions" :key="index" class="">
      <article @click="toggle(index)" class="text-sm mb-1 flex justify-between">
        {{ question.question }}<i class="fa-solid fa-caret-down"></i>
      </article>
      <article
        v-if="activeIndex === index"
        class="text-sm mb-2 pb-2 border-b border-b-slate-600 text-slate-200 indent-4"
      >
        {{ question.answer }}
      </article>
    </section>
  </div>
</template>

<style scoped></style>
