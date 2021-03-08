<template>
  <div class="search">
    <v-label class="search__label" value="Search by" />
    <v-select
      class="search__select"
      :options="options"
      name="rick-and-morty-filters"
      placeholder="Choose filter"
      @select-value-changed="changeQueryType"
    />
    <v-input
      class="search__input"
      v-model="filterValue"
      :icon-id="searchIcon"
      @click="searchCharacters"
    />
  </div>
</template>

<script lang="ts">
import VLabel from "@/components/atoms/label/VLabel.vue";
import VSelect from "@/components/atoms/select/VSelect.vue";
import VInput from "@/components/atoms/input/VInput.vue";
import { PropType, ref } from "vue";
import { IconId } from "@/common/IconsDefinitions/IconId";
import { SetupContext } from "@vue/runtime-core";
import gql from "graphql-tag";
import { provideApolloClient, useQuery, useResult } from "@vue/apollo-composable";
import { defaultApolloClient } from "@/main";
import { SearchProps } from "@/components/molecules/Search/interfaces/SearchProps";

export default {
  name: "Search",
  components: { VInput, VSelect, VLabel },
  props: {
    options: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  emits: ["search-result"],
  setup(_props: SearchProps, context: SetupContext) {
    const searchIcon = IconId.SEARCH;
    let searchType = "Name";
    const changeQueryType = (newType: string) => searchType = newType;
    const filterValue = ref<string>("");
    const searchCharacters = () => {
      provideApolloClient(defaultApolloClient);
      const { result } = useQuery(gql`
        query {
          characters(filter: { ${searchType.toLowerCase()}: "${filterValue.value}" }) {
            info {
                count
            }
            results {
                id,
                image,
                name,
                gender,
                species,
                episode {
                    episode
                }
            }
          }
        }`);
      const filteredCharacters = useResult(
        result,
        "Couldn't fetch data about all characters",
        data => data.characters
      ).value.results;
      context.emit("search-result", filteredCharacters);
    };
    return {
      filterValue,
      searchIcon,
      changeQueryType,
      searchCharacters
    };
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  border: 1px #a9b1bd solid;
  border-radius: 12px;

  &__label,
  &__select,
  &__imput {
    height: inherit;
  }

  &__label,
  &__select {
    flex: 1 25%;
  }

  &__input {
    flex: 2 50%;
  }
}
</style>
