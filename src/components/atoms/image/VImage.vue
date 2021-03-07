<template>
  <img :style="{ maxWidth: width }" :src="url" :alt="description" />
</template>

<script>
export default {
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
};
</script>

<style scoped>

</style>
