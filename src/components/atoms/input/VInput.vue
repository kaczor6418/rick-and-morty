<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { PropType, Ref } from "vue";

export default {
  name: "VInput",
  props: {
    modelValue: {
      type: Object as PropType<Ref<string>>
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  color: #a9b1bd;
  border: 1px solid #a9b1bd;
}
</style>
