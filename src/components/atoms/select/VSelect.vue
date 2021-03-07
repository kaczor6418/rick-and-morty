<template>
  <div>
    <input :list="name" :value="selectedOption" :placeholder="placeholder" />
    <datalist :id="name">
      <option v-for="option in options" :value="option" :key="option"></option>
    </datalist>
  </div>
</template>

<script lang="ts">
import { PropType, ref } from "vue";
import { SelectProps } from "@/components/atoms/select/interfaces/SelectProps";

export default {
  name: "VSelect",
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array as PropType<string[]>,
      required: true
    },
    selected: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  setup(props: SelectProps) {
    const selectedOption = ref<string>(props.selected ?? "");
    return {
      selectedOption
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  border: inherit;
}
input {
  height: inherit;
  border: none;
  background: transparent;
  color: #a9b1bd;
  font-weight: 500;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  font-family: "Poppins", sans-serif;
}
</style>
