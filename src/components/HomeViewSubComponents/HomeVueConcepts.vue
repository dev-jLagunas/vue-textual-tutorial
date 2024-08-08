<script setup>
import { ref } from "vue";

const vueConceptsList = ref([
  {
    id: 1,
    title: "Getting Started",
    description:
      "Introduction to Vue, setting up the development environment, and creating a Vue project with the Vue CLI.",
    textColorClass: "text-blue-500",
    link: "/getting-started",
  },
  {
    id: 2,
    title: "Basic Concepts",
    description:
      "Covers the basics like template syntax, data binding, conditional rendering, list rendering, and event handling.",
    textColorClass: "text-green-500",
    link: "/basic-concepts",
  },
  {
    id: 3,
    title: "Reactivity System",
    description:
      "Learn about data properties, methods, computed properties, and watchers.",
    textColorClass: "text-red-500",
    link: "/reactivity-system",
  },
  {
    id: 4,
    title: "Components",
    description:
      "Creating and registering components, parent-child communication, and using slots.",
    textColorClass: "text-yellow-500",
    link: "/components-info",
  },
  {
    id: 5,
    title: "Composition API",
    description:
      "Introduction to the Composition API, including the setup function, reactive variables, computed properties, and lifecycle hooks.",
    textColorClass: "text-purple-500",
    link: "/composition-api",
  },
  {
    id: 6,
    title: "Forms and Input Handling",
    description:
      "Handling user input, form input bindings, and validation techniques.",
    textColorClass: "text-indigo-500",
    link: "/forms-and-input",
  },
  {
    id: 7,
    title: "State Management",
    description:
      "Overview of state management in Vue, including simple state management and using the Composition API.",
    textColorClass: "text-pink-500",
    link: "/state-management",
  },
  {
    id: 8,
    title: "Routing",
    description:
      "Basics of Vue Router, defining routes, navigating between routes, and using nested routes.",
    textColorClass: "text-teal-500",
    link: "/routing",
  },
  {
    id: 9,
    title: "HTTP Requests",
    description:
      "Using Axios or Fetch API to make HTTP requests and handle responses and errors.",
    textColorClass: "text-gray-500",
    link: "/http-requests",
  },
  {
    id: 10,
    title: "Directives",
    description:
      "Overview of built-in directives and creating custom directives.",
    textColorClass: "text-orange-500",
    link: "/directives",
  },
  {
    id: 11,
    title: "Transitions and Animations",
    description:
      "Basics of Vue transitions, element transitions, and animating state changes.",
    textColorClass: "text-cyan-500",
    link: "/transitions-animations",
  },
  {
    id: 12,
    title: "Plugins",
    description: "Using Vue plugins and creating custom plugins.",
    textColorClass: "text-lime-500",
    link: "/plugins",
  },
  {
    id: 13,
    title: "Testing",
    description:
      "Unit testing components, testing with Vue Test Utils, and end-to-end testing with Cypress.",
    textColorClass: "text-emerald-500",
    link: "/testing",
  },
  {
    id: 14,
    title: "Deployment",
    description: "Building for production and deploying Vue apps.",
    textColorClass: "text-fuchsia-500",
    link: "/deployment",
  },
  {
    id: 15,
    title: "Best Practices",
    description:
      "Code organization, performance optimization, and security considerations.",
    textColorClass: "text-rose-500",
    link: "/best-practices",
  },
  {
    id: 16,
    title: "Examples",
    description:
      "Practical examples like a todo app, weather app, real-time chat app, and e-commerce product list.",
    textColorClass: "text-violet-500",
    link: "/examples",
  },
]);
</script>

<template>
  <div>
    <h1 class="custom-subheading-styles my-4">Vue Concepts</h1>
    <ul class="flex flex-col gap-3">
      <li v-for="concept in vueConceptsList" :key="concept.id" class="">
        <h2 class="font-semibold">
          <router-link :to="concept.link">
            <i
              :class="['fa-solid fa-angles-right pr-2', concept.textColorClass]"
            ></i
            >{{ concept.title }}
          </router-link>
        </h2>
        <p class="custom-paragraph-styles">{{ concept.description }}</p>
      </li>
    </ul>
  </div>
</template>
