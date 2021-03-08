import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client/core";
import { createApp, provide, h } from "vue";
import App from "./App.vue";
import { CONSTANTS } from "@/common/CONSTANTS";
import { DefaultApolloClient } from "@vue/apollo-composable";

const httpLink = createHttpLink({
  uri: CONSTANTS.RICK_AND_MORTY_API_URI
});
const cache = new InMemoryCache();
export const defaultApolloClient = new ApolloClient({
  link: httpLink,
  cache
});

createApp({
  setup() {
    provide(DefaultApolloClient, defaultApolloClient);
  },
  render() {
    return h(App);
  }
}).mount("#app");
