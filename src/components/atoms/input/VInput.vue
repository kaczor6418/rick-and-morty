<template>
  <input class="custom-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">

export default {
  name: "VInput",
  props: {
    modelValue: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  border: none;
  background-color: transparent;
}
.custom-input {
  height: inherit;
  color: #a9b1bd;
  padding: 16px;
}
</style>
