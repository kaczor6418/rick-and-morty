<template>
  <div :style="{ width: size }" v-html="icon"></div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IconId } from "@/common/IconsDefinitions/IconId";
import { ICONS_DEFINITIONS } from "@/common/IconsDefinitions/ICON_DEFINITIONS";
import { IconSize } from "@/components/atoms/icon/interfaces/IconSize";

export default {
  name: "Icon",
  props: {
    iconId: Object as PropType<IconId>,
    size: {
      type: Object as PropType<IconSize>,
      default: IconSize.M
    }
  },
  setup(props: any) {
    const icon = ICONS_DEFINITIONS.getPlainIcon(props.iconId);
    return {
      icon
    };
  }
};
</script>

<style lang="scss" scoped></style>
