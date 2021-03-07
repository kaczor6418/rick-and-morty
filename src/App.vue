<template>
  <search />
  <hr />
  <table-view :header-titles="headings" :characters="allCharacters" />
</template>

<script lang="ts">
import { IconId } from "@/common/IconsDefinitions/IconId";
import { IconProps } from "@/components/atoms/icon/interfaces/IconProps";
import { LabelProps } from "@/components/atoms/label/interfaces/LabelProps";
import Search from "@/components/molecules/Search/Search.vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import allCharactersQuery from "./graphql/allCharacters.query.gql";
import TableView from "@/components/organisms/tableView/TableView.vue";

export default {
  components: {
    TableView,
    Search
  },
  setup() {
    const iconProps: IconProps = {
      iconId: IconId.MALE
    };
    const labelProps: LabelProps = {
      value: "Male"
    };
    const { result } = useQuery(allCharactersQuery);
    const allCharacters = useResult(
      result,
      "Couldn't fetch data about all characters",
      data => data.characters
    ).value.results;
    const headings = ["Photo", "Character ID", "Name", "Gender", "Species", "Last Episode", "Add To Favourites"];
    return {
      iconProps,
      labelProps,
      allCharacters,
      headings
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
