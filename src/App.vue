<template>
  <icon-label :icon-props="iconProps" :label-props="labelProps"></icon-label>
</template>

<script lang="ts">
import { IconId } from "@/common/IconsDefinitions/IconId";
import IconLabel from "@/components/molecules/IconLabel/IconLabel.vue";
import { IconProps } from "@/components/atoms/icon/interfaces/IconProps";
import { LabelProps } from "@/components/atoms/label/interfaces/LabelProps";

export default {
  components: {
    IconLabel,
  },
  setup() {
    const iconId = IconId.STAR;
    const iconProps: IconProps = {
      iconId: IconId.MALE
    };
    const labelProps: LabelProps = {
      value: "Male"
    };
    return {
      iconId,
      iconProps,
      labelProps
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
