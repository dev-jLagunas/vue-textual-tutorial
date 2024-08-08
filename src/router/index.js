import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const GettingStartedView = () =>
  import("@/views/GettingStarted/GettingStartedView.vue");
const BasicConceptsView = () =>
  import("@/views/BasicConcepts/BasicConceptsView.vue");
const ReactivitySystemView = () =>
  import("@/views/ReactivitySystem/ReactivitySystemView.vue");
const ComponentsInfoView = () =>
  import("@/views/ComponentsInfo/ComponentsInfoView.vue");
const TemplateSyntax = () =>
  import("@/components/BasicConceptsSubComponents/TemplateSyntax.vue");
const DataBinding = () =>
  import("@/components/BasicConceptsSubComponents/DataBinding.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/getting-started",
      name: "GettingStarted",
      component: GettingStartedView,
    },
    {
      path: "/basic-concepts",
      name: "BasicConcepts",
      component: BasicConceptsView,
    },
    {
      path: "/basic-concepts/template-syntax",
      name: "TemplateSyntax",
      component: TemplateSyntax,
    },
    {
      path: "/basic-concepts/data-binding",
      name: "DataBinding",
      component: DataBinding,
    },
    {
      path: "/reactivity-system",
      name: "ReactivitySystem",
      component: ReactivitySystemView,
    },
    {
      path: "/components-info",
      name: "ComponentsInfo",
      component: ComponentsInfoView,
    },
  ],
});

export default router;
