<template>
  <search
    :options="selectOptions"
    @search-type-changed="updateQueryType"
    @search-result="updateCharactersToDisplay"
  />
  <hr />
  <table-view :header-titles="headings" :characters="allCharacters" />
</template>

<script lang="ts">
import Search from "@/components/molecules/Search/Search.vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import allCharactersQuery from "./graphql/allCharacters.query.gql";
import TableView from "@/components/organisms/tableView/TableView.vue";
import { ref } from "vue";
import { RickAndMortyCharacter } from "@/common/interfaces/RickAndMortyCharacter";

export default {
  components: {
    TableView,
    Search
  },
  setup() {
    const { result } = useQuery(allCharactersQuery);
    const allCharacters = ref(
      useResult(
        result,
        "Couldn't fetch data about all characters",
        data => data.characters
      ).value.results
    );
    const headings = [
      "Photo",
      "Character ID",
      "Name",
      "Gender",
      "Species",
      "Last Episode"
    ];
    const selectOptions = ["Name", "Species", "Gender"];
    const updateQueryType = (newType: string) => console.log(newType);
    const updateCharactersToDisplay = (
      filteredCharacters: RickAndMortyCharacter[]
    ) => (allCharacters.value = filteredCharacters);
    return {
      allCharacters,
      headings,
      selectOptions,
      updateQueryType,
      updateCharactersToDisplay
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a9b1bd;
  margin-top: 60px;
}

*,
::after,
::before {
  box-sizing: border-box;
}
</style>
