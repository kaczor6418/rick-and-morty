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
import { defineComponent, PropType } from "vue";

export default defineComponent({
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
  setup(props, context) {
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
});
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
