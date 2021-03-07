<template>
  <label>{{ value }}</label>
</template>

<script lang="ts">
export default {
  name: "VLabel",
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
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
