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

<style lang="scss" scoped></style>
