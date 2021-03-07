<template>
  <div class="search">
    <v-label class="search__label" value="Search by" />
    <v-select
      class="search__select"
      :options="selectOptions"
      :selected="selectedValue"
      name="rick-and-morty-filters"
      placeholder="Choose filter"
    />
    <v-input
      class="search__input"
      v-model="filterValue"
      :icon-id="searchIcon"
    />
  </div>
</template>

<script lang="ts">
import VLabel from "@/components/atoms/label/VLabel.vue";
import VSelect from "@/components/atoms/select/VSelect.vue";
import VInput from "@/components/atoms/input/VInput.vue";
import { ref } from "vue";
import { IconId } from "@/common/IconsDefinitions/IconId";

export default {
  name: "Search",
  components: { VInput, VSelect, VLabel },
  setup() {
    const searchIcon = IconId.SEARCH;
    const selectOptions = ["Name", "Identifier", "Episode"];
    const selectedValue = "";
    const filterValue = ref<string>("");
    return {
      selectOptions,
      selectedValue,
      filterValue,
      searchIcon
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
