<template>
  <div>
    <input
      :list="name"
      :value="selectValue"
      :placeholder="placeholder"
      @input="updateValue"
    />
    <datalist :id="name">
      <option v-for="option in options" :value="option" :key="option"></option>
    </datalist>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { SelectProps } from "@/components/atoms/select/interfaces/SelectProps";
import { SetupContext } from "@vue/runtime-core";

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
    initialValue: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  emits: ["select-value-changed"],
  setup(props: SelectProps, context: SetupContext) {
    let selectValue = props.initialValue ?? props.options[0];
    const updateValue = (e: any) => {
      selectValue = e.target.value;
      if (props.options.includes(selectValue)) {
        context.emit("select-value-changed", selectValue);
      }
    };
    return {
      updateValue,
      selectValue
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
