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
const CompositionApiView = () =>
  import("@/views/CompositionAPI/CompositionApiView.vue");
const FormsInputView = () => import("@/views/FormsAndInput/FormsInputView.vue");
const StateManagementView = () =>
  import("@/views/StateManagement/StateManagementView.vue");
const RoutingView = () => import("@/views/Routing/RoutingView.vue");
const HttpRequestsView = () =>
  import("@/views/HttpRequests/HttpRequestsView.vue");
const DirectivesView = () => import("@/views/Directives/DirectivesView.vue");
const TransitionsAnimationsView = () =>
  import("@/views/TransitionsAnimations/TransitionsAnimationsView.vue");
const PluginsView = () => import("@/views/Plugins/PluginsView.vue");
const TestingView = () => import("@/views/Testing/TestingView.vue");
const DeploymentView = () => import("@/views/Deployment/DeploymentView.vue");
const BestPracticesView = () =>
  import("@/views/BestPractices/BestPracticesView.vue");
const ExamplesView = () => import("@/views/Examples/ExamplesView.vue");

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
    {
      path: "/composition-api",
      name: "CompositionApi",
      component: CompositionApiView,
    },
    {
      path: "/forms-and-input",
      name: "FormsAndInput",
      component: FormsInputView,
    },
    {
      path: "/forms-and-input",
      name: "FormsAndInput",
      component: FormsInputView,
    },
    {
      path: "/state-management",
      name: "StateManagement",
      component: StateManagementView,
    },
    {
      path: "/routing",
      name: "Routing",
      component: RoutingView,
    },
    {
      path: "/http-requests",
      name: "HttpRequests",
      component: HttpRequestsView,
    },
    {
      path: "/directives",
      name: "Directives",
      component: DirectivesView,
    },
    {
      path: "/transitions-animations",
      name: "TransitionsAnimations",
      component: TransitionsAnimationsView,
    },
    {
      path: "/plugins",
      name: "Plugins",
      component: PluginsView,
    },
    {
      path: "/testing",
      name: "Testing",
      component: TestingView,
    },
    {
      path: "/deployment",
      name: "Deployment",
      component: DeploymentView,
    },
    {
      path: "/best-practices",
      name: "BestPractices",
      component: BestPracticesView,
    },
    {
      path: "/examples",
      name: "Examples",
      component: ExamplesView,
    },
  ],
});

export default router;
