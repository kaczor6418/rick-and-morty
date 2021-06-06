<template>
  <img :style="{ maxWidth: width }" :src="url" :alt="description" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VImage",
  props: {
    url: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: "43px"
    }
  }
});
</script>

<style lang="scss" scoped></style>
