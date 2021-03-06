<template>
  <div class="search">
    <v-label class="search__label" value="Search by" />
    <v-select class="search__select"
      :options="selectOptions"
      :selected="selectedValue"
      name="rick-and-morty-filters"
      placeholder="Choose filter"
    />
    <v-input class="search__input" v-model="filterValue" />
  </div>
</template>

<script lang="ts">
import VLabel from "@/components/atoms/label/VLabel.vue";
import VSelect from "@/components/atoms/select/VSelect.vue";
import VInput from "@/components/atoms/input/VInput.vue";
import { ref } from "vue";

export default {
  name: "Search",
  components: { VInput, VSelect, VLabel },
  setup() {
    const selectOptions = ["Name", "Identifier", "Episode"];
    const selectedValue = "";
    const filterValue = ref<string>("");
    return {
      selectOptions,
      selectedValue,
      filterValue
    };
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 505px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #a9b1bd solid;
  border-radius: 12px;

  &__label,
  &__select,
  &__imput {
    height: inherit;
  }

  &__label {
    flex: 1;
  }

  &__select {
    flex: 1;
  }

  &__imput {
    flex: 2;
    border-radius: 0 12px 0 12px;
  }
}
</style>
