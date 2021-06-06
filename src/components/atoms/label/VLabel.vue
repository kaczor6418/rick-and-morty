<template>
  <label>{{ value }}</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VLabel",
  props: {
    value: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
label {
  height: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
</style>
