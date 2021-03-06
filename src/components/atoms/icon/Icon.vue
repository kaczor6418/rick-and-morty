<template>
  <div class="wrapper" :style="{ width: size }">
    <div class="icon" v-html="icon"></div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IconId } from "@/common/IconsDefinitions/IconId";
import { ICONS_DEFINITIONS } from "@/common/IconsDefinitions/ICON_DEFINITIONS";
import { IconSize } from "@/components/atoms/icon/interfaces/IconSize";
import { IconProps } from "@/components/atoms/icon/interfaces/IconProps";

export default {
  name: "Icon",
  props: {
    iconId: {
      type: String as PropType<IconId>,
      required: true
    },
    size: {
      type: String as PropType<IconSize>,
      default: IconSize.M
    }
  },
  setup(props: IconProps) {
    const icon = ICONS_DEFINITIONS.getPlainIcon(props.iconId);
    return {
      icon
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  .icon {
    width: inherit;
  }
}
</style>
