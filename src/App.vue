<template>
  <icon :icon-id="iconId" />
  <v-label value="Dupa"></v-label>
</template>

<script lang="ts">
import Icon from "./components/atoms/icon/Icon.vue";
import { IconId } from "@/common/IconsDefinitions/IconId";
import VLabel from "@/components/atoms/label/VLabel.vue";

export default {
  components: {
    VLabel,
    Icon
  },
  setup() {
    const iconId = IconId.STAR;
    return {
      iconId: iconId
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a9b1bd;
  margin-top: 60px;
}
</style>
