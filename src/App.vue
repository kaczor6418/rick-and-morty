<template>
  <icon-label :icon-props="iconProps" :label-props="labelProps"></icon-label>
  <v-select
    :options="selectProps.options"
    :name="selectProps.name"
    :selected="selectProps.selected"
    :placeholder="selectProps.placeholder"
  ></v-select>
</template>

<script lang="ts">
import { IconId } from "@/common/IconsDefinitions/IconId";
import IconLabel from "@/components/molecules/IconLabel/IconLabel.vue";
import { IconProps } from "@/components/atoms/icon/interfaces/IconProps";
import { LabelProps } from "@/components/atoms/label/interfaces/LabelProps";
import VSelect from "@/components/atoms/select/VSelect.vue";
import { SelectProps } from "@/components/atoms/select/interfaces/SelectProps";

export default {
  components: {
    VSelect,
    IconLabel
  },
  setup() {
    const iconId = IconId.STAR;
    const iconProps: IconProps = {
      iconId: IconId.MALE
    };
    const labelProps: LabelProps = {
      value: "Male"
    };
    const selectProps: SelectProps = {
      options: ["Name", "Identifier", "Episode"],
      // selected: "Name",
      name: "rick-and-morty-filter",
      placeholder: "Choose fitter"
    };
    return {
      iconId,
      iconProps,
      labelProps,
      selectProps
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
</style>
